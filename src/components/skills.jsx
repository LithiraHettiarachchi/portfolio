import React, { useState } from 'react';

export default function Skills() {
  const [isDetailedView, setIsDetailedView] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [animateOut, setAnimateOut] = useState(false);

  const skillData = {
    'Languages & Frameworks': [
      'JavaScript', 'Python', 'R', 'React.js', 'React Native', 'Node.js', 'FastAPI', 'Spring Boot', 'Java',
    ],
    'Data Science & ML': [
      'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'Statmodels', 'Time Series Analysis'
    ],
    'Database': [
      'MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'
    ],
    'Other': [
      'Git', 'Docker', 'GitLab CI/CD', 'Postman', 'VS Code', 'IntelliJ IDEA', 'PyCharm'
    ],
  };

  const showDetail = (category) => {
    setAnimateOut(true);
    setTimeout(() => {
      setCurrentCategory(category);
      setIsDetailedView(true);
      setAnimateOut(false);
    }, 500);
  };

  const goBack = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setIsDetailedView(false);
      setAnimateOut(false);
    }, 500);
  };

  const animationClasses = {
    fadeIn: 'opacity-100 scale-100 duration-500 ease-in-out',
    fadeOut: 'opacity-0 scale-90 duration-500 ease-in-out',
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-[#1c2c4d] to-[#141b2c] min-h-screen flex flex-col items-center p-6 md:p-8 lg:p-12 overflow-hidden"
    >
      <style>
        {`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out forwards;
        }
        .tile-gradient {
          background-image: linear-gradient(135deg, #a461e7, #6a88e5, #44b7f4);
        }
        `}
      </style>

      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12 animate-slideInLeft">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100">Skills</h1>
        <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
          A breakdown of my technical expertise across languages, frameworks, machine learning tools,
          and supporting technologies.
        </p>
      </div>

      {/* Main Categories */}
      {!isDetailedView && (
        <div
          id="main-skills"
          className={`w-full flex flex-col items-center transition-all ${animateOut ? animationClasses.fadeOut : animationClasses.fadeIn
            }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-20 md:gap-y-40 w-full max-w-4xl px-4">
            {/* First Row */}
            {['Languages & Frameworks', 'Data Science & ML'].map((category) => (
              <div
                key={category}
                onClick={() => showDetail(category)}
                className="tile-gradient text-white rounded-[1.5rem] p-6 md:p-8 shadow-md hover:shadow-lg transform transition-transform hover:scale-105 cursor-pointer text-center"
              >
                <p className="text-lg md:text-xl font-semibold">{category}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-20 md:gap-y-40 w-full max-w-4xl mt-8 md:mt-12 px-4">
            {/* Second Row */}
            {['Database', 'Other'].map((category) => (
              <div
                key={category}
                onClick={() => showDetail(category)}
                className="tile-gradient text-white rounded-[1.5rem] p-6 md:p-8 shadow-md hover:shadow-lg transform transition-transform hover:scale-105 cursor-pointer text-center"
              >
                <p className="text-lg md:text-xl font-semibold">{category}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Skills View */}
      {isDetailedView && (
        <div
          id="detailed-skills"
          className={`w-full flex flex-col items-center justify-center transition-all ${animateOut ? animationClasses.fadeOut : animationClasses.fadeIn
            }`}
        >
          <style>
            {`
                    @keyframes slideInQueue {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                    }
                    .animate-slideInQueue {
                    animation: slideInQueue 0.6s ease-out forwards;
                    }
                `}
          </style>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-6xl px-4">
            {skillData[currentCategory].map((skill, index) => (
              <div
                key={skill}
                className="tile-gradient text-white rounded-[1.5rem] p-4 md:p-6 shadow-md transform transition-all duration-300 hover:scale-105 text-center opacity-0 animate-slideInQueue"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-base md:text-lg font-medium">{skill}</p>
              </div>
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-bold mt-8 md:mt-10 text-gray-100">{currentCategory}</p>
          <button
            onClick={goBack}
            className="mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 !bg-gray-100 text-gray-800 text-base md:text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Go Back
          </button>
        </div>
      )}
    </section>
  );
}

