
import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';


export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    Design
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Team
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Programming
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    Frameworks
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    Libraries
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxdesign.cc%2Fbest-figma-plugins-for-2020-which-deserve-your-attention-d542cc56aee0&psig=AOvVaw2VQitAKm2DOGb1ONqgCalq&ust=1605802631996000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCvhqvMjO0CFQAAAAAdAAAAABAV'></img>
                  <p>Lorem ipsum</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxdesign.cc%2Fbest-figma-plugins-for-2020-which-deserve-your-attention-d542cc56aee0&psig=AOvVaw2VQitAKm2DOGb1ONqgCalq&ust=1605802631996000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCvhqvMjO0CFQAAAAAdAAAAABAV'></img>
                  <p>Lorem ipsum</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxdesign.cc%2Fbest-figma-plugins-for-2020-which-deserve-your-attention-d542cc56aee0&psig=AOvVaw2VQitAKm2DOGb1ONqgCalq&ust=1605802631996000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCvhqvMjO0CFQAAAAAdAAAAABAV'></img>
                  <p>Lorem ipsum</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxdesign.cc%2Fbest-figma-plugins-for-2020-which-deserve-your-attention-d542cc56aee0&psig=AOvVaw2VQitAKm2DOGb1ONqgCalq&ust=1605802631996000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCvhqvMjO0CFQAAAAAdAAAAABAV'></img>
                  <p>Lorem ipsum</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxdesign.cc%2Fbest-figma-plugins-for-2020-which-deserve-your-attention-d542cc56aee0&psig=AOvVaw2VQitAKm2DOGb1ONqgCalq&ust=1605802631996000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCvhqvMjO0CFQAAAAAdAAAAABAV'></img>
                  <p>Lorem ipsum</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}