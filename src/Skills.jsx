import React from "react";

function SkillEffect() {
  const distancia_skills =
    window.innerHeight -
    document.getElementById("skills").getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    const habilidades = document.getElementsByClassName("progreso");
    const clases = [
      "javascript",
      "htmlcss",
      "photoshop",
      "wordpress",
      "drupal",
      "comunicacion",
      "trabajo",
      "creatividad",
      "dedicacion",
      "proyect",
    ];
    for (let i = 0; i < habilidades.length; i++) {
      habilidades[i].classList.add(clases[i]);
    }
  }
}

window.onscroll = function () {
  SkillEffect();
};

export function SkillsSeccion() {
  return (
    <section className="skills" id="skills">
      <div className="contenido-seccion">
        <h2>Skills</h2>
        <div className="fila">
          {/* TECNICAL SKILL */}
          <div className="col">
            <h3>Technical Skills</h3>
            <div className="skill">
              <span>Javascript / TypeScript</span>
              <div className="barra-skill">
                <div className="progreso"></div>
              </div>
            </div>
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="barra-skill">
                <div className="progreso"></div>
              </div>
            </div>
            <div className="skill">
              <span>React , Next </span>
              <div className="barra-skill">
                <div className="progreso"></div>
              </div>
            </div>
            <div className="skill">
              <span>Python, SQL, Base d datos</span>
              <div className="barra-skill">
                <div className="progreso"></div>
              </div>
            </div>
            <div className="skill">
              <span>Tailwind</span>
              <div className="barra-skill">
                <div className="progreso"></div>
              </div>
            </div>
          </div>

          {/* PROFESIONAL SKILL */}

          <div className="col">
            <h3>Profesional Skills</h3>
            <div className="skill">
              <span>Comunicación</span>
              <div className="barra-skill">
                <div className="progreso"></div>
              </div>
            </div>
            <div className="skill">
              <span>Trabajo en Equipo</span>
              <div className="barra-skill">
                <div className="progreso"></div>
              </div>
            </div>
            <div className="skill">
              <span>Creatividad</span>
              <div className="barra-skill">
                <div className="progreso"></div>
              </div>
            </div>
            <div className="skill">
              <span>Dedicación</span>
              <div className="barra-skill">
                <div className="progreso"></div>
              </div>
            </div>
            <div className="skill">
              <span>Solucion de problemas</span>
              <div className="barra-skill">
                <div className="progreso"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
