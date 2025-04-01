import React from 'react'

const Blog = () => {
  return (
    <>
      <div className="blog__container">
        <div className="blog__image">
          <img src={require("../assets/images/sm3.jpg")} alt="" />
          <div className="blog__shadow"></div>
        </div>
        <div className="blog__content container grid">
          <div className="blog__data">
            <h2 className="secton__title">
              Dejá Tus Huellas <br />
              en el Paisaje
            </h2>
            <p className="blog__description">
              Adéntrate en un mundo de exploración y aventura mientras recorres senderos únicos que te conectan con la majestuosidad de la naturaleza. Cada paso es una oportunidad para dejar tu huella en paisajes inolvidables, superar tus límites y descubrir la magia de lo simple en medio de lo salvaje. 🌿👣
            </p>
          </div>
          <div className="blog__user">
            <img src={require("../assets/images/WhatsApp 1_4_2025 01_20_06.png")} alt="" className="blog__profile" />
            <span className="blog__name">Francisco Iturri</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog