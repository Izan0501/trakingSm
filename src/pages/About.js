import React from 'react'
import { fadeIn } from '../components/FramerVariants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div className="about__container container grid">
        <div className="about__data">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="row"
          >
            <h2 className="section__title">
              Learn More <br />
              About The Expirience
            </h2>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="row"
          >
            <p className="about__description">
              All the trips around in the world have an unique expirience for anybody and it will give you information about every corner in the world
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="row"
          >
            <a href="#" className="button">
              Explore Travel <i className='ri-arrow-right-line'></i>
            </a>
          </motion.div>
        </div>
        <div className="about__image">
          <img src={require('../assets/images/sm4.jpg')} alt="" className="about__img" />
          {/* <div className="about__shadow"></div> */}
        </div>
      </div>
    </>
  )
}

export default About