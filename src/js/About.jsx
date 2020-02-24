import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <section className='about'>

                <div className='container details'>
                    <div className='about-header'>
                        <h1>About this Project</h1>
                        <h4>The Online Shop</h4>

                    </div>
                    <div className='about-main'>
                        <img src='./img/online_shop.png' alt='online-shop'/>
                        <div className='about-text'>
                            <p>I've made this project to show the concepts and technologies that I’ve learned at Coders
                                Lab,
                                to work at a final product that is a full website using multiple pages and animations,
                                Responsive Web Design and of course, ReactJs.

                            </p>

                            <a className='inspiration'
                               href='https://www.youtube.com/watch?v=wPQ1-33teR4&list=WL&index=2&t=0s'> <i
                                className="fab fa-youtube"> Inspiration </i></a>

                            <div className='tech'>
                                <i className="fab fa-js-square"></i>
                                <i className="far fa-images"></i>
                                <i className="fab fa-react"></i>
                                <i className="fas fa-file-code"></i>
                                <i className="fab fa-sass"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;