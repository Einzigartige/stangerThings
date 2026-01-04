import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import Navbar from './Navbar'

const Hero = () => {
  const heroRef = useRef(null)
  const revealRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const reveal = revealRef.current

    let mouseX = 0
    let mouseY = 0
    let x = 0
    let y = 0
    let visible = false

    const animate = () => {
      x += (mouseX - x) * 0.05
      y += (mouseY - y) * 0.05

      reveal.style.setProperty('--x', `${x}px`)
      reveal.style.setProperty('--y', `${y}px`)

      requestAnimationFrame(animate)
    }

    animate()

    const move = (e) => {
      const rect = hero.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top

      if (!visible) {
        visible = true
        reveal.classList.add('active')
      }
    }

    const leave = () => {
      visible = false
      reveal.classList.remove('active')
    }

    hero.addEventListener('mousemove', move)
    hero.addEventListener('mouseleave', leave)

    return () => {
      hero.removeEventListener('mousemove', move)
      hero.removeEventListener('mouseleave', leave)
    }
  }, [])

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 12 } },
  }

  const navbarVariant = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 14 } },
  }

  return (
    <div className="hero" ref={heroRef}>
      <motion.div variants={navbarVariant} initial="hidden" animate="visible">
        <Navbar />
      </motion.div>

      <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
        <motion.div className="left" variants={item}>
          <h1 className="st-title">
            STRANGER<br />THINGS
          </h1>
          <motion.p className="st-desc" variants={item}>
            When ideas ignite and technology evolves,
            a world of seamless digital experiences emerges.
            Some opportunities, once realized, can transform your business forever.
          </motion.p>
          <motion.button className="st-btn" variants={item} onClick={() => window.location.href = 'https://einzigartige.in/contact-us', '_blank'}>
            Build Your Project
          </motion.button>
        </motion.div>

        <motion.div className="right" variants={item}>
          <h1 className="st-title">The Mind Flayer</h1>
          <motion.p className="st-text" variants={item}>
            Innovative solutions emerge from the world of technology, transforming challenges into opportunities.
            Discover the power of expertly crafted web and mobile experiences.
            Will your business thrive in the digital landscape? Let’s build it together.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="fire-reveal" ref={revealRef}></div>
    </div>
  )
}

export default Hero
