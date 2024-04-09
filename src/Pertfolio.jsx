import { Licenses } from './Licenses';
import { Projects } from './Projects';
import { SkillsSeccion } from './Skills';
import './style.css';

const Pertfolio = () =>{
  return(
<body>
  {/*MENU ENCABEZADO*/}

     <div className="contenedor-header">
        <header>
            <div className="logo">
                <a href="#">Lucy</a>
            </div>
        </header>
    </div>

   {/* SECCION INCIO */}
    <section id="home" className="home">
        <div className="contenido-banner">
            <div className="contenedor-img">
                <img src="" alt=""/>
            </div>
            <h1>Lucia Cristaldo</h1>
            <h2>Desarrolladora full-stack Trainee - JR</h2>
        </div>
    </section>

    {/* SECCION About me*/}
    <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
            <h2>About me</h2>
            <p><span>Soy Lucia Cristaldo </span>Estudiante en el area del Desarrollo web. 
                utilizando tecnologías como React, Next.js, JavaScript, TypeScript, Tailwind CSS, HTML y CSS y adentrandome en el backend.
                Me considero una persona responsable y ordenada.
                Buscando mi primera experiencia laboral como full-stack Trainee - JR</p>

            <div className="fila">

              {/* DATOS PERSONALES */}
                <div className="col">
                    <h3>Datos Personales</h3>
                    <ul>
                        <li>
                            <strong>Nacimiento</strong>
                            15-02-2005
                        </li>
                        <li>
                            <strong>Teléfono</strong>
                            376 - 5147458 
                        </li>
                        <li>
                            <strong>Email</strong>
                            lucia.milagros.cristaldo@gmail.com
                        </li>
                        <li>
                            <strong>Dirección</strong>
                            Posadas - Misiones, Argentina
                        </li>
                    </ul>
                </div>

                {/* INTERESES */}
                <div className="col">
                    <h3>Intereses</h3>
                    <div className="contenedor-intereses">
                        <div className="interes">
                            <i className="fa-solid fa-gamepad"></i>
                            <span>JUEGOS</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-headphones"></i>
                            <span>MUSICA</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-person-hiking"></i>
                            <span>DEPORTE</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-book"></i>
                            <span>LIBROS</span>
                        </div>
                    </div>
                </div>
            </div>
            <button>
                Descargar CV <i className="fa-solid fa-download"></i>
                <span className="overlay"></span>
            </button>
        </div>
    </section>

<SkillsSeccion/>

<Licenses/>

<Projects/>

<script src="script.js"></script>

</body>
  )
};
export default Pertfolio;