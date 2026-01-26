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
              Worked as a Full-Stack (backend-focused) developer on
              production-grade systems including payments, HR, audit, tracking,
              and finance platforms
            </li>
            <li>
              Designed and developed scalable backend APIs using Node.js
              (Fastify/Express) with MongoDB, MySQL, and PostgreSQL
            </li>
            <li>
              Integrated third-party services including Razorpay, WhatsApp
              Business API, Zoho Mail, Google Maps, and identity verification
              APIs
            </li>
            <li>
              Implemented secure billing and invoice workflows with PDF
              generation, email and WhatsApp delivery, cron jobs, and failure
              handling
            </li>
            <li>
              Owned production support including server setup, deployments,
              debugging live issues, API downtime handling, and performance
              optimization
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
              Worked on enterprise applications including
              <strong> Redicane (Ticketing System)</strong> and
              <strong> Applicant Tracking System (ATS)</strong>
            </li>
            <li>
              Built and maintained backend APIs using Node.js, Express, and
              MongoDB supporting large-scale data operations
            </li>
            <li>
              Implemented import/export modules with validation, bulk
              processing, and detailed error handling
            </li>
            <li>
              Designed and developed audit log and notification systems for
              tracking system activity and real-time user updates
            </li>
            <li>
              Implemented time zone–aware SLA logic and built responsive UI
              components using React and Material UI (MUI)
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
              Developed a full-stack HRM / OKR management system focusing on
              usability and performance
            </li>
            <li>
              Implemented employee data import functionality and optimized
              backend workflows
            </li>
            <li>
              Built responsive UI components using React and Material UI (MUI)
              and collaborated using GitLab
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
