import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

import carouselImage1 from '../Assets/carousel-1.jpg';
import carouselImage2 from '../Assets/carousel-2.jpg';

const Admin = () => {
  const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const slides = [
      {
        imgSrc: carouselImage1,
        title: 'Find The Perfect Job That You Deserved',
        description:
          'True elite just a simple word. Pain at steady sit, no further steps. They also say the word with just the right steps and the perfect elite.',
      },
      {
        imgSrc: carouselImage2,
        title: 'Find The Best Startup Job That Fit You',
        description:
          'Bold vision, effortless grace. A journey shaped by purpose, where every step resonates with excellence and true potential.',
      },
    ];

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }, []);

    const handleSearchJobClick = () => {
      navigate('/jobs');
    };
    const handleViewApplicantsClick = () => {
      navigate('/applications/me');
    };

    return (
      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              <img
                className="carousel-image"
                src={slide.imgSrc}
                alt={`carousel-${index}`}
              />
              <div className="overlay">
                <div className="carousel-content">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-description">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="admin-page">
      <Carousel />
    </div>
  );
};

export default Admin;
