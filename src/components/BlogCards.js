import React from 'react';
import { BlogCardsData } from "../utils/BlogCardsData"

const BlogCards = () => {
    return (
        <div className="card-container">
            <div className="wraps">
                {BlogCardsData.map((item) => {
                    return (
                        <>
                            <div className="single-card">
                                <div className="card">
                                    <div className="card-content">
                                        <img className="card-image" src={item.image} alt="" />
                                        <div>
                                            <h2 className='card-title'>{item.title}</h2>
                                            <p className='card-desc'>{item.tagline}</p>
                                            <a href="">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div >
        </div>

    )
}

export default BlogCards