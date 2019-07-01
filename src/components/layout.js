/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"

import Header from "./header"
import "./layout.css"
import "./bootstrap.min.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer
          className="text-center"
          style={{
            background: "#393E44",
          }}
        >
          <Container>
            <ul className="list-inline mb-5">
              <li className="list-inline-item">
                <a
                  className="social-link rounded-circle text-white mr-3"
                  href="#"
                >
                  <i className="icon-social-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="social-link rounded-circle text-white mr-3"
                  href="#"
                >
                  <i className="icon-social-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-link rounded-circle text-white" href="#">
                  <i className="icon-social-github"></i>
                </a>
              </li>
            </ul>
          </Container>
          <p class="text-white small mb-0">
            Copyright &copy; Data Analysis and Software Solutions{" "}
            {new Date().getFullYear()}
          </p>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
