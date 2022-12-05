import './item.css'
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';


const Item = ({info}) => {
    return (
        <div href='' className='producto'>
            <h1>{info.title}</h1>
            <img src={info.thumbnails} alt="cafiza" />
            <h2>{info.precio}</h2>
            <Link to={`/detalle/${info.id}`} ><button>¡Mas detalles!</button></Link>
            <hr/>
            
        </div>
    )
}

export default Item