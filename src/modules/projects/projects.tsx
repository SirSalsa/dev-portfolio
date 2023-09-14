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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac vehicula velit. Sed id scelerisque nisi. Phasellus eu nunc id ex congue dictum. Vestibulum euismod cursus semper. Fusce viverra justo nec libero hendrerit, eu interdum tortor blandit. In sit amet nisl at nunc dapibus suscipit. Sed fringilla odio at nisi tincidunt, ac pharetra erat egestas. Vivamus fringilla, velit id scelerisque interdum, quam nisl bibendum lectus, eget facilisis odio lectus eget felis. Fusce vestibulum, odio et interdum tincidunt, elit arcu hendrerit arcu, id efficitur odio quam a lectus.</p>
            <div id="project_skills">
              <img src={react} alt="React.js" />
              <img src={ts} alt="Typescript" />
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={sass} alt="Sass" />
              <img src={vite} alt="Vite" />
            </div>
            <div id="project_links">
              <a href="https://github.com/SirSalsa/portfolio-vite">
                <img src={githublink} alt="Github" />
              </a>
            </div>
          </div>
        </article>
        <article className="right_article">
          <div id="project_info">
            <h2>Portfolio Website (Old)</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac vehicula velit. Sed id scelerisque nisi. Phasellus eu nunc id ex congue dictum. Vestibulum euismod cursus semper. Fusce viverra justo nec libero hendrerit, eu interdum tortor blandit. In sit amet nisl at nunc dapibus suscipit. Sed fringilla odio at nisi tincidunt, ac pharetra erat egestas. Vivamus fringilla, velit id scelerisque interdum, quam nisl bibendum lectus, eget facilisis odio lectus eget felis. Fusce vestibulum, odio et interdum tincidunt, elit arcu hendrerit arcu, id efficitur odio quam a lectus.</p>
            <div id="project_skills">
              <img src={react} alt="React.js" />
              <img src={js} alt="Javascript" />
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={sass} alt="Sass" />
              <img src={vite} alt="Vite" />
            </div>
            <div id="project_links">
              <a href="https://github.com/SirSalsa/portfolio-vite">
                <img src={githublink} alt="Github" />
              </a>
              <a href="https://github.com/SirSalsa/portfolio-vite">
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