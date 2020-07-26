import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Footer(props) {


    return(

        
        < div className="footer">

        <div className="footerDer">

            <div className="listos">
                <h5>Mundos</h5>
                <ul>
                    <li>Eventos</li>
                    <li>Noticias</li>
                    <li>Colaboradores</li>
                </ul>
            </div>

            <div className="listos">
                <h5>Información</h5>
                <ul>
                    <li>Api</li>
                    <li>Tips</li>
                    <li>blog</li>
                </ul>
            </div>
            <div className="listos">
                <h5> Clientes</h5>
                <ul>
                    <li>oficinas</li>
                    <li>agencia</li>
                    <li>viajes</li>
                </ul>
            </div>
        </div>
        <div className="footerizq">

            <div className="logo">
                <img src="/rayito.svg" alt=""/>
                <p> <strong> El Rayito Sunglasses</strong></p>
            </div>


            <div class="foto">
                <img src="/facebook.svg" alt=""/>
                <img src="/insta.svg" alt=""/>
                <img src="/twitter.svg" alt=""/>
                <img src="/reddit.svg" alt=""/>

            </div>

        </div>
    </div>

)
}

export default Footer