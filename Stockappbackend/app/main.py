from fastapi import Depends, HTTPException, status,FastAPI
from sqlalchemy.orm import Session
from .database import SessionLocal, engine
from . import models, schemas, crud, auth
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware

from .auth import get_current_user

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

# Dependency to get DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/signup")
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    # Check for duplicate email or username
    if crud.get_user_by_username(db, user.username):
        raise HTTPException(status_code=400, detail="Username already taken")
    if crud.get_user_by_email(db, user.email):
        raise HTTPException(status_code=400, detail="Email already registered")

    new_user = crud.create_user(db, user)
    return {"msg": "User created successfully", "username": new_user.username}


@app.post("/register", response_model=schemas.UserOut)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    return crud.create_user(db, user)

@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = crud.get_user_by_username(db, form_data.username)
    if not user or not auth.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    access_token = auth.create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}


# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


from .auth import get_current_user

@app.get("/me", response_model=schemas.UserOut)
def read_current_user(current_user: models.User = Depends(get_current_user)):
    return current_user
