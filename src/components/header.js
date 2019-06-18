// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import CustomNavbar from "./navbar"

const Header = ({ siteTitle }) => <CustomNavbar></CustomNavbar>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
