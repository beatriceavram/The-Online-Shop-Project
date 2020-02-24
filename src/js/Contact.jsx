import React, {Component} from 'react';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        formInfo: []
    };
    handleSubmit = event => {
        event.preventDefault();
        const {name, email, message, department} = this.state;
        let {formInfo} = this.state;

        formInfo = [];
        if (name === '') {
            formInfo.push('The name field must be filled!');
        }
        if (!email.includes('@') || email.length <= 0) {
            formInfo.push('The email field must be filled and must contain @');
        }
        if (message === '') {
            formInfo.push('The message field must be filled!');
        }
        if (formInfo.length === 0) {
            formInfo.push('Thank you for your message!')
        }
        this.setState({formInfo});
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (

            <section className='contact'>
                <div className='container wrapper'>

                    <h1 className='section-header'>CONTACT</h1>

                    <div className='content-contact'>


                        <form className='left-side' onSubmit={this.handleSubmit}>

                            <input placeholder={'NAME'} type={'text'} value={this.state.name} name={'name'}
                                   onChange={this.handleChange}/>

                            <input placeholder={'E-MAIL'} type={'email'} value={this.state.email} name={'email'}
                                   onChange={this.handleChange}/>

                            <textarea placeholder={'MESSAGE'} value={this.state.message} name={'message'}
                                      onChange={this.handleChange}/>

                            <ul>
                                {
                                    this.state.formInfo.map((elem, index) => {
                                        return <li key={index}>{elem}</li>
                                    })
                                }
                            </ul>

                            <input className='button' type={'submit'}/>

                        </form>

                        <div className='right-side'>
                            <ul className="contact-list">
                                <li><i className="fa fa-map-marker fa-2x"><span
                                    className="contact-text place">Bucharest | RO</span></i></li>

                                <li><i className="fa fa-phone fa-2x"><span
                                    className="contact-text phone"><a href="tel:1-212-555-5555"
                                                                      title="Give me a call">(212) 555-2368</a></span></i>
                                </li>

                                <li><i className="fa fa-envelope fa-2x"><span
                                    className="contact-text gmail"><a href="mailto:#"
                                                                      title="Send me an email">emailme@gmail.com</a></span></i>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </section>
        )

    }
}

export default Contact;