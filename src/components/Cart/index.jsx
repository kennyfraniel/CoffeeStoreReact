import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();
    if (cart.length === 0) {
        return (
            <>
            <h1>No hay elementos en el carrito</h1>
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