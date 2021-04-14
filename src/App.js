/* eslint-disable */

import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron  } from 'react-bootstrap';
import Data from './data.js';

function App() {

  let [가구, 가구변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="">
        <Navbar.Brand href="#home"> 2D인테리어 (Open Web Project) </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#logout"> Logout </Nav.Link>
            <Nav.Link href="#mypage"> My page </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div class="container">
        <div class="row align-items-start">
          <div class="col" className="사용자도형">
            <h5>사용자 설정 도형</h5>
            <img src={ process.env.PUBLIC_URL + 'square.jpg' } alt="copy url" width="100%"/>
            <p>사각형</p>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="가로(cm)"/>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="세로(cm)"/>
              </div>
            <p> <Button variant="secondary">추가</Button> </p>
            <img src={ process.env.PUBLIC_URL + 'triangle.jpg' } alt="copy url" width="100%"/>
            <p>삼각형</p>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="가로(cm)"/>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="세로(cm)"/>
              </div>
            <p> <Button variant="secondary">추가</Button> </p>
          </div>
          <div class="col-8">
            <Jumbotron>
            <img src={ process.env.PUBLIC_URL + 'oneroom.jpg' } alt="copy url" width="100%"/>
              <h1> My room </h1>
              <p>
                도면에 도형을 배치 할 수 있습니다.
              </p>
              <p>
                <Button variant="primary">Interior</Button>
              </p>
            </Jumbotron>
          </div>
          <div class="col">
            <h4>가구 추천</h4>
            <div className="container">
              <div className="row">
                { 
                  가구.map((a, i)=>{
                    return <Furniture 가구={가구[i]} i={i} key={i}/>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Furniture(props, i){
  return(
    <div>
      <img src={ process.env.PUBLIC_URL + '침대' + (props.i + 1) + '.jpg' } alt="copy url" width="100%"/>
      <p> { props.가구.title } </p>
      <p> { props.가구.content } </p>
      <p> { props.가구.price } </p>
    </div>
  )
      
}

export default App;
