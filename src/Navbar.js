import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import About from './Components/About'
import "./Navbar.css"
const TopnavBar = () => {
    return (
        <Container>
            <Row>

                <Col>
                  <li> <Link to ="/"> Home</Link>  </li>
                  <li> <Link to ="/about"> About</Link>  </li>
                  <li> <Link to ="/contact"> Contact</Link>  </li>

                </Col>

            </Row>

        </Container>
    )
}

export default TopnavBar
