import "./experience.scss"
import React, { useState } from 'react';

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState('Planday');
  const [activeBrowserItem, setActiveBrowserItem] = useState('planday'); // Initialize it with the default active item

  const handleExperienceClick = (experience: string, browserItemId: string) => {
    setSelectedExperience(experience);
    setActiveBrowserItem(browserItemId);
  };

  return (
    <div className="Exp_wrapper">
      <div id="header_container">
        <h1>Experience</h1>
        <p>These are the technologies & tools I have experience in through either projects or education</p>
      </div>
      <div id="exp_container">
        <div id="exp_browser">
          <h4
            onClick={() => handleExperienceClick('Planday', 'planday')}
            className={activeBrowserItem === 'planday' ? 'active' : ''}
          >
            Planday
          </h4>
          <h4
            onClick={() => handleExperienceClick('King', 'king')}
            className={activeBrowserItem === 'king' ? 'active' : ''}
          >
            King
          </h4>
        </div>
        <div id="exp_objects">
          {selectedExperience === 'Planday' && (
            <article>
              <h2>Backend Engineer Intern @ Planday</h2>
              <h4>January - May 2023</h4>
              <ul>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
              </ul>
            </article>
          )}
          {selectedExperience === 'King' && (
            <article>
              <h2>Level Designer & Intern @ King</h2>
              <h4>November 2019 - September 2021</h4>
              <ul>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
              </ul>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;