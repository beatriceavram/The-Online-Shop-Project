import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
            <nav>
                <div className='container'>
                <Link to='/'>
                    <div className='logo'>Shop Online</div>
                </Link>

                <ul>
                    <li><Link to='/'>Products</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <Link to='/cart'>
                    <button>
                        <i className="fas fa-shopping-cart"></i>
                        <strong>My Cart</strong>
                    </button>
                </Link>
                </div>
            </nav>
                </React.Fragment>
        );
    }
}

export default Navbar;
