import React from "react"
import Service from "../../components/Service"
import { ContentSection, ContentSectionHeading } from "./index.style"
import { Container, Row } from "reactstrap"

const servicesArr = [
  { name: "Responsive", description: "Looks great on any screen size!" },
  { name: "Redesigned", description: "Freshly redesigned for Bootstrap 4" },
  { name: "Favorited", description: "Millions of users" },
  { name: "Question", description: "I mustache you a question..." },
]

const Services = () => (
  <ContentSection className='bg-primary text-white text-center"'>
    <Container>
      <ContentSectionHeading className="text-center">
        <h3 className="text-secondary mb-0">Services</h3>
        <h2 className="mb-5">What We Offer</h2>
      </ContentSectionHeading>
      <Row>
        {servicesArr.map(service => (
          <Service service={service} />
        ))}
      </Row>
    </Container>
  </ContentSection>
)

export default Services
