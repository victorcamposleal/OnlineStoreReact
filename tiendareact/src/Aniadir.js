import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, useParams, useHistory } from 'react-router-dom';
function Aniadir() {
  let [model, setModel] = useState('');
  let [type, setType] = useState('');
  let [size, setSize] = useState('');
  let [qty, setQty] = useState('');
  let [price, setPrice] = useState('');
  let [image, setImage] = useState('');

  let history = useHistory();

  function changeModel(event) {
    setModel(event.target.value);
  }
  function changeType(event) {
    setType(event.target.value);
  }
  function changeSize(event) {
    setSize(event.target.value);
  }
  function changeQty(event) {
    setQty(event.target.value);
  }
  function changePrice(event) {
    setPrice(event.target.value);
  }
  function changeImage(event) {
    setImage(event.target.value);
  }

  function aniadir() {
    let product = { model: model, type: type, size: size, qty: qty, price: price, image: image };
    fetch('http://localhost:3000/api/socksAdmin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (datos) {
        history.push('/models');
      })
  }

  return (
    <>
      <input type="text" value={model} onChange={changeModel} placeholder="Model" />
      <input type="text" value={type} onChange={changeType} placeholder="Type" />
      <input type="text" value={size} onChange={changeSize} placeholder="Size" />
      <input type="text" value={qty} onChange={changeQty} placeholder="Qty" />
      <input type="text" value={price} onChange={changePrice} placeholder="Price" />
      <input type="text" value={image} onChange={changeImage} placeholder="Image" />
      <button onClick={aniadir}>Añadir</button>
    </>
  );
}
export default Aniadir  