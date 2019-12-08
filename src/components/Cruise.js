import React from 'react'
import {Link} from 'react-router-dom'

function Cruise(props) {
    return (
        <div className='cruise'>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name}/>
            <div className='cruise__footer'>
            <div className="cruise__info">
                <div>dni<br />{props.duration}</div>
                <div>państwa<br />{props.countries}</div>
                <div>cena<br />{props.price}</div>
            </div>
                <button className='cruise__button'><Link to={`/cruise/${props.id}`}>Więcej</Link></button>
            </div>
        </div>
    )
}

export default Cruise
