import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import Category from '../Category/category';
import JobList from '../JobList/joblist';
import Testimonials from '../Testimonials/testimonials';
import Contact from '../Contact/contact'
import carouselImage1 from '../Assets/carousel-1.jpg';
import carouselImage2 from '../Assets/carousel-2.jpg';
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/nav';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      imgSrc: carouselImage1,
      title: 'Find The Perfect Job That You Deserved',
      description: 'True elite just a simple word. Pain at steady sit, no further steps. They also say the word with just the right steps and the perfect elite.',
    },
    {
      imgSrc: carouselImage2,
      title: 'Find The Best Startup Job That Fit You',
      description: 'Bold vision, effortless grace. A journey shaped by purpose, where every step resonates with excellence and true potential.',
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
    <div>

      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              <img className="carousel-image" src={slide.imgSrc} alt={`carousel-${index}`} />
              <div className="overlay">
                <div className="carousel-content">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-description">{slide.description}</p>
                  <button className="carousel-button primary" onClick={handleSearchJobClick}>Search A Job</button>
                  <button className="carousel-button secondary" onClick={handleViewApplicantsClick}>View Applicants</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: '1,23,441',
      subTitle: 'Live Job',
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: '91220',
      subTitle: 'Companies',
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: '2,34,200',
      subTitle: 'Job Seekers',
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: '1,03,761',
      subTitle: 'Employers',
      icon: <FaUserPlus />,
    },
  ];

  return (
    <div className="heroSection">
      <div className="details">
        {details.map((element) => (
          <div className="card" key={element.id}>
            <div className="icon">{element.icon}</div>
            <div className="content">
              <p>{element.title}</p>
              <p>{element.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeApp = () => {
  const categoryRef = useRef(null);
  const joblistRef = useRef(null);
  const testRef = useRef(null);

  const [isCategoryScrolling, setIsCategoryScrolling] = useState(false);
  const [isJoblistScrolling, setIsJoblistScrolling] = useState(false);
  const [isTestScrolling, setIsTestScrolling] = useState(false);


  const scrollToCategory = () => {
    if (!isCategoryScrolling) {
      setIsCategoryScrolling(true);
      categoryRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });

      setTimeout(() => {
        window.scrollBy(0, -50);
        setIsCategoryScrolling(false);
      }, 500);
    }
  };

  const scrollToJoblist = () => {
    if (!isJoblistScrolling) {
      setIsJoblistScrolling(true);
      joblistRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });

      setTimeout(() => {
        window.scrollBy(0, -70);
        setIsJoblistScrolling(false);
      }, 500);
    }
  };

  const scrollToTest = () => {
    if (!isTestScrolling) {
      setIsTestScrolling(true);
      testRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });

      setTimeout(() => {
        window.scrollBy(0, -50);
        setIsTestScrolling(false);
      }, 500);
    }
  };
  return (
    <div>
      <Carousel />
      <HeroSection />
      <Nav onJobCategoryClick={scrollToCategory} onJobListClick={scrollToJoblist} onTestClick={scrollToTest} />
      <Category ref={categoryRef} />
      <JobList ref={joblistRef} />
      <Testimonials ref={testRef} /><br /><br />
      <Contact />
    </div>
  );
};
export default HomeApp;