import './App.css';
import { useState } from 'react';
import Logo from "./assets/logo.jpg"
import video1 from "./assets/video1.jpg"
import video2 from "./assets/video2.jpg"
import No from "./assets/no.jpg"
import img1 from "./assets/img-1.jpg"
import img2 from "./assets/img-2.jpg"
import img3 from "./assets/img-3.jpg"
import img4 from "./assets/img-4.jpg"
import velez from "./assets/velez.png"
import velez1 from "./assets/velez1.png"
function App() {
  const [vid1, setVid1] = useState(video1)
  const [vid2, setVid2] = useState(video2)
  const [vele, setVele] = useState(velez1)
  return (
    <div className="App">
      <div>
        <div className='logo'>
          <img src={Logo} alt=''></img>
        </div>
        <h4 className='text-1 mt-4'>En Vélez tenemos certeza sobre la calidad de nuestros productos, por esto si has decidido dejar de usar tu bolso Archeology y quieres hacer parte del cambio, te invitamos a traerlo a una de nuestras tiendas donde expertas artesanas se encargarán de restaurarlo y darle una segunda vida.
        </h4>
        <div className='box-1'>
          <h3 className='text-2'>
            En el siguiente video te mostramos cómo y quiénes están detrás de este proceso:
          </h3>
          <img className='m-2' role='button' onClick={(e) => {
            e.preventDefault()
            if (vid1 !== No) {
              setVid1(No)
            } else {
              setVid1(video1)
            }
          }} src={vid1} alt=''></img>
        </div>
      </div>
      <div className='section-2'>
        <h3 className='m-3'>Comprando uno de nuestros artículos de segunda mano</h3>
        <div class="box d-block d-xl-flex">
          <div className='d-block d-sm-flex justify-content-center'>
            
            <div class="contain">
              <div>
                <img src={img2} alt=''></img>
              </div>
              <div className='subtext'>
                Apoyas a un grupo de mujeres vulnerables a generar ingresos y a potenciar sus habilidades a través del trabajo artesanal.
              </div>
            </div>
            <div class="contain">
              <div>
                <img src={img1} alt=''></img>
              </div>
              <div className='subtext'>
                Haces parte de un sistema de consumo más circular, al reutilizar un producto en lugar de desecharlo.
              </div>
            </div>
          </div>
          <div className='d-block d-sm-flex justify-content-center'>
            <div class="contain">
              <div>
                <img src={img3} alt=''></img>

              </div>
              <div className='subtext'>
                Ayudas a disminuir impactos ambientales como huella hídrica, huella de carbono y evitarás la disposición en vertederos.
              </div>
            </div>
            <div class="contain">
              <div>
                <img src={img4} alt=''></img>

              </div>

              <div className='subtext'>
                Estarás adquiriendo una pieza única, de alta calidad, con el mejor diseño segun nuestros estandares.
              </div>
            </div>
          </div>


        </div>
      </div>
      <h3 className='text-2 m-3 mt-4'>¿Quieres conocer algunas de las historias detrás de los bolsos que recibimos? Mira el siguiente video:</h3>
      <img className='m-3 mb-4' role='button' onClick={(e) => {
        e.preventDefault()
        if (vid2 !== No) {
          setVid2(No)
        } else {
          setVid2(video2)
        }
      }} src={vid2} alt=''></img>
      <div className='footer'>
        <div className='content'>
          <a className='redes' href='https://www.facebook.com/velezartisan' rel='noreferrer' target='_blank'><i role='button' className="bi bi-facebook"></i></a>
          <a className='redes' href='https://www.instagram.com/velezartisan/' rel='noreferrer' target='_blank'><i role='button' className="bi bi-instagram"></i></a>
          <a className='redes' href='https://www.pinterest.es/velezartisan/' rel='noreferrer' target='_blank'><i role='button' className="bi bi-pinterest"></i></a>
          <a className='velez' href='https://www.velez.com.co/' rel='noreferrer' target='_blank'>
            <img role='button' className='logo-velez' onMouseEnter={(e) => {
              e.preventDefault()
              setVele(velez)
            }} onMouseLeave={(e) => {
              e.preventDefault()
              setVele(velez1)
            }} src={vele} alt=''></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
