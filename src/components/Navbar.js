import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from 'reactstrap';

function Navvbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className='mx-auto  w-100'>
      <Navbar expand="md"> 
        <NavbarBrand className='text-white fw-bold text-uppercase fs-2' style={{fontFamily: "cursive"}}>Job 
        <span className='text-dark'>
        Kart
        </span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className=''/>
        <Collapse isOpen={isOpen} navbar>
            <div>
                
            </div>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className='text-white text-uppercase me-5'>Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white text-uppercase me-5'>
                Find Job
              </NavLink>
            </NavItem>
            <NavLink className='text-white text-uppercase me-5'>
                Recruit
              </NavLink>
            <NavItem>
              <NavLink className='text-white text-uppercase me-5'>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white text-uppercase  border border-info-3 px-3 d-none d-md-block '>
               Sign Up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white text-uppercase d-md-none '>
               Sign Up
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </Container >
  );
}

export default Navvbar;