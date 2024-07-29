import React from 'react';
import logo from '../logo.svg';
import './Exercise.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
class Exercise extends React.Component {

    constructor(props) {
        super(props);
        this.style_header = style_header
    }

    render() {

        return (
            <div>
                <h1 style={{color:'red', backgroundColor:'lightblue'}}>Hello World!</h1>
                <h1 style={this.style_header}>Hello World!</h1>

                <p className='para'>This is a paragraph</p>
                <a href="https://developers.institute/">This is a link</a>
                <form>
                    <input type="text"/>
                    <input type="submit" value="Submit"/>
                </form>
                <img src={logo}/>
                <p>This is a list:</p>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        )
    }
}

export default Exercise
