import React from 'react'
// import {Link} from 'react-router-dom'

function Cruise(props) {
    return (
        <div className='cruise'>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name}/>
            <div className='cruise__footer'>
            <div className="cruise__info">
                <div>{props.duration}<br />dni</div>
                <div>{props.countries}<br />państwa</div>
                <div>{props.price}<br />cena</div>
            </div>
                <button className='cruise__button'>Więcej</button>
            </div>
        </div>
    )
}

export default Cruise
