import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 

export default function Home() {
  const professions = [
    'Computer Engineering Student',
    'Web Developer',
    'IoT Enthusiast',
    'Problem Solver',
    'Tech Explorer',
  ]

  const quickLinks = [
  { img: '/github.png', title: 'GitHub', link: 'https://github.com/Bharat-kolhe-3001' },
  { img: '/linkedin.png', title: 'LinkedIn', link: 'https://www.linkedin.com/in/bharat-kolhe-4b1964288/' },
  { img: '/gmail.png', title: 'Email', link: 'mailto:bharatkolhe20@gmail.com' },
  { img: '/whatsapp.png', title: 'WhatsApp', link: 'https://wa.me/919860053992' },
]


  return (
    <section className="home-section">

      <div className="home-top">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src="/profile.jpg"
              alt="Bharat Kolhe"
              className="profile-photo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m <span className="home-name">Bharat Kolhe</span>
          </h1>

          <p className="typing-effect">
            Computer Engineering Student | Web Developer | IoT Enthusiast
          </p>

          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.img} alt={item.title} className="quick-link-img" />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
