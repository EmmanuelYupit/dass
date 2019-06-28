import React from "react"
import { Container } from "reactstrap"
import { Icon, TextFaded } from "./index.style"

const Service = ({ service: { name, description } }) => (
  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
    <Icon className="rounded-circle mx-auto mb-3">
      <i className="icon-screen-smartphone"></i>
    </Icon>
    <Container className="text-center">
      <h4>
        <strong>{name}</strong>
      </h4>
      <TextFaded className="mb-0">{description}</TextFaded>
    </Container>
  </div>
)

export default Service
