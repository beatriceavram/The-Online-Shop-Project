import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div>
                        <p>{'\u00A9'} Beatrice Avram</p>
                        <h4>
                            <a href='https://www.coderslab.ro/'>IT Academy Coders Lab by eJobs</a>
                        </h4>
                    </div>
                    <div className='contacts'>
                        <a href='https://github.com/beatriceavram'><i className="fab fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/avram-beatrice-1a409a84/'>
                            <i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;