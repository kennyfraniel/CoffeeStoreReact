import './item.css'
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';


const Item = ({info}) => {
    return (
        <>
        <div className='list-container'>
            <div href='' className='producto'>
                <h1 className='list-h1'>{info.title}</h1>
                <img src={info.thumbnails} alt="cafiza" />
                <h2 className='list-h2'>{info.precio}$</h2>
                <Link to={`/detalle/${info.id}`} ><button className='boton-detalle boton-animacion'>¡Mas detalles!</button></Link>
                <hr/>
            
            </div>
        </div>
        </>
    )
}

export default Item