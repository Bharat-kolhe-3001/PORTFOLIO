 
 

import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🏠 Smart IoT Home Automation',
    desc: 'An IoT-based home automation system that allows users to control home appliances remotely using sensors, relays, and microcontrollers. Designed for energy efficiency and real-time monitoring.',
    ss: '/IOTHOME.jpg',
    tech: ['Arduino', 'IoT', 'Sensors', 'Relay', 'C++'],
    live: '#',
    code: 'https://github.com/Bharat-kolhe-3001/SmartIoT-Home'
  },
  {
    title: '🌱 AgroMate Web App',
    desc: 'A web-based platform designed to assist farmers by providing information on crops, weather updates, and agricultural resources with a user-friendly interface.',
    ss: '/iot.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    live: '#',
    code: 'https://github.com/Bharat-kolhe-3001/Agro-Mate'
  },
  {
    title: '💼 Personal Portfolio Website',
    desc: 'A modern and responsive personal portfolio website built using React and Framer Motion to showcase skills, projects, and achievements with smooth animations.',
    ss: '/Portfolio.png',
    tech: ['React', 'Framer Motion', 'CSS'],
    live: '#',
    code: 'https://github.com/Bharat-kolhe-3001/MY-PORTFOLIO'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 16,
          padding: 30
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: '2.2rem', color: '#0ea5e9', marginBottom: 10 }}
        >
          🚀 Projects
        </motion.h2>

        <p style={{ color: '#aaa', marginBottom: 30 }}>
          A selection of my academic and personal projects.
        </p>

        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background:
                  'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: 12, overflow: 'hidden' }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: '#bbb',
                    marginBottom: 8,
                    lineHeight: 1.6
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 10
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 10
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background:
                        'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
