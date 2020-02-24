import React, {Component} from "react";


class Default extends Component {
    render() {
        return (
            <div className='container notFound'>
                <div className='row'>
                    <div className='col-10'>
                        <div>
                            <img src='./img/404notfound.jpg'/>
                        </div>
                        <h3>THE REQUESTED URL <span>{this.props.location.pathname}</span> WAS NOT FOUND</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;