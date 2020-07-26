import React, { useState } from 'react';



function Comprar(props) {

  let [quantity, setQuantity] = useState(props.quantity)


  function comprar() {


    if (quantity === 0) {


      setQuantity("ya no hay productos")
    }

    else {
      setQuantity(quantity - 1)
    }

    fetch(`http://localhost:3000/api/${quantity}/${props.id}`, {
      method: 'PUT',
    })

    console.log(props.id)
  }


  return (
    <>


      <div className="stock">
      <p>
          <img src={props.image} />
        </p> 
        <h4>
          {props.modelo}
        </h4>
        <p>
          {props.tipo}
        </p>
        <p>
          {props.size}
        </p>
        <p>
          Stock: {quantity}
        </p>
        <p>
          {props.precio}
        </p>
{/*         
        <button onClick={comprar}>Comprar</button> */}
      </div>
    </>
  )


}


export default Comprar