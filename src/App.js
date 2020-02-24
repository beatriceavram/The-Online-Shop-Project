import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Navbar from './js/Navbar.jsx';
import ProductList from './js/ProductList.jsx';
import Details from './js/Details.jsx';
import Cart from './js/Cart/Cart.jsx';
import Default from './js/Default.jsx';
import Footer from './js/Footer.jsx';
import {ProductProvider} from './js/context.jsx';
import Modal from './js/Modal.jsx';
import About from './js/About.jsx';
import Contact from './js/Contact.jsx';
import './App.scss';


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Navbar> </Navbar>
          <Switch>
            <Route exact path='/' component={ProductList} />
            <Route path='/about' component={About} />
            <Route path='/details' component={Details} />
            <Route path='/contact' component={Contact} />
            <Route path='/cart' component={Cart} />
            <Route component={Default} />
          </Switch>
          <Modal />
          <Footer> </Footer>
        </React.Fragment>
    );
  }
}


document.addEventListener("DOMContentLoaded", function () {

  ReactDOM.render(
      <ProductProvider>
        <Router>
          <App />
        </Router>
      </ProductProvider>,
      document.getElementById('app')
  )
});

export default App;