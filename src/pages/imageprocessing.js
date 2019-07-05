import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogheader"
import CodeBlock from "../components/codeblock"
import mammogramInfo from "../images/mammogram-info.png"
import mammogram1 from "../images/mammogram-1.png"
import mammogram2 from "../images/mammogram-2.png"
import headerImg from "../images/portfolio-2.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Image Processing Mammographs" />
    <Container>
      <Fragment>
        <BlogHeader imgSrc={headerImg} />
        <Container>
          <Row>
            <Col md="12" className="blog-main"></Col>
            <h3 className="pb-3 mb-4 font-italic border-bottom text-center">
              Procesamiento de Imágenes
            </h3>
            <div className="blog-post">
              <p class="blog-post-meta">Junio 3, 2019</p>
              <p>
                Para el presente proyecto se nos solicitó utilizar técnicas de
                procesamiento de imágenes para poder realizar las siguientes
                tareas:
              </p>
              <ul>
                <li>Limpiar el fondo de cada imagen.</li>
                <li>Eliminar el músculo pectoral.</li>
                <li>Clasificar las imágenes por tipo de tejido.</li>
              </ul>
              <p>
                Durante el proceso nos enfrentamos a distintos retos, tales
                como:
              </p>
              <ul>
                <li>
                  Cuanta información perderíamos en cada imagen dependiendo de
                  la técnica utilizada
                </li>
                <li>
                  Si la capacidad de nuestras computadoras soportaría procesar
                  la cantidad total de imágenes sin que se detuviera o el kernel
                  se “muriera”.
                </li>
                <li>
                  Si los conocimientos previos eran suficientes para poder
                  cumplir con los requisitos del proyecto.
                </li>
                <li>
                  Si el personal era suficiente para poder terminar cada punto
                  de manera óptima (recordando siempre que nuestro servicio se
                  enfoca en entregar productos óptimos y de buena calidad, más
                  que simplemente entregar un resultado al cliente).
                </li>
              </ul>
              <hr />
              <h3>Información de las Mamografías</h3>
              <p>
                Para este punto realizamos un api, que al consumir el endpoint
                regresaba toda la información ordenada de la respectiva llave de
                la mamografía que fuera propociodana.
              </p>
              <div className="text-center">
                <img src={mammogramInfo} />
              </div>
              <h3>Procesamiento de Mamografías</h3>
              <h4>Librerías</h4>
              <p>
                Para el presente trabajo hicimos uso de las siguientes
                librerías:
              </p>
              <ul>
                <li>
                  <strong>os:</strong> Librería necesaria para poder acceder a
                  los archivos del sistema
                </li>
                <li>
                  <strong>opencv:</strong> Librería principal para el trabajo,
                  necesaria para el procesamiento de las imágenes
                </li>
                <li>
                  <strong>numpy:</strong> Librería necesaria para el manejo de
                  listas, para este trabajo se utilizó principalmente en el
                  manejo de la lista de imágenes y creación de máscaras de
                  píxeles
                </li>
                <li>
                  <strong>matplotlib:</strong> Librería utilizada principalmente
                  en la etapa de pruebas, utilizada para visualizar las imágenes
                </li>
                <li>
                  <strong>multiprocessing:</strong> Librería necesaria para
                  poder hacer uso de todos los núcleos del equipo
                </li>
              </ul>
              <h4>Preparación de imágenes</h4>
              <ul>
                <li>
                  Obtenemos todos los píxeles de la imagen mayores a un valor
                  definido.
                </li>
                <li>
                  Creamos una copia de la imagen e igualamos a 0 los píxeles
                  obtenidos
                </li>
                <li>
                  Se binariza la imagen y se aplica una transformación de
                  erosión para reducir el ruido y eliminar fragmentos pequeños
                </li>
              </ul>
              <img src={mammogram1} />
              <h5>
                <p>Código y resultado</p>
              </h5>
              <p>
                Obtenemos todos los pixeles de la imagen que sean mayores a 150
              </p>
              <CodeBlock code="high_pixel = image > 150" />
              <p>Seteamos en 0 los píxeles obtenidos</p>
              <CodeBlock code="copy[high_pixel] = 0" />
              <p>
                Convertimos la imagen a escala de grises y aplicamos un filtro
                para suavizar los bordes
              </p>
              <CodeBlock
                code="
gray_image = cv2.cvtColor(copy, cv2.COLOR_BGR2GRAY)
blur_image = cv2.GaussianBlur(gray_image, (5, 5), 0)
              "
              />
              <p>inarizamos la imagen</p>
              <CodeBlock code="_, binary_image = cv2.threshold(blur_image, 70, 255, cv2.THRESH_BINARY)" />
              <p>
                Aplicamos una transformación de erosión a la imagen para reducir
                el ruido
              </p>
              <CodeBlock
                code="
erode_kernel = np.ones((30,30),np.uint8)
erode_image = cv2.erode(binary_image, erode_kernel, iterations = 1)
return binary_image, erode_image
              "
              />
              <img src={mammogram2} />
            </div>
          </Row>
        </Container>
      </Fragment>
    </Container>
  </Layout>
)

export default SecondPage
