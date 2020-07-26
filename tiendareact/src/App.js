import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, useParams, useHistory } from 'react-router-dom';
import Header from './Header';
import Eliminiar from './Eliminar'
import Aniadir from './Aniadir'
import Comprar from './Tienda'
import Cart from './Cart'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap'
import { CardText } from 'react-bootstrap/Card';
import ProductosCart from './Cesta';
import "react-notifications/lib/notifications.css"
import   {NotificationContainer}from "react-notifications"
import { useForm } from "react-hook-form";
import Contact from "./Contact"
import Footer from "./foter"

// import { useEffect } from 'react';


function ProductosPadre() {
  let [productos, setProductos] = useState([]);
  //
  useEffect(
    function () {
      fetch('http://localhost:3000/api/socks')
        .then(function (response) {
          return response.json();
        })
        .then(function (datos) {
          setProductos(datos);
        });
    }, []);



  return (

    <>
      {productos.map(function (producto) {
        return (
          <Comprar modelo={producto.model}
            tipo={producto.type}
            size={producto.size}
            quantity={producto.qty}
            precio={producto.price}
            image={producto.image}
            id={producto._id} />
        )
      })}


    </>

  )




}

function Carrito(props) {
  let [carrito, setCarrito] = useState([]);
  //
  useEffect(
    function () {
      fetch('http://localhost:3000/api/socks')
        .then(function (response) {
          return response.json();
        })
        .then(function (datos) {
          setCarrito(datos);
        });
    }, []);



  return (

    <>
      {carrito.map(function (producto) {
        return (
          <Cart modelo={producto.model}
            tipo={producto.type}
            size={producto.size}
            quantity={producto.qty}
            precio={producto.price}
            image={producto.image}
            id={producto._id}  funcion={props.funcion}/>
        )
      })}


    </>

  )




}



function App() {
  let [cantidad,setCantidad]=useState(0)
function suma() {
setCantidad(cantidad+1)
  
}

  return (

    <BrowserRouter>
      <Header cantidad={cantidad}  />
        <Route path="/Admin">
        <div className="sockStock"> 
        <ProductosPadre />
        </div> 
          <Aniadir />
          <Eliminiar />
        </Route>
        <Route path="/Models">
        <h1 className="titleModel"> choose your sock</h1>
        <div className="sockStock"> 
          <Carrito funcion={suma} />
          </div> 
        </Route>
        <Route path="/cart">
        <div className="sockStock"> 
          <ProductosCart  />
          </div> 
        </Route>

        <Route path="/Contact">
          <h1 className="formulario">Contact Us</h1>
          <Contact />
        </Route> 
<NotificationContainer/>
<Footer/>



    </BrowserRouter>

    
  );
}

export default App;
