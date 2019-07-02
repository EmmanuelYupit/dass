import React from "react"
import { ContentSection, ContentSectionHeading } from "./index.style"
import { Container, Row, Col } from "reactstrap"
import Card from "../../components/Card"

const Team = () => (
  <ContentSection
    style={{
      background: "#393E44",
    }}
  >
    <Container className="justify-content-center">
      <ContentSectionHeading className="text-center">
        <h3 className="text-secondary mb-0">Team</h3>
        <h2 className="mb-5 text-white">Conoce al Team</h2>
      </ContentSectionHeading>
      <Row className="text-center ">
        <Col md="6" className="text-center">
          <Card />
        </Col>
        <Col md="6" className="text-center">
          <Card />
        </Col>
      </Row>
    </Container>
  </ContentSection>
)

export default Team
