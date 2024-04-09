import React from "react";
import Cardimg from'../src/assets/foto-card.jpg'

export const Projects = () =>{
      return (
        <section id="proyecto-personal" className="proyecto-personal">
          <div className="contenido-seccion">
            <h2>Projects Personales</h2>
            <div className="galeria">
              <div className="proyecto">
                <img src={Cardimg} alt=""/>
                <div className="overlay">
                  <h3>Proyecto Personal</h3>
                  <p>Desarrollo web</p>
                </div>
              </div>
              <div className="proyecto">
              <img src={Cardimg} alt=""/>
                <div className="overlay">
                  <h3>Proyecto Personal</h3>
                  <p>Desarrollo web</p>
                </div>
              </div>
              <div className="proyecto">
              <img src={Cardimg} alt=""/>
                <div className="overlay">
                  <h3>Proyecto Personal</h3>
                  <p>Desarrollo web</p>
                </div>
              </div>
              <div className="proyecto">
              <img src={Cardimg} alt=""/>
                <div className="overlay">
                  <h3>Proyecto Personal</h3>
                  <p>Desarrollo web</p>
                </div>
              </div>
              <div className="proyecto">
              <img src={Cardimg} alt=""/>
                <div className="overlay">
                  <h3>Proyecto Personal</h3>
                  <p>Desarrollo web</p>
                </div>
              </div>
              <div className="proyecto">
              <img src={Cardimg} alt=""/>
                <div className="overlay">
                  <h3>Proyecto Personal</h3>
                  <p>Desarrollo web</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }