'use client';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const slides = [
  "Trusted by 2+ Crore Investors",
  "0 Brokerage on Delivery",
  "Backed by 25+ Years Experience",
];

export default function BannerCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      origin: "center",
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
    },
    drag: true,
    created: (slider) => {
      setInterval(() => {
        slider.next();
      }, 3000); // Auto slide every 3s
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full px-4 mt-4">
      {slides.map((text, index) => (
        <div
          key={index}
          className="keen-slider__slide bg-[#1f2937] rounded-xl px-4 py-3 text-center text-white text-sm font-medium"
        >
          {text}
        </div>
      ))}
    </div>
  );
}
