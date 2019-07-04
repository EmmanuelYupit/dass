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

const projects = [
  { name: "semana 1", url: "/textmining" },
  { name: "semana 2", url: "/imageprocessing" },
  { name: "semana 3", url: "/audioprocessing" },
  { name: "semana 4", url: "/videoprocessing" },
]

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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>proyectos</DropdownToggle>
              <DropdownMenu className="bg-dark" right>
                {projects.map(({ name, url }) => (
                  <DropdownItem>
                    <Link to={url}>
                      <NavLink>{name}</NavLink>
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </NavbarReactstrap>
    )
  }
}
