import react, {useState, useEffect} from 'react';
import { Nav, Navbar,Container, NavDropdown} from 'react-bootstrap';
import '../styles/Header.css'



 export default function Header() {
     const [login, setLogin]: any = useState([]);
     const [admin, setAdmin]: any = useState([]);
     const department: any = localStorage.getItem('department') || 0;

     useEffect(() => {
setLogin( 
    <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            olá: <a href="/register">login</a>
         </Navbar.Text>
      </Navbar.Collapse>)
        


if (!!localStorage.getItem('token')) {
    setLogin(<Navbar.Collapse className="justify-content-end">
              
      
  <Navbar.Text>
    olá: <a href="/login">{localStorage.getItem('name')}</a>
  </Navbar.Text><img onClick={logoff} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANZJREFUSEvFlcsRwjAMRF8qgA6ACqAD6ASojHQAJVAKdEAHMDuTMJ4Q/2Sc+JJDrH1aS7YaKq+msj6TAw7ABVgbnT2AM3Dv44cOtGFlFO/DpLHxAd6F4j+6QwezAnS2qk/K+iae40B71QQ3YBGhmAHS3QEtsA1AigDSXXZO9h6IF5Byvu4eOTmOBM0HCLWp2xA6omtX9DHXRTVQkdWu+vqWGaA2VeZyEFomQPWLltNhJgd/AbwSnoEY6OnOk+FbpCLq8lhngsRPoYETyy77/+QzOTvDWMAH32ogGWOPiQcAAAAASUVORK5CYII="/> </Navbar.Collapse>  )


if (department == 3) {
console.log(department)
  setAdmin( <NavDropdown title="administração" id="basic-nav-dropdown">
  <NavDropdown.Item href="/create">adicionar técnico</NavDropdown.Item>

</NavDropdown>)
}else if (department == 4){
  setAdmin( <NavDropdown title="administração" id="basic-nav-dropdown">
  <NavDropdown.Item href="/create/massive">adicionar massiva</NavDropdown.Item>
  <NavDropdown.Item href="/create">adicionar técnico</NavDropdown.Item>
  <NavDropdown.Item href="/adm/coffee">gerenciar café</NavDropdown.Item>
</NavDropdown>)
}
}
}, []);


function logoff(){ 

  localStorage.removeItem('token');
  localStorage.removeItem('name');
  localStorage.removeItem('id');
  
  window.location.href = '/login'


}

     return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Acesse</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/massive">Massiva</Nav.Link>
              <Nav.Link href="/Mapa/area">Mapa de area </Nav.Link>
              <Nav.Link href="/cofee">Café </Nav.Link>
              <Nav.Link href="/create/cliente/massive">cadastrar cliente Massiva </Nav.Link>
              <Nav.Link href="/client/massive">cliente Massiva </Nav.Link>
             {admin}
              
            </Nav>
          </Navbar.Collapse>
          {login}
          
        </Container>
      </Navbar>
     )
 }