import React from 'react'

export const Card = (props) => {
    return (
        <div className='col'>
            <div className="card">
                <img src={props.image} alt="" className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">{props.id}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}
