import "./intro.scss"
import portrait from "./media/portrait.png"
import cv_url from "./media/cv.png"

function Intro() {
    return (
        <div className="Intro_wrapper">
            <div id="title_container">
                <h1>Torsten Lareke</h1>
                <h2>Backend Developer with Java and C# experience</h2>
            </div>
            <div id="portrait_container">
                <img src={portrait} alt="Portrait" />
            </div>
            <div id="desc_container">
                <h2>About Me</h2>
                <p>
                    Hello! I'm Torsten, a versatile backend developer skilled in both Java and C#, which broadens my perspective in the field. This June marks the completion of my two-year Java Developer education and my internship at Planday.

                    During my educational journey, I've explored various facets of programming, including (but not limited to) database management, Java web services, front-end development fundamentals, API implementation, and Android development.

                    Learning new things and venturing into unseen territory is something that drives me every day!
                </p>
                <form id="cv_button_wrapper" target="_blank">
                    <button id="about_button" formAction="https://drive.google.com/file/d/1P1aOPR0MSWkPle1ylPtduyuIFQodQpId/view?usp=sharing">
                        <img src={cv_url} alt="CV icon" />
                        <p>Download CV</p>
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Intro