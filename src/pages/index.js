import React from "react"
import { Link } from "gatsby"
import { Container, Col, Row } from "reactstrap"
import { TeamContainer } from "../layout/index.style"
import Layout from "../components/layout"
// import Image from "../components/image"
import TeamCard from "../components/teamcard"
import SEO from "../components/seo"
import Services from "../containers/Services"
import Callout from "../containers/Callout"

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
    <Services />
    <Callout />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
