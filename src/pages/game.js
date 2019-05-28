import React, { Component } from "react";
import Tile from "../components/tile";
import Img from "../components/img";

import bulbasaur from "../images/Bulbasaur.png";

class Game extends Component {
    state = {
        play: true,
        images: [
            "../images/Bulbasaur.png",
            "../images/Charmander.png",
            "../images/Chespin.png",
            "../images/Chikorita.png",
            "../images/Chimchar.png",
            "../images/Cyndaquil.png",
            "../images/Fennekin.png",
            "../images/Froakie.png",
            "../images/Grookey.png",
            "../images/Litten.png",
            "../images/Mudkip.png",
            "../images/Oshawott.png",
            "../images/Piplup.png",
            "../images/Popplio.png",
            "../images/Rowlet.png",
            "../images/Scorbunny.png",
            "../images/Snivy.png",
            "../images/Sobble.png",
            "../images/Squirtle.png",
            "../images/Tepig.png",
            "../images/Torchic.png",
            "../images/Totodile.png",
            "../images/Treecko.png",
            "../images/Turtwig.png",
        ]
    }
    
    endGame = () => {
        alert("game over");
    }

    handleClick = event => {
        event.preventDefault();
        this.clicked ? Game.endGame() : this.setState({ clicked: true });

    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div>
                        {this.state.images.map(img => {
                            return (
                                <Img key={img} src={img} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;