import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import ProductList from './ProductList.jsx';
import Details from './Details.jsx';
import Cart from './Cart/Cart.jsx';
import Default from './Default.jsx';
import Footer from './Footer.jsx';
import {ProductProvider} from './context.jsx';
import Modal from './Modal.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Carousel from "./Carousel.jsx";


class App extends Component {
    render() {
        return (
            <>
                <Navbar> </Navbar>
                <Switch>
                    {/*<Route exact path='/' component={Carousel} />*/}
                    <Route exact path='/' component={ProductList} />
                    <Route path='/about' component={About} />
                    <Route path='/details' component={Details} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/cart' component={Cart} />
                    <Route component={Default} />
                </Switch>
                <Modal />
                <Footer> </Footer>
            </>
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