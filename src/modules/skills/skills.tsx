import "./skills.scss"

//Skills


//Tools & Misc
import github from "./media/github.png"


function Skills() {
  return (
      <div className="skills_wrapper">
        <div id="header_container">
          <h1>Skills & Tools</h1>
          <p>These are the technologies & tools I have experience in through either projects or education.</p>
        </div>
        <div id="skills_container">
          <article>
            <img src={github} alt="Github Logo"/>
            <p>Github</p>
          </article>
          <article>
            <img src={github} alt="Github Logo"/>
            <p>Github</p>
          </article>
          <article>
            <img src={github} alt="Github Logo"/>
            <p>Github</p>
          </article>
        </div>
      </div>
  );
}

export default Skills