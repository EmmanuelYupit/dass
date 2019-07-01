import React from "react"
import Service from "../../components/Service"
import { ContentSection, ContentSectionHeading } from "./index.style"
import { Container, Row } from "reactstrap"

const servicesArr = [
  { name: "Data", description: "Looks great on any screen size!" },
  { name: "Analysis", description: "Freshly redesigned for Bootstrap 4" },
  { name: "Software", description: "Millions of users" },
  { name: "Solutions", description: "I mustache you a question..." },
]

const Services = () => (
  <ContentSection
    className='text-white text-center"'
    style={{
      background: "#393E44",
    }}
  >
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
