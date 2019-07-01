import React from "react"
import { Link } from "gatsby"
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
} from "reactstrap"
import logo from "../images/logo.png"
import { Image, NavbarReactstrap } from "../layout/index.style"

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      // <NavbarContainer>
      <NavbarReactstrap dark expand="md" sticky="top">
        <NavbarBrand dark>
          <Image src={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav light className="ml-auto" navbar>
            <NavItem>
              <Link to="/">
                <NavLink>home</NavLink>
              </Link>
            </NavItem>
            {/* <NavItem>
                <Link to="/about">
                  <NavLink>acerca de</NavLink>
                </Link>
              </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>proyectos</DropdownToggle>
              <DropdownMenu className="bg-dark" right>
                <DropdownItem>
                  <Link to="/textmining">
                    <NavLink>semana 1</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/imageprocessing">
                    <NavLink>semana 2</NavLink>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </NavbarReactstrap>
      // </NavbarContainer>
    )
  }
}
