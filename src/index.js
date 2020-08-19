import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Photos from './pages/photos'
import Book from './pages/book';
import Text from './pages/text';
import About from './pages/about';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


const Pagina404 = () => (
  <div className="erro">
    <p>Não encontramos o que queria, volte para a home. </p>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/photos" component={Photos} />
        <Route path="/text" component={Text} />
        <Route path="/book" component={Book} />
        <Route path="/about" component={About} />
        <Route component={Pagina404} />
    </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);