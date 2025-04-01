import React from 'react'
import HomeCard from '../components/HomeCard'
import About from './About'
import Contact from './Contact'
import { motion } from 'framer-motion'
import { fadeIn } from '../components/FramerVariants'
import Blog from './Blog'

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <section className='home section' id='home'>
        <img src={require('../assets/images/Foto 2.jpeg.jpg')} alt='home img' className="home__bg"></img>
        <div className="home__shadow"></div>
        <div className="home__container container grid">
          <div className="home__data">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="row"
            >
              <h1 className="home__subtitle">
                Sumate al Trekking
              </h1>
              <h3 className="home__title">
                Sube a las montañas y déjate maravillar por vistas increíbles.
              </h3>
              <p className="home__description">
                Ideal para amantes del aire libre y la naturaleza.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="row"
            >
              <a href="#contact" className='button'>
                INSCRIBIRME <i className='ri-arrow-right-line'></i>
              </a>
            </motion.div>
          </div>
          <div className="home__cards grid">
            {/* Cards */}
            {
              <HomeCard />
            }
          </div>
        </div>
      </section >
      {/* Home Section Ends */}

      {/* About Section */}
      <section className="about section" id="about">
        <About />
      </section>
      {/* About Section Ends*/}

      {/* FormSection */}
      <section className="form section" id='contact'>
        <Contact />
      </section>
      {/* FormSection Ends*/}
      
      {/* BlogSection */}
      <section className="blog section" id='blog'>
        <Blog />
      </section>
      {/* BlogSection Ends*/}
    </>
  )
}

export default Home