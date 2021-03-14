import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }

    return (
        <Container>
        {!auth && 
            <Card className="text-white bg-primary my-5 py-4 text-center">
            <CardBody>
                <CardText className="text-white m-0">Invalid credentials, please try again</CardText>
            </CardBody>
        </Card>
        }
        <Form className="my-5" onSubmit={loginSubmit}>
          <Row form>
            <Col md={10}>
            <FormGroup>
                    <Label for="emailEntry">Email</Label>
                   
                    <Input type="email" name="email" id="emailEntry" placeholder="Enter email"  required value={email} onChange={e => setEmail(e.target.value) }/>
                    
                </FormGroup>
            
              <FormGroup>
                <Label for="passwordEntry">Password</Label>
               
                <Input type="password" name="password" id="passwordEntry" placeholder="Valid password" onChange={e => setPassword(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>
          <Button color="primary">Sign in</Button>
        </Form></Container>
    )
}

export default Login