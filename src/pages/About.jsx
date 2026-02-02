import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import "../CSS/About.css";   // ✅ correct CSS import

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

            <motion.div
              className="edu-card"
              whileHover={{ scale: 1.03 }}
            >
              <FaGraduationCap size={34} className="edu-icon" />
              <div>
                <h4 className="edu-title">
                  Higher Secondary Education (12th)
                </h4>
                <p className="edu-institute">
                  Maharashtra State Board
                </p>
              </div>
            </motion.div>

            <motion.div
              className="edu-card"
              whileHover={{ scale: 1.03 }}
            >
              <FaSchool size={32} className="edu-icon" />
              <div>
                <h4 className="edu-title">
                  Secondary Education (10th)
                </h4>
                <p className="edu-institute">
                  Maharashtra State Board
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
