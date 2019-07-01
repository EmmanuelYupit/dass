import React from "react"
import { ContentSection, ContentSectionHeading } from "../../layout/index.style"
import { Container, Row } from "reactstrap"
import ProjectCard from "../../components/ProjectCard"
import textMiningImage from "../../images/portfolio-1.jpg"
import imageprocessingImage from "../../images/portfolio-2.jpg"
import audioProcessingImage from "../../images/portfolio-3.jpg"
import videoProcessingImage from "../../images/portfolio-4.jpg"

const projects = [
  {
    url: "/textmining",
    caption: "Mineria de Textos",
    description: "Uso de herramientas para la mineria de textos",
    imageUrl: textMiningImage,
  },
  {
    url: "/imageprocessing",
    caption: "procesamiento de imagenes",
    description: "Uso de herramientas para la mineria de textos",
    imageUrl: imageprocessingImage,
  },
  {
    url: "/audioprocessing",
    caption: "procesamiento de audio",
    description: "Uso de herramientas para la mineria de textos",
    imageUrl: audioProcessingImage,
  },
  {
    url: "/videoprocessing",
    caption: "procesamiento de video",
    description: "Uso de herramientas para la mineria de textos",
    imageUrl: videoProcessingImage,
  },
]

const Portfolio = () => (
  <ContentSection
    style={{
      background: "#393E44",
    }}
  >
    <Container>
      <ContentSectionHeading className="text-center">
        <h3 className="text-secondary mb-0">Portfolio</h3>
        <h2 className="text-white">Proyectos recientes</h2>
      </ContentSectionHeading>
      <Row className="no-gutters">
        {projects.map(project => (
          <div className="col-lg-6">
            <ProjectCard project={project} />
          </div>
        ))}
      </Row>
    </Container>
  </ContentSection>
)

export default Portfolio
