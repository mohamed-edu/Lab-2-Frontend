// Portfolio.js
import React from 'react'; // Don't forget to import React
import Project from '../Components/project'; // Import your Project component
import DarkMode from '../Components/DarkMode'


const Portfolio = () => {
  return (
    <div className="portfolio">
      
      <DarkMode/>
        <Project />
        
        
    </div>
  );
};

export default Portfolio;


