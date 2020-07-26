import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, useParams, useHistory } from 'react-router-dom';

function Eliminar() {
  let [modelDeleted, setModelDeleted] = useState('');


  const history = useHistory()

  function deleteModel(event) {
    setModelDeleted(event.target.value);
  }


  function eliminar() {
    fetch(`http://localhost:3000/api/delete/socksAdmin/${modelDeleted}`, {
      method: 'DELETE',
    })
      .then(function () {
        history.go()

      })
    setModelDeleted("")
  }

  return (
    <div>
      <input type="text" value={modelDeleted} onChange={deleteModel} placeholder="" />
      <button onClick={eliminar}>Eliminiar</button>
    </div>
  )
}
export default Eliminar