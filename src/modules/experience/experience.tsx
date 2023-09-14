import "./experience.scss"
import React, { useState } from 'react';

//Skills
import csharp from "../skills/media/csharp.png"
import aspnetcore from "../skills/media/asp-net-core2.png";
import java from "../skills/media/java.png";
import react from "../skills/media/reactjs.png";
import js from "../skills/media/js.png";
import ts from "../skills/media/ts.png";
import css from "../skills/media/css.png";
import html from "../skills/media/html5.png";
import sass from "../skills/media/sass.png";
import vite from "../skills/media/vite.png";
import mysql from "../skills/media/mysql.png";

// Tools & Misc
import azure from "../skills/media/azure.png";
import github from "../skills/media/github.png";
import agile from "../skills/media/agile.png";
import trello from "../skills/media/trello.png";
import jira from "../skills/media/jira.png";
import restful from "../skills/media/api_rest.png";

function Experience() {
    const [selectedExperience, setSelectedExperience] = useState('Planday');
    const [activeBrowserItem, setActiveBrowserItem] = useState('planday'); 

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
                            <div id="exp_skills">
                                <img src={csharp} alt="C# Logo"/>
                                <img src={aspnetcore} alt="ASP.NET Core Logo"/>
                                <img src={azure} alt="Microsoft Azure Logo"/>
                                <img src={restful} alt="Restful Logo"/>
                                <img src={agile} alt="Agile Method Logo"/>
                                <img src={jira} alt="Jira Logo"/>
                            </div>
                            <ul>
                                <li>Developed, maintained and shipped production code for a Microservice based application, mainly using C#, ASP.NET Core 6, Azure and RESTful APIs.</li>
                                <li>Wrote, updated, and executed comprehensive unit tests to validate code changes, ensuring the application's stability and functionality.</li>
                                <li>Investigated and conducted code cleanup in multiple repositories to enhance code quality, consistently reducing the number of SonarQube issues by 80-90%, leading to improved overall code maintainability and reliability.</li>
                                <li>Actively participated in an English-speaking tech team, adhering to agile methodologies with 2-week sprints, and efficiently managing projects through Jira (kanban) boards.</li>
                            </ul>
                        </article>
                    )}
                    {selectedExperience === 'King' && (
                        <article>
                            <h2>Level Designer & Intern @ King</h2>
                            <h4>November 2019 - September 2021</h4>
                            <div id="exp_skills">
                                <img src={trello} alt="Trello Logo"/>
                                <img src={agile} alt="Agile Method Logo"/>
                                <img src={jira} alt="Jira Logo"/>
                            </div>
                            <ul>
                                <li>Responsible for designing and playtesting new levels, ensuring alignment with design goals and difficulty targets.</li>
                                <li>Collaborated on cross-team projects, engaging with QA, artists, and developers to design and implement new game features, fostering effective communication and teamwork within a tech-driven environment.</li>
                                <li>Regularly collaborated with data scientists to optimize level performance, contributing insights and ideas to improve the game's financial outcomes.</li>
                                <li>Worked in an English-speaking tech team, following agile methodologies with 2-week sprints, utilizing Trello (kanban) boards for efficient project management.</li>
                            </ul>
                        </article>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;