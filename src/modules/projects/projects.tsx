import "./projects.scss"

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

// Links
import githublink from "./media/links/github_link.png"
import newtab from "./media/links/opentab.png"
import download from "./media/links/download.png"

// Project Media
import new_portfolio_1 from "./media/projects/new_portfolio/Portfolio_1.png"
import old_portfolio_1 from "./media/projects/old_portfolio/Portfolio_old_1.png"

function Projects() {
  return (
    <div className="Projects_wrapper">
      <div id="header_container">
        <h1>Projects</h1>
        <p>These are the technologies & tools I have experience in through either projects or education</p>
      </div>
      <div id="projects_container">
        <article className="left_article">
          <div id="project_image">
            <img src={new_portfolio_1} alt="" />
          </div>
          <div id="project_info">
            <h2>Portfolio Website</h2>
            <p>This very website! Created and designed with mobile devices in mind, for a seamless experience. Built with a modern techstack with technologies such as React.js and Vite for a modern and streamlined development process. I took my learnings from my previous site and built a better project, both in terms of structure and design.</p>
            <div id="project_skills">
              <img src={react} alt="React.js" />
              <img src={ts} alt="Typescript" />
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={sass} alt="Sass" />
              <img src={vite} alt="Vite" />
            </div>
            <div id="project_links">
              <a href="https://github.com/SirSalsa/dev-portfolio">
                <img src={githublink} alt="Github" />
              </a>
            </div>
          </div>
        </article>
        <article className="right_article">
          <div id="project_info">
            <h2>Portfolio Website (Old)</h2>
            <p>My first React-based portfolio site that I built over the summer of 2022. Created using technologies I learnt in addition to experimenting with new technologies like Vite instead of Parcel and Sass instead of just CSS. Features multiple different tabs that the user can browse between. Designed with mobile devices in mind.</p>
            <div id="project_skills">
              <img src={react} alt="React.js" />
              <img src={js} alt="Javascript" />
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={sass} alt="Sass" />
              <img src={vite} alt="Vite" />
            </div>
            <div id="project_links">
              <a href="https://github.com/SirSalsa/portfolio-old">
                <img src={githublink} alt="Github" />
              </a>
              <a href="https://sirsalsa.github.io/portfolio-old/">
                <img src={newtab} alt="New Tab" />
              </a>
            </div>
          </div>
          <div id="project_image">
            <img src={old_portfolio_1} alt="" />
          </div>
        </article>
      </div>
    </div>
  );
}

export default Projects