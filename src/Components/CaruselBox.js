import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import firstImg from '../assets/first.jpg'
import secondImg from '../assets/second.jpg'

export default class CaruselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img 
             className='d-block w-100'
             src={firstImg}
             alt='first'
             />
              <Carousel.Caption>
                <h3>First image</h3>
                <p>Lorem ipsum</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
             className='d-block w-100'
             src={secondImg}
             alt='first'
             />
              <Carousel.Caption>
                <h3>Second image</h3>
                <p>Lorem ipsum</p>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}