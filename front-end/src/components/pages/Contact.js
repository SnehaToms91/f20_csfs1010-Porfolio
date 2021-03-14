import React, { useState } from 'react'
import { Form, FormGroup, Col,Button, Input, Label, Container } from 'reactstrap'
import {  Row } from "react-bootstrap";
import "../../style.css";

import 'font-awesome/css/font-awesome.min.css';

import Particle from "../Particle";
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")
   

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.name}`)
            setEmail("");
            setName("");
            setContent("");
            setPhoneNumber("");
            
        }
    }

    return (
        <Container>
             <Particle />
           <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/snehavava/"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/SnehaToms91"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                 <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sneha-mathew-b739a7141/"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:snehatoms91@gmail.com"
    
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                 <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
            <Form className="my-5" onSubmit={formSubmit}>
            <FormGroup row>
                    <Label for="emailEntry" sm={2}>Email</Label>
                    <Col sm={10}>
                    <Input type="email" name="email" id="emailEntry" placeholder="Enter email to contact"  required value={email} onChange={e => setEmail(e.target.value) }/>
                    </Col>
                </FormGroup>
             
                <FormGroup row>
                    <Label for="phoneEntry" sm={2}>Phone Number</Label>
                    <Col sm={10}>
                    <Input type="phone" name="phone" id="phoneEntry" placeholder="Enter phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="nameEntry" sm={2}>Full Name</Label>
                    <Col sm={10}>
                    <Input type="name" name="name" id="nameEntry" placeholder="Enter your full name" required value={name} onChange={e => setName(e.target.value)}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="messageEntry" sm={2}>Message</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="text" id="messageEntry" required value={content} onChange={e => setContent(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                   
                    <Button  color="primary">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
      )
    }

    export default Contact