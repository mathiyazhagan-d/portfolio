import React from "react";
import styled from "styled-components";
import aboutSvg from "../assets/about.svg";

function About() {
  return (
    <AboutContainer className="container">
      <div className="about-title title" id="about" data-aos="fade-right">
        About
      </div>

      <div className="about-content">
        <div className="about-description">
          <ul>
            <li>
              <p data-aos="fade-up">
                I’m a{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  Full Stack Software Engineer
                </span>{" "}
                with{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  2.3+ years of experience
                </span>
                in building scalable, high-performance applications.
              </p>
            </li>
            <li>
              <p data-aos="fade-up">
                Skilled in{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  end-to-end system development, third-party API integrations,
                  and responsive UI/UX design
                </span>
                , with exposure to{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  CI/CD pipeline practices
                </span>
                .
              </p>
            </li>
            <li>
              <p data-aos="fade-up">
                Proven ability to{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  lead and mentor teams in Agile environments
                </span>
                , delivering high-quality, user-centric solutions that improve
                efficiency and customer experience.
              </p>
            </li>
          </ul>
        </div>

        <div className="about-svg-wrapper" data-aos="fade-left">
          <img src={aboutSvg} alt="about illustration" className="about-svg" />
        </div>
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  margin-bottom: 8%;
  color: ${(props) => props.theme.text};
  .about-title {
    text-align: left;
  }
  .about-svg {
    height: 450px;
    width: 350px;
  }

  .about-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-description {
    width: 60%;
    padding: 0 4%;
    font-size: 1.5rem;
  }

  .about-description ul li p {
    margin-bottom: 5%;
    &::before {
      content: "⚡";
      margin-right: 6px;
    }
  }

  .about-svg-wrapper {
    text-align: center;
    width: 30%;
  }

  .about-description,
  .about-svg-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1020px) {
    .about-svg {
      height: 350px;
      width: 250px;
    }
    .about-content {
      flex-direction: column;
    }
    .about-svg-wrapper {
      order: 1;
      width: 100%;
    }
    .about-description {
      order: 2;
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    .about-description {
      padding: 0;
    }
    margin-bottom: 12%;
  }
`;

export default About;
