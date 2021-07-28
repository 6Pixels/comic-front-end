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
                            src="https://images.hdqwalls.com/wallpapers/superman-dc-comic-art-bb.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://www.teahub.io/photos/full/76-767620_roblox-heroes-vs-villains.jpg"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://wallpapercave.com/wp/wp1942812.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Slider
