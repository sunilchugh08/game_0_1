import React, { Component } from 'react';
import  './Square.css'

class Square extends Component {

    render() {
        return (
            <div >
                <button className="Square" onClick={() => { this.props.onClick() } }> {this.props.value}</button>
            </div>
        );
    }
}

export default Square;
