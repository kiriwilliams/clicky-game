import React, { Component } from "react";
import Tile from "../components/tile";
import Img from "../components/img";


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

    shuffle = () => {
        //Fisher-Yates (aka Knuth) Shuffle.
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array;
          }
        this.setState({images: shuffle(this.state.images)});
    }

    


    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div>
                        {this.state.images.map(img => {
                            return (
                                <Img key={img} src={img} endGame={this.endGame} shuffle={this.shuffle} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;