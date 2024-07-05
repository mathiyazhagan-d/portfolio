import React from "react";
import styled from "styled-components";
import mealmate from "../assets/comfy-sloth.png";
import comfysloth from "../assets/comfy-sloth.png";
import tictactoe from "../assets/tic-tac-toe.jpg";
import { ResumeBtn } from "./Hero";

function Projects() {
  return (
    <ProjectsContainer className="container">
      <div className="project-title title" id="projects" data-aos="fade-right">
        Projects
      </div>
      <div className="project-content">
        <Project>
          <div
            className="project-img-wrapper"
            data-aos="fade-right"
            data-aos-offset="2"
          >
            <img
              src={mealmate}
              alt="food delivery app"
              className="project-img"
            />
            <div className="github-links">
              <a
                href="https://github.com/mathiyazhagan-d/ORM-MAT-FE1"
                target="_blank"
                rel="noreferrer"
              >
                <span className="github-text">View GitHub Frontend</span>
              </a>
              <a
                href="https://github.com/mathiyazhagan-d/ORM-MAT-BE"
                target="_blank"
                rel="noreferrer"
              >
                <span className="github-text">View GitHub Backend</span>
              </a>
            </div>
          </div>
          <div
            className="project-details-wrapper"
            data-aos="fade-left"
            data-aos-offset="2"
          >
           <h3 className="project-details-title">ORM-MAT</h3>
<p className="project-details-subtitle">
  Fully Responsive <ProjectType>Online Restaurant Management</ProjectType> application with functionalities for managing products, orders, and users.
</p>
<TeckStack>
  Tech stack:
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>React.js</li>
    <li>Redux (for state management)</li>
  </ul>
</TeckStack>

            <a
              href="https://orm-mat.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ResumeBtn className="visit-btn">View Live</ResumeBtn>
            </a>
          </div>
        </Project>
      </div>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  text-align: left;
  color: ${(props) => props.theme.text};

  .project-content {
    padding: 0 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5%;

  .project-img-wrapper {
    width: 50%;
    margin: 8%;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 25px 5px grey;
    background-color: grey;
    &:hover {
      box-shadow: 0 0 25px 5px ${(props) => props.theme.shadow};
    }

    .github-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    a {
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      margin: 5px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 5px;
      display: inline-block;
    }
  }

  .github-text {
    font-size: x-large;
    font-weight: 500;
    cursor: pointer;
    text-align: center;

    &:hover {
      opacity: 0.5;
    }
  }

  .project-img {
    height: 300px;
    width: 500px;
    transition: transform 0.3s ease-in-out;
    object-fit: cover;
  }

  .project-img-wrapper:hover .github-links {
    opacity: 1;
  }

  .project-img-wrapper:hover .project-img {
    transform: scale(1.2);
    opacity: 0.5;
  }

  .project-details-wrapper {
    text-align: center;
    width: 50%;
  }

  .visit-btn {
    margin: auto;
  }

  .project-details-title {
    margin-bottom: 2rem;
    color: rgb(93, 121, 135);
  }

  .project-details-subtitle {
    color: whitesmoke;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.text};
  }

  @media screen and (max-width: 1000px) {
    .project-img-wrapper {
      width: 30%;
      height: 220px;
    }
    .project-details-wrapper {
      width: 70%;
    }
    .project-img {
      object-fit: fill;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 14%;
    .project-img-wrapper {
      width: 70%;
    }
    .project-details-wrapper {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 4%;
  }
`;

const ProjectType = styled.span`
  color: var(--clr-violet);
`;

const TeckStack = styled.h5`
  text-transform: uppercase;
  color: grey;
  margin-bottom: 6%;

  ul {
    font-weight: 400;
    li {
      display: inline-block;
      margin: 2px;
      padding: 4px;
    }
  }
`;

export default Projects;
