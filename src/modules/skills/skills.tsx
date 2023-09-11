import "./skills.scss"

//Skills
import csharp from "./media/csharp.png"
import aspnetcore from "./media/asp-net-core2.png"
import java from "./media/java.png"
import react from "./media/reactjs.png"
import js from "./media/js.png"
import ts from "./media/ts.png"
import css from "./media/css.png"
import html from "./media/html5.png"
import vite from "./media/vite.png"
import mysql from "./media/mysql.png"

//Tools & Misc
import azure from "./media/azure.png"
import github from "./media/github.png"
import agile from "./media/agile.png"
import trello from "./media/trello.png"
import jira from "./media/jira.png"
import restful from "./media/api_rest.png"

function Skills() {
  return (
      <div className="Skills_wrapper">
        <div id="header_container">
          <h1>Skills & Tools</h1>
          <p>These are the technologies & tools I have experience in through either projects or education</p>
        </div>
        <div id="skills_container">
          <article>
            <img src={csharp} alt="C# Logo"/>
            <p>C#</p>
          </article>
          <article>
            <img src={aspnetcore} alt="ASP.NET Core Logo"/>
            <p>ASP.NET Core</p>
          </article>
          <article>
            <img src={java} alt="Java Logo"/>
            <p>Java</p>
          </article>
          <article>
            <img src={react} alt="React.js Logo"/>
            <p>React.js</p>
          </article>
          <article>
            <img src={js} alt="Javascript Logo"/>
            <p>Javascript</p>
          </article>
          <article>
            <img src={ts} alt="Typescript Logo"/>
            <p>Typescript</p>
          </article>
          <article>
            <img src={css} alt="CSS Logo"/>
            <p>CSS</p>
          </article>
          <article>
            <img src={html} alt="HTML Logo"/>
            <p>HTML</p>
          </article>
          <article>
            <img src={vite} alt="Vite Logo"/>
            <p>Vite</p>
          </article>
          <article>
            <img src={mysql} alt="Mysql Logo"/>
            <p>MySQL</p>
          </article>
          <article>
            <img src={azure} alt="Azure Logo"/>
            <p>Microsoft Azure</p>
          </article>
          <article>
            <img src={restful} alt="RESTful API Logo"/>
            <p>RESTful API</p>
          </article>
          <article>
            <img src={github} alt="Github Logo"/>
            <p>Github</p>
          </article>
          <article>
            <img src={agile} alt="Agile Logo"/>
            <p>Agile Method</p>
          </article>
          <article>
            <img src={trello} alt="Trello Logo"/>
            <p>Trello</p>
          </article>
          <article>
            <img src={jira} alt="Jira Logo"/>
            <p>Jira</p>
          </article>
        </div>
      </div>
  );
}

export default Skills