import React from 'react'
import HomeCard from '../components/HomeCard'

const Home = () => {
  const image1 = require('../assets/images/Foto 2.jpeg.jpg')

  return (
    <>
      <section className='home section' id='home'>
        <img src={image1} alt='home img' className="home__bg"></img>
        <div className="home__shadow"></div>
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__subtitle">
              Sumate al Trekking
            </h1>
            <h3 className="home__title">
              Sube a las montañas y déjate maravillar por vistas increíbles.
            </h3>
            <p className="home__description">
              Ideal para amantes del aire libre y la naturaleza.
            </p>
            <a href="#" className='button'>
              INSCRIBIRME <i className='ri-arrow-right-line'></i>
            </a>
          </div>
          <div className="home__cards grid">
            {/* Cards */}
            {
              <HomeCard />
            }
          </div>
          <div class="mouseScroll">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-mouse"
              viewBox="0 0 16 16">
              <path
                d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-arrow-down"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home