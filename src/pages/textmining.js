import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogheader"

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
                <p>
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
                </p>
                <h2>Heading</h2>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <h3>Sub-heading</h3>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
                <pre>
                  <code>path = "Primer Ciclo"</code>
                </pre>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                  malesuada magna mollis euismod. Fusce dapibus, tellus ac
                  cursus commodo, tortor mauris condimentum nibh, ut fermentum
                  massa.
                </p>
                <h3>Sub-heading</h3>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                  consectetur. Etiam porta sem malesuada magna mollis euismod.
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
                <ul>
                  <li>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et.
                  </li>
                  <li>Donec id elit non mi porta gravida at eget metus.</li>
                  <li>Nulla vitae elit libero, a pharetra augue.</li>
                </ul>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Nulla
                  vitae elit libero, a pharetra augue.
                </p>
                <ol>
                  <li>Vestibulum id ligula porta felis euismod semper.</li>
                  <li>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </li>
                  <li>
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna.
                  </li>
                </ol>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Sed posuere
                  consectetur est at lobortis.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    </Container>
  </Layout>
)

export default TextMining
