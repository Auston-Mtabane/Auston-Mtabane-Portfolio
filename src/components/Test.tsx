import React, { useState } from 'react';
import '../styles/Test.css';

interface CarouselItem {
  id: number;
  title: string;
  content: string;
  className: string;
}

interface CarouselProps {
  items?: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items = defaultItems }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">React Carousel</h1>
      
      <div className="carousel-wrapper">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`carousel-item ${item.className}`}
            >
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>

        <button 
          className="carousel-nav prev" 
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          className="carousel-nav next" 
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-counter">
        {currentIndex + 1} of {items.length}
      </div>
    </div>
  );
};

// Default items data
const defaultItems: CarouselItem[] = [
  {
    id: 1,
    title: "Welcome",
    content: "This is the first slide of our beautiful React carousel. Experience smooth transitions and elegant design with TypeScript support!",
    className: "item-1"
  },
  {
    id: 2,
    title: "Features",
    content: "Our carousel includes arrow navigation, smooth animations, responsive design, and beautiful gradient backgrounds that create an engaging user experience.",
    className: "item-2"
  },
  {
    id: 3,
    title: "Responsive",
    content: "Built with mobile-first design principles, this carousel adapts perfectly to any screen size while maintaining its visual appeal and functionality.",
    className: "item-3"
  },
  {
    id: 4,
    title: "Performance",
    content: "Optimized React components with TypeScript ensure smooth performance across all devices, providing users with a seamless browsing experience.",
    className: "item-4"
  },
  {
    id: 5,
    title: "Customizable",
    content: "Easy to customize colors, transitions, and content. Perfect for showcasing products, testimonials, or any content that needs an elegant presentation.",
    className: "item-5"
  }
];

export default Carousel;