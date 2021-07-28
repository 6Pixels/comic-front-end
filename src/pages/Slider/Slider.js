import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export class Slider extends Component {
    render() {
        return (
            <div id="tariq">


                <Carousel>
                    <Carousel.Item interval={1000}>

                        <img
                            className="d-block w-100"
                            src="https://wallpaperaccess.com/full/535090.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="sliderheader">Explore unlimited number of movies and originals</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.wallpapersafari.com/97/6/g6icBQ.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className="sliderheader">Browse and find digital, print comics and Various exclusive new comics</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.wallpapersafari.com/47/82/DHud7b.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className="sliderheader">Learn about the world's Greatest Super Heroes, and their enemies</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Slider
