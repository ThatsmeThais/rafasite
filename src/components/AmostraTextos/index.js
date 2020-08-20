import React from 'react';
import Button from '../Button/button';
import { Link } from 'react-router-dom'; 
import './style.css';

function AmostraTextos() {
    return (
        <div class="amostraTextos">
			<div class="titulos">Textos</div>			
			<ul class="textos">
                <li class="item2">
				<div class="card">
					
						<h5 class="card-title">UM NÓS EM LEMBRANÇAS</h5>
						<h6 class="card-subtitle">04/09/2019</h6>
						<p class="card-text">E, do nada você vem, como quem não quer nada, só pra bagunçar meus pensamentos e desestruturar tudo que esta em perfeita ordem. Vêm de mansinho, com seu jeitinho meigo, sua voz hipnotizadora e prazerosa, oferecendo amenizar a carência que sinto, dando o amor que preciso.</p>
						<a href="https://soprosempalavras.wordpress.com/2019/09/04/um-nos-em-lembrancas/" class="card-link">Continue lendo...</a>
					
				</div>
                </li>
                <li class="item2">
				<div class="card">
					
						<h5 class="card-title">CANSAÇO, VOCÊ JÁ PODE IR</h5>
						<h6 class="card-subtitle">18/04/2019</h6>
						<p class="card-text">O cansaço é uma coisa que anda me acompanhando muito. Até quando eu descanso ele ainda esta ali, parece que não vai embora. Já acordar cansada, descansar no tempo livre do trabalho, chegar em casa e deitar, dormir mais cedo e, ainda assim, acordar muito cansada no dia seguinte não é legal.</p>
						<a href="https://soprosempalavras.wordpress.com/2019/04/18/cansaco-voce-ja-pode-ir/" class="card-link">Continue lendo...</a>
					
				</div>
                </li>
                <li class="item2">
				<div class="card">
					
						<h5 class="card-title">PARA SEMPRE, NÓS</h5>
						<h6 class="card-subtitle">27/02/2019</h6>
						<p class="card-text">Meu amor, como é triste viver o nosso “nós” aqui sozinha sem ao menos te ver, ou te tocar ou pelo menos ouvir sua voz.</p>
						<a href="https://soprosempalavras.wordpress.com/2019/02/27/para-sempre-nos/" class="card-link">Continue lendo...</a>
					
				</div>
                </li>
			</ul>
            <div class="botao1">
            <Button as={Link} className="ButtonLink" to="/text" >Ver mais...</Button></div>
        </div>
    );
  }
  
  export default AmostraTextos;