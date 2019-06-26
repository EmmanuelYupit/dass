import React from "react"
import { Link } from "gatsby"
import { Alert, Container, Col, Row } from "reactstrap"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import TeamCard from "../components/teamcard"
import SEO from "../components/seo"

const TeamContainer = styled.section`
  margin-top: "20px";
  margin-bottom: "20px";
`

const team = [
  {
    name: "Emmanuel Yupit",
    position: "CEO",
    description: "Software Engineer especializado en react",
  },
  {
    name: "Shamed Calderon",
    position: "CTO",
    description: "Data Engineer especializado en Angular",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TeamContainer>
      <Container>
        <Row>
          <Col>
            <Container>
              <Row>
                {team.map(member => (
                  <Col>
                    <TeamCard member={member} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </TeamContainer>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
