import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'

import ProductosCart from './Cesta';






function Cart(props) {
    let history = useHistory();
    let [cestaU, setCesta] = useState("")
    let [cantidad, setCantidad] = useState(1)

    function cesta() {


      props.funcion()


        let product = { modelo: props.modelo, type: props.tipo, size: props.size, price: props.precio, image: props.image, common:"cart" };
        fetch('http://localhost:3000/api/carrito',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            })

    }





    return (
        <>
 
            <div className="stock">
            <p>
                    <img src={props.image} />
                </p> 
                <h2>
                    {props.modelo}
                </h2>
                <p>
                    {props.tipo}
                </p>
                <p>
                    size:{props.size}
                </p>

                <p>
                    price:{props.precio}$
                </p>
               
                <button onClick={cesta}>Add</button>
            </div>

        </>
    )


}


export default Cart
