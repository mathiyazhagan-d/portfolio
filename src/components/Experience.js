import React from "react";
import styled from "styled-components";
import experienceSvg from "../assets/experience.svg";
import companyLogo1 from "../assets/10xokr.jpg";
import companyLogo2 from "../assets/technicax_logo.jpg";

function Experience() {
  return (
    <ExperienceContainer className="container">
      <div
        className="experience-title title"
        id="experience"
        data-aos="fade-right"
      >
        Experience
      </div>

      <div className="experience-content">
        <div className="exp-svg-wrapper" data-aos="fade-left">
          <img src={experienceSvg} alt="girl working" className="exp-svg" />
          
        </div>
        <ExpDetailsWrapper className="exp-details-wrapper" data-aos="fade-up">
        <h4 className="exp-title">Software Developer</h4>
        <p className="exp-company">
            <span>
              <img src={companyLogo2} alt="companyLogo" className="arus-logo" />
            </span>
            TechnicaX in chennai, Tamil Nadu, India
          </p>
          <p className="exp-role">FullStack Developer</p>
          <p className="exp-duration"> Sept 2023 - Feb 2025</p>
          <p className="expo-techstack">
            <span className="exp-techStack-title">Tech Stack:</span> ReactJS,
            Expressjs, Node, MongoDB
          </p>
          <h4 className="exp-title"></h4>
        
          <p className="exp-company">
            <span>
              <img src={companyLogo1} alt="companyLogo" className="arus-logo" />
            </span>
            10xOkr in Bengaluru, Karnataka, India
          </p>
          <p className="exp-role">FullStack Developer</p>
          <p className="exp-duration">July 2023 - Sept 2023</p>
          <p className="expo-techstack">
            <span className="exp-techStack-title">Tech Stack:</span> ReactJS,
            Spring Boot, Microservice, MySQL, Java
          </p>
          
        </ExpDetailsWrapper>
        
          
      
      </div>
    </ExperienceContainer>
  );
}

const ExperienceContainer = styled.div`
  margin-bottom: 10%;
  color: ${(props) => props.theme.text};

  .experience-title {
    text-align: right;
  }

  .experience-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    width: 80%;
    margin: auto;
  }

  .exp-svg {
    height: 450px;
    width: 350px;
  }

  .exp-svg-wrapper {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .exp-details-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  @media screen and (max-width: 1120px) {
    .exp-svg {
      height: 350px;
      width: 250px;
    }

    .experience-content {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 12%;
  }
`;

const ExpDetailsWrapper = styled.div`
  p {
    margin-bottom: 3.5%;
  }

  .exp-title {
    color: ${(props) => props.theme.text};

    margin-bottom: 8%;
  }

  .exp-company {
    color: ${(props) => props.theme.eduInstiName};
    font-size: large;
    display: flex;
    align-items: center;
  }

  .exp-role {
    color: var(--clr-blue);
    font-size: x-large;
    font-weight: 500;
  }

  .exp-duration {
    color: ${(props) => props.theme.eduDuration};
    font-size: 0.9rem;
  }

  .arus-logo {
    height: 40px;
    width: 40px;
    margin-right: 8px;
  }
  .exp-techStack-title {
    font-weight: 600;
    margin-right: 0.4rem;
  }
  .expo-techstack {
    color: ${(props) => props.theme.eduCgpa};
    font-size: 0.9rem;
    font-weight: 500;
  }

  @media screen and (max-width: 400px) {
    .exp-role {
      font-size: large;
    }

    .exp-company {
      font-size: medium;
    }
  }
`;
export default Experience;
