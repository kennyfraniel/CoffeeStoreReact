import React from "react";
import './itemCount.css';

export const ItemCount = () => {
    return (
        <div className="counter">
            <button>-</button>
            <span>2</span>
            <button>+</button>
            <div>
                <button>Agregar al carrito!</button>
            </div>
        </div>
    )
}

export default ItemCount;