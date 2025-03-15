import React from 'react';
import './category.css';

const category = React.forwardRef((props, ref) => {
  const categories = [
    {
      icon: 'fa-mail-bulk',
      title: 'Marketing',
      vacancies: 80,
    },
    {
      icon: 'fa-headset',
      title: 'Customer Service',
      vacancies: 50,
    },
    {
      icon: 'fa-user-tie',
      title: 'Human Resource',
      vacancies: 56,
    },
    {
      icon: 'fa-tasks',
      title: 'Project Management',
      vacancies: 80,
    },
    {
      icon: 'fa-chart-line',
      title: 'Business Development',
      vacancies: 30,
    },
    {
      icon: 'fa-hands-helping',
      title: 'Sales & Communication',
      vacancies: 28,
    },
    {
      icon: 'fa-book-reader',
      title: 'Teaching & Education',
      vacancies: 90,
    },
    {
      icon: 'fa-drafting-compass',
      title: 'Design & Creative',
      vacancies: 70,
    }
  ];

  return (
    <div ref={ref}>
      <div className="category-container">
        <h1 className="category-title">Explore By Category</h1>
        <div className="category-list">
          {categories.map((category, index) => (
            <div
              className="category-item"
              key={index}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <a className="category-card">
                <i className={`fa ${category.icon} fa-3x text-primary mb-4`}></i>
                <h6>{category.title}</h6>
                <p>{category.vacancies} Vacancy</p>
              </a>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
});

export default category;
