import React from 'react';
import { Link } from 'react-router-dom'; 
import './Menu.css';
import Button from '../Button/index'

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <h1>Rafaela Coriliano</h1>
            </Link>
            <Link to="/text">
                <h2>Textos</h2>
            </Link>
            <Link to="/photos">
                <h2>Fotgrafias</h2>
            </Link>
            <Link to="/book">
                <h2>Livro</h2>
            </Link>
            <Link to="/about">
                <h2>Sobre mim</h2>
            </Link>
            <Button as={Link} className="ButtonLink" to="/">
                o
            </Button>
        </nav>
    );
}

export default Menu;