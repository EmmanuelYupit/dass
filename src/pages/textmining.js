import React, { Fragment } from "react"
import { Container, Row, Col, Table } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogheader"
import CodeBlock from "../components/codeblock"
import mapaMexico from "../images/mapa-mexico.png"
import mapaQRoo from "../images/qroo.png"

const libraries = [
  {
    name: "Rgdal",
    description:
      "Permite tener acceso a los enlaces a GDAL (Geospatial Data Abstraction Library), para este proyecto se usa  para leer un archivo .shp que nos permitirá dibujar el mapa de Quintana Roo.",
  },
  {
    name: "Spdplyr",
    description:
      "Nos permite manipular data frames y hacer operaciones con ellos.",
  },
  {
    name: "Readxl",
    description: "Nos permite manipular documentos excel",
  },
  {
    name: "Tmap",
    description: "Esta librería nos permite mostrar los mapas",
  },
]

const mostUsedWords = [
  "actividad",
  "asignatura",
  "dato",
  "docente",
  "edicion",
  "informacion",
  "ingenieria",
  "objetivo",
  "problema",
  "sistema",
]
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
            <Col md="12" className="blog-main">
              <h3 className="pb-3 mb-4 font-italic border-bottom text-center">
                Minería de Textos
              </h3>

              <div className="blog-post">
                {/* <h2 class="blog-post-title">Sample blog post</h2> */}
                <p class="blog-post-meta">Junio 3, 2019</p>
                <p>
                  En el presente artículo presentaremos la serie de pasos que
                  seguimos para poder aplicar minería de textos en unos archivos
                  PDF correspondientes al plan edicativo de la carrera de IDeIO
                  de la Universidad del Caribe.
                </p>
                <hr />
                <h3>Extracción</h3>
                <p>
                  Para este primer paso utilizamos la función <i>list.files</i>{" "}
                  de R para listar todos los archivos con extensión pdf dentro
                  de las carpetas.
                </p>
                <p>Le indicamos la carpeta en la que queremos que busque.</p>
                <CodeBlock code='path &lt;- "Primer Ciclo"' />
                <p>
                  Guardamos en una variable el listado de nombres de los
                  archivos con extensión pdf, para ello utilizamos el parámetro
                  pattern
                </p>
                <CodeBlock
                  code='files &lt;- list.files(path = paste0("./Temarios IDeIO
                    finales/", path) , pattern = "pdf$")'
                />
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
                <CodeBlock
                  code="corp &lt;- VCorpus(URISource(files), readerControl =
                    list(reader = readPDF))"
                />
                <p>
                  Hicimos uso de la función <b>VCorpus</b> de la librería{" "}
                  <i>tm</i> para generar el corpus con los archivos. Utilizamos
                  la opción readPDF como parámetro para poder leer los archivos
                  pdf.
                </p>
                <CodeBlock
                  code="corp &lt;- VCorpus(URISource(files), readerControl =
                    list(reader = readPDF))"
                />
                <code>
                  &lt;&lt;VCorpus&gt;&gt; Metadata: corpus specific: 0, document
                  level (indexed): 0 Content: documents: 16
                </code>
                <br />
                <h3>Limpieza</h3>
                <p>Funcion para la limpieza de datos:</p>
                <p>
                  Utilizamos la función tm_map para mapear el corpus y remover
                  las stopwords en español y en inglés dado que tratamos con
                  archivos en ambos idiomas.
                </p>
                <CodeBlock code='tm_map(corp, removeWords, c(stopwords("es"), stopwords("en")))' />
                <p>
                  Al momento de construir la matriz documento termino, le
                  pasamos a la funcion como parametro de control una lista de
                  funciones para la limpieza de datos, tales como:
                </p>
                <ul>
                  <li>
                    <i>removePunctuation:</i> Eliminar los signos de puntuación
                    de un documento de texto.
                  </li>
                  <li>
                    <i>tolower:</i> Convierte el texto a minúsculas.
                  </li>
                  <li>
                    <i>stemming:</i> Reduce las palabras inflexionadas (o
                    algunas veces derivadas) a su forma de raíz.
                  </li>
                  <li>
                    <i>removeNumbers:</i> Elimina los numeros de un documentos
                    de texto.
                  </li>
                  <li>
                    <i>bounds:</i> Los términos que aparecen en menos documentos
                    que los límites del límite inferior o en más documentos que
                    los límites del límite superior se descartan.
                  </li>
                </ul>
                <h5>Palabras mas buscadas por ciclo</h5>
                <p>Funcion countWords:</p>
                <p>
                  <b>Input</b>
                </p>
                <ul>
                  <li>
                    <i>path:</i> Indica la ruta (ciclo) del cual quiere que
                    cuente las palabras.
                  </li>
                </ul>
                <p>
                  <b>Output:</b>
                </p>
                <ul>
                  <li>Total de numero de palabras por ciclo.</li>
                </ul>
              </div>
              <p>Ejemplo:</p>
              <CodeBlock code=' path <- "Primer Ciclo"' />
              <CodeBlock code=" countWords(path)" />
              <code>7330</code>
              <h5>Palabras mas usadas por ciclo</h5>
              <p>Funcion tenMostUsedWords:</p>
              <CodeBlock code=' path <- "Primer Ciclo"' />
              <CodeBlock code=" tenMostUsedWords(path)" />
              <pre>
                <Table striped bordered size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Termino</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mostUsedWords.map((term, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{term}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </pre>
              <h5>Palabras unicas por ciclo</h5>
              <p>Funcion uniqueWords:</p>
              <h3>Mapa de Quintana Roo</h3>
              <p>Librerias necesarias:</p>
              <ul>
                {libraries.map(({ name, description }) => (
                  <li>
                    {name}:{description}
                  </li>
                ))}
              </ul>
              <p>Cargamos librerías necesarias para trabajar</p>
              <CodeBlock code="packages <- c('rgdal', 'spdplyr', 'readxl', 'tmap')" />
              <CodeBlock code="lapply(packages, library, character.only=T)" />
              <p>
                Descargamos el archivo necesario para mostrar el mapa de
                Quintana Roo (Versión 2012)
              </p>
              <CodeBlock code='url<-"http://www.conabio.gob.mx/informacion/gis/maps/geo/muni_2012gw.zip"' />
              <CodeBlock
                code='
if(!file.exists("muni_2012gw.zip")){
download.file(url, "muni_2012gw.zip")
}
if(!file.exists("Muni_2012gw.shp")){
unzip("muni_2012gw.zip")
}
                '
              />
              <p>Leemos el conjunto de datos</p>
              <CodeBlock code='mx_map <- readOGR("Muni_2012gw.shp", layer="Muni_2012gw", verbose = FALSE)' />
              <p>Ploteamos el mapa</p>
              <CodeBlock code="plot(mx_map)" />
              <img width="50%" src={mapaMexico} />
              <p>
                Aplicamos filtros para poder tomar unicamente el mapa de
                Quintana Roo
              </p>
              <CodeBlock
                code="
filter(mx_map@data, CVE_ENT == 23)
qroo_mun <- filter(mx_map, CVE_ENT == 23)
qroo_mun@data    
              "
              />
              <p>
                Asignamos colores para diferenciar los municipios y ploteamos el
                mapa
              </p>
              <CodeBlock
                code="
colors=rainbow(length(qroo_mun$NOM_MUN))
plot(qroo_mun, col = colors)
text(coordinates(qroo_mun), labels = qroo_mun$NOM_MUN)              
              "
              />
              <img src={mapaQRoo} width="50%" />
              <p>
                Tomamos las variables con las que queremos trabajar, en este
                caso <strong>conyugal</strong>, <strong>censo familiar</strong>{" "}
                y <strong>salud</strong>
              </p>
              <CodeBlock
                code='
filenames_list <- list.files(path = "municipios", full.names = TRUE)

data_conyugal <- lapply(filenames_list, function(filename){
print(paste("Merging", filename, sep=" "))
read_excel(filename, sheet = 9)
})

data_censal <- lapply(filenames_list, function(filename){
print(paste("Merging", filename, sep=" "))
read_excel(filename, sheet = 11)
})

data_salud <- lapply(filenames_list, function(filename){
print(paste("Merging", filename, sep=" "))
read_excel(filename, sheet = 8)
})              
              '
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    </Container>
  </Layout>
)

export default TextMining
