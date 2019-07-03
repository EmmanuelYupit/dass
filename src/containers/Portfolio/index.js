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
    description: "Procesamiento de textos en formato PDF",
    imageUrl: textMiningImage,
  },
  {
    url: "/imageprocessing",
    caption: "procesamiento de imagenes",
    description: "Procesamiento y clasificacion de mamografias",
    imageUrl: imageprocessingImage,
  },
  {
    url: "/audioprocessing",
    caption: "procesamiento de audio",
    description: "Procesamiento de audio utilizando Pydub & IPython",
    imageUrl: audioProcessingImage,
  },
  {
    url: "/videoprocessing",
    caption: "procesamiento de video",
    description: "Procesamiento de video utilizando OpenCV",
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
