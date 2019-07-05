import React from "react"
import { ContentSection, ContentSectionHeading, Subtitle } from "./index.style"
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap"
import yup from "../../images/yup.jpg"
import shamed from "../../images/shamed.jpg"
// import Card from "../../components/Card"

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
        <Col xs="6" className="text-center">
          <Card>
            <CardImg top width="100%" src={yup} alt="Card image cap" />
            <CardBody>
              <CardTitle>Emmanuel Yupit</CardTitle>
              <Subtitle>CEO & Co-Founder</Subtitle>
              <CardText>
                Full-Stack experto en React.Js, con una trayectoria de 4 años
                como desarrollador de software.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" className="text-center">
          <Card>
            <CardImg top width="100%" src={shamed} alt="Card image cap" />
            <CardBody>
              <CardTitle>Shamed Calderon</CardTitle>
              <Subtitle>CTO & Co-Founder</Subtitle>
              <CardText>
                Front-End Developer experto en Angular.Js, con una trayectoria
                de 2 años como desarrollador de software.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </ContentSection>
)

export default Team
