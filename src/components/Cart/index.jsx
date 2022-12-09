import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import './cart.css';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();
    if (cart.length === 0) {
        return (
            <>
            <div className="cart-container">
                <h1 className="cart-h1">No hay elementos en el carrito</h1>
                <h2 className="cart-h2">¡Vuelve al inicio para empezar a comprar!</h2>
            </div>
        </>
        )

    }
     return (
        <>
        {
            cart.map(product => <ItemCart  key={product.id} product={product} />)
        }
        </>
    )
}

export default Cart