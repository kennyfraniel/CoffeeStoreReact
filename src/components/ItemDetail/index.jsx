import React, { useState } from "react";
import './itemDetail.css';
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import {useCartContext} from "../../context/CartContext";

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
    }
    return (
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.thumbnails} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <hr/>
                    <h2>{data.precio}</h2>
                    <hr/>
                    <h3>{data.description}</h3>
                    {
                        goToCart
                        ? <Link to='/cart'>Terminar Compra!</Link>
                        :<ItemCount initial={1} stock ={5} onAdd={onAdd} />
                    }
                    
                </div>
            </div>

        </div>
    )
}
export default ItemDetail;