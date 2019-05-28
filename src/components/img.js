import React, { Component } from "react";



class Image extends Component {
    state = {
        clicked: false,
        src: this.props.src
    }
    handleClick = event => {
        console.log("click");
        event.preventDefault();
        this.state.clicked ? this.props.endGame() : this.setState({ clicked: true });
        this.props.shuffle();

    }


    render() {
        return (
            <img src={this.props.src} alt={this.props.src} onClick={this.handleClick}></img> 
        )
    }


}

export default Image;
// export default function Img(props) {
//     handleClick = (event) => {

//         this.setState({play: false});
//         this.clicked ? Game.endGame() : event.target.setState({ clicked: true });

//     }

//     return (
//         <img src={props.src} alt={props.src} onClick={handleClick()}></img> 
//     )
// }