import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogheader"
import CodeBlock from "../components/codeblock"
import headerImg from "../images/portfolio-3.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Audio Processing" />
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
                procesamiento de archivos de audio para poder realizar las
                siguientes tareas:
              </p>
              <ul>
                <li>Dividir el audio en 10 partes iguales.</li>
                <li>Reacomodar 2 partes cualesquiera.</li>
                <li>Cambiar la velocidad de reproducción.</li>
                <li>
                  Sustituir 2 partes cualesquiera por otro archivo de audio.
                </li>
                <li>
                  Implementar una aplicación que muestre en tiempo real la
                  transcripción del audio y su traducción a otro idioma.
                </li>
              </ul>
              <h3>¿Qué es un archivo de audio?</h3>
              <p>
                El sonido es una perturbación (señal analógica) que viaja a
                través del aire, denominada onda sonora, para que pueda ser
                entendida por un sistema informático debe ser convertida a una
                señal digital.
              </p>
              <p>
                El audio digital y su formato se definen por dos
                características: tamaño de fichero y calidad.
              </p>
              <h5>Frecuencia</h5>
              <p>
                Es el número de vibraciones por segundo que da origen al sonido
                análogico. El rango de frecuencias da lugar a un espectro que se
                mide en Hertz (Hz).
              </p>
              <h5>Tasa de muestreo (Sample rate)</h5>
              <p>
                La señal analógica se muestrea a ceros y unos. La tasa de
                muestreo define cada cuanto tiempo se tomará la señal analógica
                para convertirla a audio digital. Cuanto mayor sea la tasa de
                muestreo más calidad tendrá el audio.
              </p>
              <h5>Resolución (bit resolución)</h5>
              <p>
                Indica el número de bits para almacenar la muestra de la señal.
                El audio tendrá más calidad cuanto mayor sea la resolución.
              </p>
              <h5>Velocidad de transmisión (Bitrate)</h5>
              <p>
                Indican la cantidad de espacio físico en disco de un segundo de
                duración de ese audio.
              </p>
              <h5>CBR / VBR</h5>
              <p>
                CBR indica que el bitrate se mantiene constante, VBR significa
                que el bitrate es variable{" "}
              </p>
              <h5>Códec</h5>
              <p>
                Es un algoritmo que reduce el número de bits del audio.
                Garantizando la máxima calidad de audio con un peso de fichero
                pequeño.
              </p>
              <h5>Decibelio</h5>
              <p>Es el volumen o intensidad de ruido.</p>
              <h3>Formatos de archivos de audio</h3>
              <h5>WAV</h5>
              <p>
                Desarrollado por Microsoft Permite compresión de audio El tamaño
                de los ficheros suele ser de gran peso
              </p>
              <h5>MP3</h5>
              <p>
                Fue creado en el Instituto Fraunhofer Es ideal para uso web por
                su grado de compresión y calidad Tiene pérdida de calidad mínima
                Es un estándar en todos los reproductores de audio
              </p>
              <h5>OGG</h5>
              <p>
                Desarrollado por la fundación Xiph.org Es de código abierto
                Compresión similar al formato MP3 Puede contener audio y vídeo
              </p>
              <h5>MIDI</h5>
              <p>
                Es una interfaz para instrumentos digitales, no proporciona una
                digitalización del sonido Almacena las secuencias de los
                sintetizadores Es de tamaño pequeño ya que almacena información
                de las partituras Interpretado por algunos reproductores
              </p>
              <h4>Librerias utilizadas</h4>
              <ul>
                <li>
                  <strong>glob:</strong> Para listar/filtrar archivos por tipo
                </li>
                <li>
                  <strong>pydub:</strong> Manipular archivos de audios usando
                  principios de programacion funcional (inmutabilidad)
                </li>
                <li>
                  <strong>IPython.display:</strong> Reproducir archivos de audio
                </li>
              </ul>
              <h3>Preparamos el audio con el que trabajaremos</h3>
              <CodeBlock
                code='
song = AudioSegment.from_wav("audio.wav")
fifty_seconds = 50 * 1000
first_50_seconds = song[:fifty_seconds]
first_50_seconds.export("audio_50.wav", format="wav")
              '
              />
              <h3>
                Dividir el audio en 10 partes de igual tamaño con respecto al
                tiempo
              </h3>
              <p>
                Tomamos la decima parte del audio total e iteramos para separar
                en 10 partes iguales.
              </p>
              <CodeBlock
                code='
audio50 = AudioSegment.from_wav("audio_50.wav")
part = 0
audio_time = len(audio50) // 10
for i in range(10):
song = audio50[part:part + audio_time]
song.export("splittedaudio/part" + str(i) + ".wav", format="wav")
part = part + audio_time
              '
              />
              <h3>Tomar dos partes cualesquiera y colocarlas en otro sitio</h3>
              <p>
                Simplemente importamos todos los audios que dividimos en el
                punto anterior y gracias a la libreria pydub podemos
                cocatenarlas como si se tratara de strings
              </p>
              <CodeBlock
                code='
audio_files = glob.glob("splittedaudio/*.wav")
for i in range(len(audio_files)):
audio_arr.append(AudioSegment.from_wav(audio_files[i]))
new_audio = audio_arr[1] + audio_arr [0] + audio_arr[3] + audio_arr[2] + audio_arr[4] + audio_arr[5] + audio_arr[6] + audio_arr[7] + audio_arr[8] + audio_arr[9]
              '
              />
              <h3>
                Tomar dos partes cualesquiera distintas a las anteriores.
                Cambiar su velocidad de reproducción (una más lenta y la otra
                más rápida que la original).
              </h3>
              <CodeBlock
                code='
def speed_change(sound, speed=1.0):
# Sobreescribir manualmente el frame_rate. Esto le dice a la computadora cuántos muestras reproducir por segundo
sound_with_altered_frame_rate = sound._spawn(sound.raw_data, overrides={
"frame_rate": int(sound.frame_rate * speed)
})
# convertir el sonido con una velocidad de fotogramas modificada a una velocidad de fotogramas estándar 
#para que los programas de reproducción normales funcionen correctamente. 
#A menudo solo saben reproducir audio a una velocidad de cuadro estándar (como 44.1k)
return sound_with_altered_frame_rate.set_frame_rate(sound.frame_rate)
'
              />
              <h3>
                Tomar dos partes cualesquiera distintas a las trabajas
                anteriormente. Eliminarlas y grabar nuestras voces para
                insertarlas en dichos espacios.
              </h3>
              <CodeBlock
                code='
recorded1 = AudioSegment.from_wav("recorded1.wav")
recorded2 = AudioSegment.from_wav("recorded2.wav")
new_audio_final = audio_arr[1] + audio_arr [0] + audio_arr[3] + audio_arr[2] + part4_slow + recorded1 + part6_fast + audio_arr[7] + audio_arr[8] + recorded2
new_audio_final.export("new_audio_final.wav", format="wav")

              '
              />
            </div>
          </Row>
        </Container>
      </Fragment>
    </Container>
  </Layout>
)

export default SecondPage
