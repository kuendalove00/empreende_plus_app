"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.css";
import Link from "next/link";
// Define a type for the slides
type Slide = {
  imageUrl: string; // URL of the image
  altText: string; // Alt text for the image
};

// Define the slides with image URLs
const slides: Slide[] = [
  {
    imageUrl: "/welcome/welcome1.png",
    altText: "A beautiful sunset over the ocean.",
  },
  {
    imageUrl: "/welcome/welcome2.png",
    altText: "A majestic mountain landscape.",
  },
  {
    imageUrl: "/welcome/welcome3.png",
    altText: "A lush forest scene.",
  },
];

// Create the ImageCarousel component
const ImageCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the first slide
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(slides.length - 1); // Loop back to the last slide
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const touchDelta = touchStartX - touchEndX;

    if (Math.abs(touchDelta) > 50) {
      if (touchDelta > 0) {
        handleNext(); // Swipe left
      } else {
        handleBack(); // Swipe right
      }
      setTouchStartX(null); // Reset the touch start point
    }
  };

  return (
    <div
      className={styles.carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <img
        src={slides[currentSlide].imageUrl}
        alt={slides[currentSlide].altText}
        className={styles.image}
      />
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      {currentSlide === slides.length - 1 && (
        <Link href="/signin" className={styles.getStartedButton}>
          Bora jogar!
        </Link>
      )}
    </div>
  );
};

export default ImageCarousel;
