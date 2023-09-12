import "./jobs.scss"

//Planday
import plandaylogo from "./media/professional/planday.png"

//Portfolio
import portfolio_front from "./media/other/portfolio_front.png"
import portfolio_1 from "./media/gallery/portfolio/portfolio_1.png"
import portfolio_2 from "./media/gallery/portfolio/portfolio_2.png"
import portfolio_3 from "./media/gallery/portfolio/portfolio_3.png"

//Project Window
import arrow from "./media/gallery/arrow.png"
import opentab from "./media/projectwindow/opentab.png"
import github from "./media/projectwindow/github.png"

import { useState } from "react"

interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  description: string;
  tags: { id: string; text: string }[];
  overview: string[];
  gallery: { type: "image" | "video"; src: string }[];
}

const PP_projects: Project[] = [
  {
    id: "PP_project1",
    title: "Planday",
    subtitle: "Planday",
    imageSrc: plandaylogo,
    description:
      "Planday specializes in helping businesses with hourly workers operate more efficiently by streamlining staff management and employee scheduling. The product is available on both PC and Mobile devices.",
    tags: [
      { id: "tag_1", text: "C#" },
      { id: "tag_2", text: "ASP.NET" },
      { id: "tag_3", text: "APIs" },
      { id: "tag_4", text: "Microsoft Azure" }
    ],
    overview: [
      "Developed new functionalities for both existing and new API endpoints",
      "Refactored code to conform to modern standard",
      "Wrote unit and integration tests for uncovered code, while updating outdated tests",
      "Executed tests on dynamic environments, built and monitored production after code deployment",
      "Utilized tools such as Jira and Bitbucket for efficient task tracking within the team",
      "Worked in 2-week sprints using SCRUM / Agile methodology"
    ],
    gallery: [
      { type: "image", src: plandaylogo },
      { type: "video", src: "https://www.youtube.com/embed/hLOOLObwODo" }
    ]
  }
];

const OP_projects: Project[] = [
  {
    id: "OP_project2",
    title: "Portfolio Sites",
    subtitle: "Personal Project",
    imageSrc: portfolio_front,
    description:
      "These two showcase portfolio sites have been crafted to vividly present both myself and my finest work. Leveraging the power of Vite and React.js, these sites are not only robust but also effortlessly adapt to any device screen size, ensuring an engaging user experience.",
    tags: [
      { id: "tag_2", text: "React" },
      { id: "tag_3", text: "TypeScript" },
      { id: "tag_5", text: "Sass" },
      { id: "tag_1", text: "Vite" }
    ],
    overview: [
      "Designed, coded and maintained three 3 different repositories as part of this project, using git submodules",
      "Created an easily reusable website template, allowing for adapting new content in a short timespan with high customizability",
      "Built a module system for both React components and their corresponding SCSS",
      "Deployed and hosted the website using Github Pages",
      "The code is available on my Github (look at Contact section)"
    ],
    gallery: [
      { type: "image", src: portfolio_1 },
      { type: "image", src: portfolio_2 },
      { type: "image", src: portfolio_3 },
    ]
  }
];

function Jobs() {

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projectWindowTop, setProjectWindowTop] = useState<string>('50%');
  const [galleryIndex, setGalleryIndex] = useState<number>(0);

  const handleProjectClick = (index: number) => {
    const currentPosition = window.scrollY;
    const navbaroffset = 70; // Navbar height + 10
    const topPosition = currentPosition + navbaroffset;
    setProjectWindowTop(`${topPosition}px`);
    setSelectedProject(index);
    setGalleryIndex(0); // Reset gallery index
  };

  const handleCloseClick = () => {
    setSelectedProject(null);
    setGalleryIndex(0); // Reset gallery index
  };

  const renderGalleryItem = (item: { type: string; src: string }) => {
    switch (item.type) {
      case "image":
        return <img src={item.src} alt="Gallery Item" />;
      case "video":
        return (
          <iframe
            src={item.src}
            title="Trailer Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      default:
        return null;
    }
  };

  const handleGalleryArrowClick = (direction: "left" | "right") => {
    const currentProjectGallery = selectedProject! < PP_projects.length
      ? PP_projects[selectedProject!].gallery
      : OP_projects[selectedProject! - PP_projects.length].gallery;

    if (direction === "left") {
      if (galleryIndex > 0) {
        setGalleryIndex(galleryIndex - 1);
      } else {
        setGalleryIndex(currentProjectGallery.length - 1); // Go to the last gallery item
      }
    } else {
      if (galleryIndex < currentProjectGallery.length - 1) {
        setGalleryIndex(galleryIndex + 1);
      } else {
        setGalleryIndex(0); // Go back to the start of the gallery
      }
    }
  };

  return (
    <main>
      <div className="PP_wrapper">
        <div id="header_container">
          <h1>Experience</h1>
        </div>
        <div id="projects_container">
          {PP_projects.map((project, index) => (
            <article key={index} onClick={() => handleProjectClick(index)}>
              <img src={project.imageSrc} alt="Project Thumbnail" />
              <div className="tag_container">
                {project.tags.map((tag) => (
                  <p key={tag.id} id={tag.id}>
                    {tag.text}
                  </p>
                ))}
              </div>
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
            </article>
          ))}
        </div>
      </div>
      <div className="OP_wrapper">
        <div id="header_container">
          <h1>Projects</h1>
        </div>
        <div id="projects_container">
          {OP_projects.map((project, index) => (
            <article key={index} onClick={() => handleProjectClick(index + PP_projects.length)}>
              <img src={project.imageSrc} alt="Project Thumbnail" />
              <div className="tag_container">
                {project.tags.map((tag) => (
                  <p key={tag.id} id={tag.id}>
                    {tag.text}
                  </p>
                ))}
              </div>
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
            </article>
          ))}
        </div>
      </div>
      {selectedProject !== null && (
        <div className="overlay"></div>
      )}
      {selectedProject !== null && (
        <div className="PW_wrapper" style={{ top: projectWindowTop }}>
          <div id="PW_top">
            <h1>{selectedProject < PP_projects.length ? PP_projects[selectedProject].title : OP_projects[selectedProject - PP_projects.length].title}</h1>
            <button onClick={handleCloseClick}>X</button>
          </div>
          <div id="PW_gallery">
            <button onClick={() => handleGalleryArrowClick("left")}>
              <img id="left_arrow" src={arrow} alt="Go Left" />
            </button>
            {renderGalleryItem(
              selectedProject < PP_projects.length
                ? PP_projects[selectedProject].gallery[galleryIndex]
                : OP_projects[selectedProject - PP_projects.length].gallery[galleryIndex]
            )}            <button onClick={() => handleGalleryArrowClick("right")}>
              <img id="right_arrow" src={arrow} alt="Go Right" />
            </button>
          </div>
          <div className="PW_content">
            <div className="tag_container">
              {selectedProject < PP_projects.length ? PP_projects[selectedProject].tags.map((tag) => (
                <p id={tag.id} key={tag.id}>
                  {tag.text}
                </p>
              )) : OP_projects[selectedProject - PP_projects.length].tags.map((tag) => (
                <p id={tag.id} key={tag.id}>
                  {tag.text}
                </p>
              ))}
            </div>
            <p id="PW_desc">{selectedProject < PP_projects.length ? PP_projects[selectedProject].description : OP_projects[selectedProject - PP_projects.length].description}</p>
            <div id="PW_overview">
              <h4>What I did:</h4>
              <ul>
                {selectedProject < PP_projects.length ? PP_projects[selectedProject].overview.map((task, index) => (
                  <li key={index}>{task}</li>
                )) : OP_projects[selectedProject - PP_projects.length].overview.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      )}
    </main>
  );
}

export default Jobs