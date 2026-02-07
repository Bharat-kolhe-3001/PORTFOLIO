import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaUsers } from "react-icons/fa";
import "../CSS/About.css";

const AboutMe = () => {
  return (
    <section className="about-container" id="about">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <h2 className="about-header">About Me</h2>

        {/* Text */}
        <p className="about-text">
          Hi, I’m <strong>Bharat Kolhe</strong>, a Computer Engineering student
          with a strong interest in <strong>Web Development</strong> and{" "}
          <strong>IoT-based systems</strong>. I enjoy building practical
          solutions that solve real-world problems.
        </p>

        <p className="about-text">
          I have worked on projects like <strong>Smart IoT Home Automation</strong>,
          <strong> AgroMate Web App</strong>, and this{" "}
          <strong>Personal Portfolio Website</strong>. I believe in learning by
          building and continuously improving my skills.
        </p>

        {/* Education */}
        <div className="education-section">
          <h3 className="education-header">Education</h3>

          <div className="education-cards">

            {/* College */}
            <motion.div
              className="edu-card"
              whileHover={{ scale: 1.03 }}
            >
              <FaUniversity size={36} className="edu-icon" />
              <div>
                <h4 className="edu-title">
                  B.Tech in Computer Engineering
                </h4>
                <p className="edu-institute">
                  Sanjivani College of Engineering
                </p>
                <p className="edu-details">
                  Savitribai Phule Pune University
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Leadership / Experience */}
        <div className="education-section">
          <h3 className="education-header">Leadership & Experience</h3>

          <div className="education-cards">

            <motion.div
              className="edu-card"
              whileHover={{ scale: 1.03 }}
            >
              <FaUsers size={34} className="edu-icon" />
              <div>
                <h4 className="edu-title">
                  Executive Committee Member, ACES
                </h4>
                <p className="edu-institute">
                  Association of Computer Engineering Students
                </p>
                <p className="edu-details">
                  Organized technical events, workshops, and student activities while collaborating with team members.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default AboutMe;
