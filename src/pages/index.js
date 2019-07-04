import React from "react"
import { Link } from "gatsby"
import { Container, Col, Row } from "reactstrap"
import { TeamContainer } from "../layout/index.style"
import Layout from "../components/layout"
import Particles from "../containers/ParticlesContainer"
// import Image from "../components/image"

import TeamCard from "../components/teamcard"
import SEO from "../components/seo"
import Services from "../containers/Services"
import Callout from "../containers/Callout"
import Portfolio from "../containers/Portfolio"
import Team from "../containers/Team"

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
    <Particles />
    <Services />
    <Team />
    <Portfolio />
  </Layout>
)

export default IndexPage
