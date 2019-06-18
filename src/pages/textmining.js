import React, { Fragment } from "react"
import { Container, Row, Col, Table } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogheader"

const subjects = [
  {
    key: "ID0101",
    name: "Diseño de patrones para datos estructurados.pdf",
  },
  {
    key: "ID0102",
    name: "Física clásica.pdf",
  },
  {
    key: "ID0103",
    name: "Organización y diseño de computadoras.pdf",
  },
  {
    key: "ID0160",
    name: "Pensamiento crítico para ingeniería.pdf",
  },
  {
    key: "ID0161",
    name: "Recursos de comunicación para la era digital.pdf",
  },
  {
    key: "II0106",
    name: "Cálculo diferencial.pdf",
  },
  {
    key: "II0209",
    name: "Cálculo integral.pdf",
  },
  {
    key: "IL0102",
    name: "Teoría general de sistemas.pdf",
  },
  {
    key: "IT0101",
    name: "Algoritmos y estructura de datos.pdf",
  },
  {
    key: "IT0103",
    name: "Introducción a las redes.pdf",
  },
  {
    key: "IT0104",
    name: "Matemáticas discretas.pdf",
  },
  {
    key: "IT0161",
    name: "Sistemas operativos POSIX.pdf",
  },
  {
    key: "IT0264",
    name: "Introducción a los sistemas de información.pdf",
  },
  {
    key: "LI1101",
    name: "Nivel 1 Inglés.pdf",
  },
  {
    key: "LI1102",
    name: "Nivel 2 Inglés.pdf",
  },
  {
    key: "LI1103",
    name: "Nivel 3 Inglés.pdf",
  },
]

const TextMining = () => (
  <Layout>
    <Container>
      <Fragment>
        <BlogHeader />
        <Container>
          <Row>
            <Col md="12" class="blog-main">
              <h3 class="pb-3 mb-4 font-italic border-bottom text-center">
                Minería de Textos
              </h3>

              <div class="blog-post">
                {/* <h2 class="blog-post-title">Sample blog post</h2> */}
                <p class="blog-post-meta">Junio 3, 2019</p>
                <p>
                  En el presente artículo presentaremos la serie de pasos que
                  seguimos para poder aplicar minería de textos en unos archivos
                  PDF correspondientes al plan edicativo de la carrera de IDeIO
                  de la Universidad del Caribe.
                </p>
                <hr />
                {/* <p>
                  Cum sociis natoque penatibus et magnis{" "}
                  <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Sed posuere consectetur est at lobortis.
                  Cras mattis consectetur purus sit amet fermentum.
                </p>
                <blockquote>
                  <p>
                    Curabitur blandit tempus porttitor.{" "}
                    <strong>Nullam quis risus eget urna mollis</strong> ornare
                    vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
                    elit.
                  </p>
                </blockquote>
                <p>
                  Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                  mattis consectetur purus sit amet fermentum. Aenean lacinia
                  bibendum nulla sed consectetur.
                </p> */}
                <h3>Extracción</h3>
                <p>
                  Para este primer paso utilizamos la función <i>list.files</i>{" "}
                  de R para listar todos los archivos con extensión pdf dentro
                  de las carpetas.
                </p>
                <p>Le indicamos la carpeta en la que queremos que busque.</p>
                <pre>
                  <code>path &lt;- "Primer Ciclo"</code>
                </pre>
                <p>
                  Guardamos en una variable el listado de nombres de los
                  archivos con extensión pdf, para ello utilizamos el parámetro
                  pattern
                </p>
                <pre>
                  <code>
                    files &lt;- list.files(path = paste0("./Temarios IDeIO
                    finales/", path) , pattern = "pdf$")
                  </code>
                </pre>
                <p>
                  Si imprimimos el resultado podemos notar que se encuentran
                  todos los archivos del primer ciclo.
                </p>
                <pre>
                  <code>&gt; files</code>
                  <Table striped bordered size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Clave</th>
                        <th>Nombre</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjects.map(({ key, name }, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{key}</td>
                          <td>{name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </pre>
                <pre>
                  <code>
                    corp &lt;- VCorpus(URISource(files), readerControl =
                    list(reader = readPDF))
                  </code>
                </pre>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    </Container>
  </Layout>
)

export default TextMining
