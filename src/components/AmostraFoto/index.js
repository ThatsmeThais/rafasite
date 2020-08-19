import React from 'react';
import Button from '../Button/button';
import { Link } from 'react-router-dom'; 
import './style.css';
import img1 from '../assets/img/foto1.jpg';
import img2 from '../assets/img/foto2.jpg';
import img3 from '../assets/img/foto3.jpg';

function AmostraFotos() {
    return (
        <div class="container-fluid amostraFotos">
			<div class="titulos text-center">Fotografias</div>
                <ul class="navbar-nav" align="center">
					<li class="item"><img class="fotos" src={img1}/></li>
					<li class="item"><img class="fotos" src={img2}/></li>
                    <li class="item"><img class="fotos" src={img3}/></li>
				</ul>
			<div class="botaoFoto">
            <Button as={Link} className="ButtonLink" to="/photos" >Ver mais...</Button>
            </div>
		</div>

    );
  }
  
  export default AmostraFotos;