import React, { Component } from 'react'
import axios from "axios";
import { Card } from 'react-bootstrap' 

export class Comics extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comics: [],
        };
      }
    
      componentDidMount = async () => {
        axios
          .get(`${process.env.REACT_APP_SERVER}/comic`)
          .then((result) => {
            this.setState({
              comics: result.data,
            });
          })
          .catch((error) => {
            console.log("Error : ", error);
          });
      };
    
      render() {
        return (
          <div>
            {this.state.comics.map((element, index) => {
              return (
                <div key={index} className='comicCard'>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={element.image_url} />
                    <Card.Body>
                      <Card.Title>{element.name}</Card.Title>
                      {/* <Card.Title>{element.release_date}</Card.Title> */}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        );
      }
    }


export default Comics
