import React from 'react';
import Button from '../Button/button';
import { Link } from 'react-router-dom'; 
import './style.css';



function BannerMain() {
    return (
        
        <div class="container">
        <div class="row">
            <div class="col-md-6 apresentacao">
                <h1 class="rafaela">Rafaela Coriliano</h1>
                
                <h3>Conheça meu trabalho</h3>
                <p align="Justify">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
                
                <Button as={Link} className="ButtonLink" to="/about" >Continue lendo...</Button>
            </div>
        </div></div>
    );
  }
  
  export default BannerMain;
  