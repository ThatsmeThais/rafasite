import React from 'react';
import { Link } from 'react-router-dom'; 
import './Menu.css';

function Menu(){
    return(
        <div class="container-fluid entrada"><nav class="navbar navbar-expand-lg">
			<Link  class="navbar-brand" to="/">Rafaela Coriliano</Link>
			<div class="collapse navbar-collapse justify-content-end">
				<ul class="navbar-nav">
					<li class="nav-item"><Link class="nav-link" to="/photos">Fotografias</Link></li>
					<li class="nav-item"><Link class="nav-link" to="/text">Textos</Link></li>
					<li class="nav-item"><Link class="nav-link" to="/book">Livro</Link></li>
					<li class="nav-item"><Link class="nav-link" to="/about">Sobre mim</Link></li>
					<li class="nav-item"><Link class="nav-link" to="/"><svg class="bi bi-chat-square-dots-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg></Link></li>
				</ul>
			</div>
        </nav></div>	
        
    );
}

export default Menu;