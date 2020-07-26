import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "react-notifications/lib/notifications.css"
import   {NotificationManager}from "react-notifications"



function EliminarCesta(props) {
    let history = useHistory();

    function eliminar() {
        console.log(props.id)
        let id = props.id


        props.eliminate(id)

    }



    return (
        <div className="sockStock">
              <div className="stock">
            <img src={props.image} />     
            <p>{props.modelo}</p>
            <p>{props.size}</p>
            <p>{props.type}</p>
            <p>{props.cantidad}</p>
            <p>{props.price}$</p>

            <a onClick={eliminar} className="eliminar">delete
            </a>
            </div>
        </div>
    )



}





function ProductosCart(props) {
    let [cesta, setCesta] = useState([]);
    let [pago, setPago] = useState(0);
    let totally = 0;
    let history = useHistory();

    useEffect(
        function () {
            fetch('http://localhost:3000/api/cart')
                .then(function (response) {
                    return response.json();
                })
                .then(function (datos) {
                    setCesta(datos);


                });
        }, [{totally}]);



    cesta.map(function (product) {
        return (
            <>
                console.log(product._id)
                <EliminarCesta modelo={product.modelo} size={product.size} image={product.image} cantidad={product.cantidad} price={product.price} id={product._id} />
            </>


        )

    })

    console.log(pago)
    for (let i = 0; i < cesta.length; i++) {
        totally = parseInt(cesta[i].price) + totally;
    }

if (totally===0) {

    totally="The cart is empty"
    
}

    function eliminate(id) {
        console.log(id)
        fetch(`http://localhost:3000/api/delete/cart/${id}`, {
            method: 'DELETE',
        })
        
            .then(function () {
                history.go()

            })
    }
 


    function comprar() {
NotificationManager.success("thanks for buying", "Hey!")
       let common="cart"
       console.log(common)
            fetch(`http://localhost:3000/api/delete/cart/comprar/${common}`, {
                method: 'DELETE',
            })
            
                .then(function () {
                   // history.go()
    
                })
    






    }


    return (
        <>
 {cesta.map(function (product) {
                return (
                    <EliminarCesta modelo={product.modelo} size={product.size} image={product.image} cantidad={product.cantidad} price={product.price} id={product._id} eliminate={eliminate} common={product.common} />



                )

            })}

<div className="totalCompra">
            <h1>
          {totally}
            </h1>

            <a className="botonComprar" onClick={comprar}>
            Buy
            </a>
            </div>




        </>
    )

}
export default ProductosCart