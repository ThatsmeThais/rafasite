import React from 'react';
import { Link } from 'react-router-dom'; 
import './Menu.css';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/" className="logo">
                Rafaela Coriliano
            </Link>
            <Link to="/text" className="nav">
                Textos
            </Link>
            <Link to="/photos" className="nav">
                Fotografias
            </Link>
            <Link to="/book" className="nav">
                Livro
            </Link>
            <Link to="/about" className="nav">
                Sobre mim
            </Link>
            <Link to="/" className="nav">
                <svg class="bi bi-chat-square-dots-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
            </Link>
        </nav>
    );
}

export default Menu;