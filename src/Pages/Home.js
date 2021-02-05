import React, { Component } from 'react';
import { Card, CardDeck, Container, Button } from 'react-bootstrap';
import CaruselBox from '../Components/CaruselBox';


export default class Home extends Component {
  render() {
    return (
      <>
        <CaruselBox/>
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck>
            <Card>
              <Card.Img 
              variant='top'
              src="https://images.pexels.com/photos/186076/pexels-photo-186076.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186076.jpg&fm=jpg"
              />
              <Card.Body>
                <Card.Title>
                  Developers
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur
                </Card.Text>
                <Button variant='bottom'>About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img 
              variant='top'
              src="https://images.pexels.com/photos/39621/boat-teamwork-training-exercise-39621.jpeg?cs=srgb&dl=pexels-pixabay-39621.jpg&fm=jpg"
              />
              <Card.Body>
                <Card.Title>
                  Developers
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img 
              variant='top'
              src="https://images.pexels.com/photos/264146/pexels-photo-264146.jpeg?cs=srgb&dl=pexels-pixabay-264146.jpg&fm=jpg"
              />
              <Card.Body>
                <Card.Title>
                  Developers
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    )
  }
}