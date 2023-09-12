import "./experience.scss"

//Skills
import csharp from "./media/csharp.png"
import aspnetcore from "./media/asp-net-core2.png"
import java from "./media/java.png"
import react from "./media/reactjs.png"
import js from "./media/js.png"
import ts from "./media/ts.png"
import css from "./media/css.png"
import html from "./media/html5.png"
import sass from "./media/sass.png"
import vite from "./media/vite.png"
import mysql from "./media/mysql.png"

//Tools & Misc
import azure from "./media/azure.png"
import github from "./media/github.png"
import agile from "./media/agile.png"
import trello from "./media/trello.png"
import jira from "./media/jira.png"
import restful from "./media/api_rest.png"

function Experience() {
    return (
        <div className="Exp_wrapper">
            <div id="header_container">
                <h1>Experience</h1>
                <p>These are the technologies & tools I have experience in through either projects or education</p>
            </div>
            <div id="exp_container">
                <div id="exp_browser">
                    <h4>Planday</h4>
                    <h4>King</h4>
                </div>
                <div id="exp_objects">
                    <article>
                        <h2>Backend Engineer Intern @ Planday</h2>
                        <h4>January - May 2023</h4>
                        <ul>
                            <li>Some text</li>
                            <li>Some text</li>
                            <li>Some text</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Level Designer & Intern @ King</h2>
                        <h4>November 2019 - September 2021</h4>
                        <ul>
                            <li>Some text</li>
                            <li>Some text</li>
                            <li>Some text</li>
                        </ul>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Experience