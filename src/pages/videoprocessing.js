import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogheader"
import CodeBlock from "../components/codeblock"
import headerImg from "../images/videop.png"

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
                procesamiento de archivos de video para poder realizar las
                siguientes tareas:
              </p>
              <ul>
                <li>
                  Construir un video publicitario basado en imágenes tomadas de
                  forma aleatoria{" "}
                </li>
                <li>Hacer el seguimiento de una pelota</li>
                <li>Cambiar el fondo de un vídeo por lugares de Europa</li>
              </ul>
              <h4>Librerías utilizadas</h4>
              <ul>
                <li>
                  <strong>glob:</strong> Para listar/filtrar archivos por tipo
                </li>
                <li>
                  <strong>opencv:</strong> Librería principal para el trabajo,
                  necesaria para el procesamiento de las imágenes
                </li>
                <li>
                  <strong>numpy:</strong> Librería necesaria para el manejo de
                  listas, para este trabajo se utilizó principalmente en el
                  manejo de la lista de imágenes y creación de máscaras de
                  píxeles.
                </li>{" "}
                <li>
                  <strong>matplotlib:</strong> Librería utilizada principalmente
                  en la etapa de pruebas, utilizada para visualizar las
                  imágenes.
                </li>
              </ul>
              <h3>Vídeo promocional</h3>
              <CodeBlock
                code="
cap = cv2.VideoCapture('Promotional1.mp4')
i=0

while(cap.isOpened()):
ret, frame = cap.read()
if ret == False:
break
cv2.imwrite('images_promotional_1/promotional_1_'+str(i)+'.jpg', frame)

i+=1
 
cap.release()
cv2.destroyAllWindows()
              "
              />
              <p>
                Seguidamente tomamos las imagenes que selecionamos para formar
                el video publicitario
              </p>
              <CodeBlock
                code="
img_array = []
for filename in glob.glob('Promotional_images/*.jpg'):
img = cv2.imread(filename)
height, width, layers = img.shape
size = (width,height)
img_array.append(img)
 
 
out = cv2.VideoWriter('project.avi',cv2.VideoWriter_fourcc(*'DIVX'), 15, size)
 
for i in range(len(img_array)):
out.write(img_array[i])
out.release()
              "
              />
              <h3>Seguimiento de pelota</h3>
              <ul>
                <li>Se definen los rangos del color del objeto a seguir</li>
                <li>
                  Se convierte la imagen a un modelo HSV (Hue, Saturation,
                  Value)
                </li>
                <li>
                  Se extrae la máscara basada en el modelo HSV y los rangos
                  definidos
                </li>
              </ul>
              <CodeBlock
                code="
def findBall(frame, lower_range, upper_range):
lower_color = np.array(lower_range)
upper_color = np.array(upper_range)
hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
mask = cv2.inRange(hsv, lower_range, upper_range)

return mask
              "
              />
              <ul>
                <li>Encontramos los contornos de la máscara generada</li>
                <li>
                  Obtenemos el contorno con mayor área y obtenemos sus momentos
                </li>
                <li>Calculamos el centro del contorno</li>
                <li>Pintamos un circulo</li>
              </ul>
              <h3>Cambio de fondo</h3>
              <ul>
                <li>Obtenemos el primer frame del vídeo</li>
                <li>
                  Aplicamos escala de grises y transformaciones morfológicas
                </li>
              </ul>
              <CodeBlock
                code="
cap = cv2.VideoCapture('remove_bg01.mp4')
bg_rome = cv2.imread('roma.jpg')
                
bg_rome = cv2.resize(bg_rome,(960, 540), interpolation=cv2.INTER_AREA)
                
kernel = np.ones((5, 5), np.uint8)
_, first_frame = cap.read()
                
f_gray = cv2.cvtColor(first_frame, cv2.COLOR_BGR2GRAY)
f_gray = cv2.GaussianBlur(f_gray, (5, 5), 0)
f_gray = cv2.dilate(f_gray, kernel)
              "
              />
              <ul>
                <li>
                  Aplicamos el mismo proceso para cada frame del vídeo dentro de
                  un ciclo
                </li>
                <li>
                  Tomando como referencia el primer frame se calcula la
                  diferencia absoluta de cada frame
                </li>
              </ul>
              <CodeBlock
                code="
while (cap.isOpened()):
ret, frame = cap.read()

gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
gray = cv2.GaussianBlur(gray, (5, 5), 0)
gray = cv2.dilate(gray, kernel)

diff = cv2.absdiff(f_gray, gray)
              "
              />
              <ul>
                <li>Binarizamos la imagen obtenida y sacamos su negativo</li>
                <li>
                  El negativo se aplica como máscara a la imagen elegida como
                  fondo
                </li>
              </ul>
              <CodeBlock
                code="
_, diff_norm = cv2.threshold(diff, 50, 255, cv2.THRESH_BINARY)
_, diff_inv = cv2.threshold(diff, 50, 255, cv2.THRESH_BINARY_INV)

diff_resize = cv2.resize(diff_inv, None, fx=0.50, fy=0.50, interpolation=cv2.INTER_AREA)
bg_final = cv2.bitwise_and(bg_rome, bg_rome, mask = diff_resize)
              "
              />
              <ul>
                <li>
                  Se aplica una combinación de imagénes tomando la imagen
                  binzarizada como máscara en cada frame del vídeo
                </li>
                <li>
                  Finalmente se suma la imagen del fondo con cada frame del
                  vídeo
                </li>
              </ul>
              <CodeBlock
                code="
final_image = cv2.bitwise_and(frame, frame, mask = diff_norm)
image = cv2.resize(final_image, None, fx=0.50, fy=0.50, interpolation=cv2.INTER_AREA)


img_sum = cv2.add(bg_final, image)
              "
              />
            </div>
          </Row>
        </Container>
      </Fragment>
    </Container>
  </Layout>
)

export default SecondPage
