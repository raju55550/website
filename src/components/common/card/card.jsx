import React from 'react'
import './card.css';

const Card = (props) => {
    const { image, title, description } = props
    return (
        <div className="card card-style">
            <div className="card-body">
                <img className='mt-2' src={image} alt="Card-cap" />
                <h5 className="card-title-style pt-3">{title}</h5>
                <p className="card-text-style pt-2">{description}</p>
            </div>
        </div>
    )
}

export default Card