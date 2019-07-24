import React,{Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';

class AppNavbar extends Component{
        state={
            isOpen: false
        }

        toggle = () =>{
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
        


    render(){
       return(
            <div>
                <Navbar color="dark" dark expand="sm" className="md-5">
                    <Container>
                        <NavbarBrand href="/" style={{textTransform:'uppercase'}}>админ панель справочника</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://levencovka.ru">
                                    levencovka.ru
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
    
                </Navbar>
            </div>
       );
    }
}

export default AppNavbar;