import React from "react";
import { useCartContext } from "../../context/CartContext";
import './itemcart.css';

const ItemCart = ({product}) => {
     const {removeProduct} = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.thumbnails} alt={product.title} />
            <div>
                <h1>Título: {product.title}</h1>
                <h2>Cantidad: {product.quantity}</h2>
                <h3>Precio: {product.precio}</h3>
                <h4>Subtotal: ${product.quantity * product.precio} </h4>
                <button onClick={() => removeProduct(product.id)}>ELIMINAR</button>
            </div>
        </div>
    )
}

export default ItemCart