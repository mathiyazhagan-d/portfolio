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
              <p>
                Worked as a{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  Full-Stack (backend-focused) developer
                </span>{" "}
                on production-grade systems across payments, HR, audit,
                tracking, and finance platforms.
              </p>
            </li>

            <li>
              <p>
                Designed and developed{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  scalable backend APIs
                </span>{" "}
                using Node.js (Fastify/Express) with MongoDB, MySQL, and
                PostgreSQL.
              </p>
            </li>

            <li>
              <p>
                Integrated{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  third-party services
                </span>{" "}
                including Razorpay, WhatsApp Business API, Zoho Mail, Google
                Maps, and identity verification APIs.
              </p>
            </li>

            <li>
              <p>
                Implemented{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  billing and invoice workflows
                </span>{" "}
                with PDF generation, email & WhatsApp delivery, cron jobs, and
                failure handling.
              </p>
            </li>

            <li>
              <p>
                Owned{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  production support and deployments
                </span>
                , including server setup, live issue debugging, and performance
                optimization.
              </p>
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
              <p>
                Worked on enterprise applications including{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  Redicane (Ticketing System)
                </span>{" "}
                and{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  Applicant Tracking System (ATS)
                </span>
                .
              </p>
            </li>

            <li>
              <p>
                Built and maintained{" "}
                <span style={{ color: "var(--clr-violet)" }}>backend APIs</span>{" "}
                using Node.js, Express, and MongoDB for large-scale data
                operations.
              </p>
            </li>

            <li>
              <p>
                Implemented{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  import/export modules
                </span>{" "}
                with validation, bulk processing, and detailed error handling.
              </p>
            </li>

            <li>
              <p>
                Designed{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  audit log and notification systems
                </span>{" "}
                for tracking system activity and real-time user updates.
              </p>
            </li>

            <li>
              <p>
                Implemented{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  time zone–aware SLA logic
                </span>{" "}
                and built responsive UI components using React and Material UI.
              </p>
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
              <p>
                Developed a{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  full-stack HRM / OKR management system
                </span>{" "}
                with a focus on usability and performance.
              </p>
            </li>

            <li>
              <p>
                Implemented{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  employee data import functionality
                </span>{" "}
                and optimized backend workflows.
              </p>
            </li>

            <li>
              <p>
                Built{" "}
                <span style={{ color: "var(--clr-violet)" }}>
                  responsive UI components
                </span>{" "}
                using React and Material UI and collaborated using GitLab.
              </p>
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
