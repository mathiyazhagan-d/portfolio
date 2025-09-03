import React from "react";
import styled from "styled-components";
import experienceSvg from "../assets/experience.svg";
import companyLogo1 from "../assets/10xokr.jpg";
import companyLogo2 from "../assets/technicax_logo.jpg";
import companyLogo3 from "../assets/ktg-logo.jpg";

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
          <img
            src={experienceSvg}
            alt="experience illustration"
            className="exp-svg"
          />
        </div>

        <ExpDetailsWrapper className="exp-details-wrapper" data-aos="fade-up">
          {/* Knock The Globe */}
          <h4 className="exp-title">Software Developer</h4>
          <p className="exp-company">
            <span>
              <img src={companyLogo3} alt="companyLogo" className="arus-logo" />
            </span>
            Knock The Globe Technologies, Karur, Tamil Nadu, India
          </p>
          <p className="exp-role">Full Stack Developer</p>
          <p className="exp-duration">April 2025 – Present</p>
          <ul className="exp-points">
            <li>
              Developed an insurance platform with modules for policy issuance,
              claims processing, and customer onboarding
            </li>
            <li>
              Integrated 3+ third-party APIs for policy generation with custom
              payload transformations
            </li>
            <li>
              Implemented WhatsApp Business API for automated customer
              notifications using templates
            </li>
            <li>
              Deployed full-stack applications on Linode, configured Apache
              files, integrated Cloudflare, managed manual deployments, and
              explored CI/CD pipelines
            </li>
            <li>
              Led and mentored a 5-member development team through Agile sprints
              and code reviews, fostering knowledge sharing, improving team
              capability, and ensuring timely, high-quality delivery
            </li>
          </ul>

          {/* TechnicaX */}
          <h4 className="exp-title">Software Developer</h4>
          <p className="exp-company">
            <span>
              <img src={companyLogo2} alt="companyLogo" className="arus-logo" />
            </span>
            TechnicaX LLC, Chennai, Tamil Nadu, India
          </p>
          <p className="exp-role">Full Stack Developer</p>
          <p className="exp-duration">Sept 2023 – Feb 2025</p>
          <ul className="exp-points">
            <li>
              Built <strong>Redicane (Ticketing Software)</strong> with features
              like import functionality, audit log system, notification system,
              and SLA time zone handling
            </li>
            <li>
              Designed user-friendly UI/UX with MUI and managed data using
              MongoDB
            </li>
            <li>
              Contributed to <strong>ATS (Applicant Tracking System)</strong> by
              developing secure login backend and responsive UI components
            </li>
          </ul>

          {/* 10xOKR */}
          <h4 className="exp-title">Software Developer</h4>
          <p className="exp-company">
            <span>
              <img src={companyLogo1} alt="companyLogo" className="arus-logo" />
            </span>
            10xOKR, Bengaluru, Karnataka, India
          </p>
          <p className="exp-role">Full Stack Developer</p>
          <p className="exp-duration">July 2023 – Sept 2023</p>
          <ul className="exp-points">
            <li>
              Developed full-stack HRM software with employee import
              functionality for efficient data management
            </li>
            <li>
              Designed user-friendly interfaces with MUI to enhance workflows
              and user experience
            </li>
            <li>
              Ensured collaborative development and version control using GitLab
            </li>
          </ul>
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
    gap: 1.5rem;
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
    margin-bottom: 0.4rem;
  }

  .exp-title {
    color: ${(props) => props.theme.text};
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .exp-company {
    color: ${(props) => props.theme.eduInstiName};
    font-size: large;
    display: flex;
    align-items: center;
  }

  .exp-role {
    color: var(--clr-blue);
    font-size: 1.1rem;
    font-weight: 500;
  }

  .exp-duration {
    color: ${(props) => props.theme.eduDuration};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .arus-logo {
    height: 40px;
    width: 40px;
    margin-right: 8px;
  }

  .exp-points {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    list-style-type: "⚡ ";
    font-size: 0.95rem;
    color: ${(props) => props.theme.text};
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
