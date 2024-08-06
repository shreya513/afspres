import React from 'react';

const Bio: React.FC = () => {
  return (
    <div className="bio-container" style={{ backgroundImage: 'url(img3.JPG)', backgroundSize: "cover" }}>
      <div className=" bio-text-box">
        <p className="bio-text">
          Hello! I'm Shreya Joshi, a software engineering summer analyst at Accenture Federal Services. I'm a rising senior at Johns Hopkins University, double majoring in Computer
          Science and Cognitive Science, and minoring in Spanish. This summer, I'm working as an Integration Engineer.<br className="break"></br>
          At school, I'm a teaching assistant for Data Structures and am involved in Machine Learning research at the Johns Hopkins Hospital Cognitive Neurophysiology and 
          Brain-Machine Interfaces Lab, working on a project on detecting speech from neural signals. I'm serving as the President of the Johns Hopkings campus event programming 
          board, am involved in the JHU Women in CS club, and perform violin for patients in local hospitals. This past semester I was also a Spanish translator for TEDx and a 
          volunteer at a local Baltimore Public School, teaching and translating for Spanish-speaking students and parents. Outside of school, I love hiking, baking, and 
          traveling!<br className="break"></br>
          This summer, I've had an incredible journey full of growth, adventure, and amazing people. This timeline showcases the highlights of my experiences! :)
        </p>
      </div>
    </div>
  );
};

export default Bio;
