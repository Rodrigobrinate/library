
import { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import api from '../components/api';
import '../styles/Login.css';

export default function Login() {
  const [msg, setMsg]:any = useState([])


  function login(){
    var email:any = document.querySelector('#email');
    var password:any = document.querySelector('#password');
    
    
            api.post("/login",{
                email: email.value,
                password: password.value,
            }).then((response) => {
              console.log(response.data)
              if (response.data.st === 1) {  
    
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('name', response.data.name)
                localStorage.setItem('id', response.data.id)
                localStorage.setItem('department', response.data.department)
                return window.location.href = '/'
              }else{
              return setMsg(<Alert  variant="danger" >{response.data.msg}</Alert>)
              }
                
            })
        }


    return (
        <div>

<Form>
    
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" id="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" id="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  <Button onClick={login} variant="primary" type="button">
    Entrar
  </Button>
</Form>


        </div>
    )
}
