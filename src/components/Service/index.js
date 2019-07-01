import React from "react"
import { Container } from "reactstrap"
import { Icon, TextFaded } from "./index.style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChartLine,
  faDatabase,
  faLaptopCode,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons"

const Service = ({ service: { name, description, iconName } }) => (
  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
    <Icon className="text-center rounded-circle mx-auto mb-3">
      <FontAwesomeIcon
        icon={
          iconName === "faDatabase"
            ? faDatabase
            : iconName === "faChartLine"
            ? faChartLine
            : iconName === "faLaptopCode"
            ? faLaptopCode
            : faLightbulb
        }
      />
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
