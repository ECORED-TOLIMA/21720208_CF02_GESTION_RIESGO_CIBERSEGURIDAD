<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Enfoques profesionales en la ciberseguridad
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
    
    p.mb-5 La ciberseguridad como carrera ha experimentado una transformación profunda a lo largo de las décadas recientes, impulsada por la evolución tecnológica y la sofisticación de las amenazas digitales. Por lo anterior, se relaciona lo más destacado en las siguientes etapas cronológicas, las cuales destacan su proceso evolutivo: 
    .tarjeta.tarjeta--gris.fondo2.p-4.mb-5
      LineaTiempoC.color-acento-contenido
        .row(titulo="1980")
          .col-lg-6.order-2.order-lg-1
            h4 Década de 1980
            p Durante los años 80, los enfoques profesionales en ciberseguridad eran muy limitados y se centraban en roles técnicos básicos. Este periodo estuvo marcado por la aparición de los primeros virus informáticos y el surgimiento de los primeros antivirus, lo que sentó las bases iniciales de la disciplina. La mayoría de los especialistas provenían de áreas como la informática o las telecomunicaciones y actuaban de forma reactiva frente a los incidentes de seguridad. Los perfiles eran generalistas, principalmente administradores de sistemas, técnicos en redes y desarrolladores que adquirían conocimientos en seguridad de manera autodidacta.
          .col-lg-6.col-10.mb-4.mb-md-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img2.png', alt='Texto que describa la imagen')
        .row(titulo="1990")
          .col-lg-6.order-2.order-lg-1
            h4 Década de 1990
            p Con la masificación del internet, el crecimiento del comercio electrónico y la acelerada digitalización empresarial durante los años 90, surgieron nuevas necesidades en materia de protección de datos y sistemas. Esto impulsó la creación de los primeros programas académicos y certificaciones específicas en ciberseguridad, como CISSP (1994). Aun así, la carrera no era ampliamente conocida y la demanda laboral, aunque en aumento, no alcanzaba la magnitud que tiene en la actualidad.
          .col-lg-6.col-10.mb-4.mb-md-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img3.png', alt='Texto que describa la imagen')
        .row(titulo="2000")
          .col-lg-6.order-2.order-lg-1
            h4 Década de 2000
            p Durante la primera década de los 2000, la expansión del internet, la consolidación del comercio electrónico y el crecimiento de las amenazas cibernéticas, impulsaron una mayor especialización en ciberseguridad. Surgieron certificaciones más avanzadas, como CEH (2003) y comenzaron a aparecer carreras universitarias y programas de posgrado dedicados exclusivamente a la seguridad informática. La demanda laboral aumentó considerablemente y los perfiles profesionales evolucionaron desde roles generalistas hacia funciones más específicas, como analistas de seguridad, especialistas en pruebas de penetración y administradores de seguridad de redes.
          .col-lg-6.col-10.mb-4.mb-md-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img4.png', alt='Texto que describa la imagen')
        .row(titulo="2025")
          .col-lg-6.order-2.order-lg-1
            h4 Actualidad (2025)
            p La ciberseguridad es reconocida como una de las carreras más demandadas y estratégicas a nivel global. El mercado laboral enfrenta una enorme brecha de talento: se estima que actualmente se tiene hasta 3.5 millones de vacantes sin cubrir. Los perfiles profesionales se han diversificado enormemente, abarcando desde técnicos especializados (analistas, ingenieros, pentesters, analistas forenses) hasta estrategas (CISO, consultores, auditores, responsables de cumplimiento normativo).
          .col-lg-6.col-10.mb-4.mb-md-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img5.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img6.svg', alt='Imagen decorativa')
      .col-lg-8
        p Además, la formación es mucho más accesible y especializada: existen grados universitarios, másteres, programas de formación profesional y una vasta oferta de certificaciones reconocidas mundialmente. Se requieren conocimientos no solo técnicos, sino también en gestión de riesgos, normativas internacionales, derecho digital e incluso comunicación y liderazgo.
        .cajon.color-secundario.p-4
          p.mb-0 A nivel de oportunidades, las salidas profesionales se multiplican en todos los sectores: banca, salud, gobierno, industria, tecnología, etc. El trabajo remoto, la movilidad internacional y los salarios altos son características habituales. Existen altísimas tasas de empleabilidad, lo que convierte a la ciberseguridad en una carrera con futuro seguro y crecimiento sostenido.
    p.mb-4 #[b De cara al futuro], la ciberseguridad se proyecta como una profesión fundamental en la sociedad digital. Las tendencias apuntan hacia: 
    SlyderF.color-acento-botones.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="flip-up")
      .tarjeta.tarjeta--BG02.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img7.svg' alt='AvatarTop')
        h5.text-center Automatización e IA
        p.text-center.mb-0 Mayor automatización y uso de inteligencia artificial tanto en ataques como en defensa.
      .tarjeta.tarjeta--BG02.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img8.svg' alt='AvatarTop')
        h5.text-center Crecimiento de roles híbridos
        p.text-center.mb-0  Expertos en seguridad con foco en IA, #[i big data], protección de infraestructuras críticas, seguridad de #[i IoT], #[i cloud], #[i blockchain], etc. 
      .tarjeta.tarjeta--BG02.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img9.svg' alt='AvatarTop')
        h5.text-center Necesidad de habilidades blandas
        p.text-center.mb-0  Liderazgo, toma de decisiones, resiliencia, pensamiento crítico y capacidad de adaptación constante.
      .tarjeta.tarjeta--BG02.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
        h5.text-center Enfoque en formación continua
        p.text-center.mb-0  Los profesionales deberán actualizarse permanentemente ante la rápida evolución tecnológica y regulatoria.
      .tarjeta.tarjeta--BG02.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
        h5.text-center Relevancia estratégica
        p.text-center.mb-0 Los expertos en ciberseguridad serán fundamentales no solo en la parte técnica, sino como agentes clave en la toma de decisiones empresariales, en la protección de la democracia y en la economía digital.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 En conclusión, la ciberseguridad ha pasado de ser un campo técnico marginal a convertirse en una de las carreras más prometedoras del mundo actual y futuro, con demanda creciente, alto impacto social, excelente proyección salarial y un papel cada vez más relevante en todas las organizaciones y países.
    separador
    .tarjeta-BG02.px-lg-5.px-4
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Panorama del mercado profesional de la ciberseguridad
      p.mb-5 El mercado profesional de la ciberseguridad en la actualidad atraviesa un momento de auge sin precedentes, caracterizado por una demanda creciente de talento, salarios atractivos y enormes oportunidades de desarrollo profesional. Este sector se consolida como uno de los más dinámicos y estratégicos dentro del ecosistema digital global, impulsado por la acelerada transformación digital, la sofisticación de las amenazas y la obligatoriedad regulatoria en múltiples industrias.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Alta demanda y brecha de talento
        p.mb-5 La escasez de profesionales, es uno de los retos más destacados en la actualidad: como se mencionó previamente, la brecha global alcanza los 3.5 millones de vacantes sin cubrir, según reportes de la industria. El incremento de ataques cibernéticos —en particular #[i ransomware] y amenazas avanzadas a infraestructuras críticas— ha hecho que la protección digital sea una prioridad, incluso para pequeñas y medianas empresas, sectores financieros, sanitarios y gobiernos. Esta situación convierte la ciberseguridad en una carrera de futuro casi garantizado, con enorme proyección de empleabilidad y altos niveles de estabilidad laboral.
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Perfiles y habilidades más demandados
        p.mb-4 Las empresas buscan perfiles variados y cada vez más especializados, entre los que destacan: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-1.order-lg-1
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Chief Information Security Officer (CISO)").p-3
            p.mb-0 Estratega encargado de liderar la política de seguridad y la protección de los activos informáticos.
          div(numero="2" titulo="Ingeniero de ciberseguridad").p-3
            p.mb-0 Responsable del diseño e implementación de infraestructuras seguras.
          div(numero="3" titulo="Analista de ciberseguridad").p-3
            p.mb-0 Especialista en detección y mitigación de vulnerabilidades, y respuesta ante incidentes.
          div(numero="4" titulo="Auditor de ciberseguridad / hacker ético").p-3
            p.mb-0 Encargado de poner a prueba los sistemas y validar la robustez de las defensas.
          div(numero="5" titulo="Data Protection Officer (DPO)").p-3
            p.mb-0 Supervisor del cumplimiento normativo en privacidad y protección de datos.
      .col-lg-4.col-10.order-1.order-lg-2(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Especialidades emergentes incluyen expertos en automatización, inteligencia artificial aplicada a la seguridad, IoT, #[i cloud security], gestión de identidades digitales y seguridad de arquitecturas Zero Trust.
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Tendencias clave del mercado profesional
    p.mb-4 El mercado profesional de la ciberseguridad evoluciona rápidamente, impulsado por la tecnología, la globalización y las nuevas amenazas digitales. A continuación, se destacan algunas de las tendencias clave que marcan su desarrollo: 
    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img13.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 Crecimiento de las inversiones
            div.p-3
              p.mt-3 Las empresas invertirán más de 212,000 millones USD en ciberseguridad en 2025, representando un crecimiento del 11 % interanual.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img14.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 Mercado internacionalizado
            div.p-3
              p.mt-3 El talento puede acceder a oportunidades laborales globales, gracias a la adopción del trabajo remoto e híbrido, lo que amplifica la competencia, pero también la oferta.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img15.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 Automatización e inteligencia artificial
            div.p-3
              p.mt-3 Si bien la IA automatiza tareas y redefine algunos perfiles, también abre nuevas áreas de especialización, como la supervisión ética y la ciberdefensa proactiva basada en modelos inteligentes.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img16.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 Formación continua
            div.p-3
              p.mt-3 La actualización constante es obligatoria; empresas y profesionales apuestan por certificaciones, másteres y programas de especialización para adaptarse a un entorno cambiante.
    p.mb-4 El crecimiento de la ciberseguridad varía según la región, con algunos países destacando por su rápida generación de oportunidades y aumento en inversiones. A continuación, se presenta un panorama internacional y el contexto específico de Colombia: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img17.svg', alt='Imagen decorativa')
          .tarjeta.bgblanco2.p-3(x="83%" y="22%" numero="+")
            p Colombia se consolida como uno de los mercados con mayor dinamismo en América Latina, impulsado por la acelerada digitalización de empresas, la expansión del comercio electrónico y el aumento tanto en la frecuencia como en la sofisticación de los ciberataques.
          .tarjeta.bgblanco2.p-3(x="18.4%" y="75%" numero="+")
            p España y América Latina muestran crecimientos sólidos: España es el segundo país del mundo en ritmo de creación de vacantes, solo superado por México y países como Colombia muestran crecimientos de inversión del 19 % anual, impulsando el desarrollo de talento local.
      .col-lg-10.movil
          figure
            img(src='@/assets/curso/temas/tema3/img17_1.svg', alt='Imagen decorativa')
    
    p.mb-4 El sector público y privado están incrementando notoriamente su presupuesto, destinado a la protección digital. Por ejemplo, se han realizado inversiones significativas, como la inauguración del Centro de Operaciones de Seguridad Nacional (SOC) con un presupuesto de más de 15,000 millones de pesos, además de importantes iniciativas de empresas privadas. Existe un déficit significativo de profesionales en ciberseguridad. Actualmente, el país puede estar enfrentando una brecha de entre 68,000 y 112,000 vacantes sin cubrir en áreas como ciberseguridad, inteligencia artificial y desarrollo de #[i software]. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Esta alta demanda está generando una intensa competencia por el talento, lo que se traduce en oportunidades de empleo bien remuneradas y con excelentes perspectivas de desarrollo profesional. Ciudades como Bogotá, Medellín y Cali son los principales polos de innovación y adopción tecnológica, aunque la región Caribe empieza a mostrar avances llamativos. 
    .tarjeta-BG02.px-lg-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema3/img18.svg', alt='Imagen decorativa')
        .col-lg-7
          p El mercado está compuesto por actores internacionales y locales, con compañías como Fortinet, Cisco, IBM Security y firmas latinoamericanas relevantes. Sin embargo, persisten desafíos como la necesidad de mayor concienciación en pyme, una constante actualización frente a amenazas emergentes y el fortalecimiento de la capacitación y certificación profesional. Colombia dispone de una estrategia nacional de ciberseguridad alineada a marcos globales y con mejoras regulatorias como la Ley 1581 de 2012 sobre protección de datos, lo cual ha favorecido entornos más seguros y fomentado la adopción de buenas prácticas a nivel institucional y empresarial.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          p Ciberseguridad es, hoy más que nunca, una “apuesta segura” en términos profesionales: alta empleabilidad, oportunidades de rápido ascenso, salarios competitivos y la posibilidad de innovar y liderar cambios en todas las industrias. Quienes se formen y especialicen en este campo no solo aseguran su futuro profesional, sino que se convierten en piezas clave de la resiliencia y el desarrollo económico global.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2	Certificaciones en ciberseguridad: tipos y requisitos
    p Las certificaciones en ciberseguridad son credenciales reconocidas internacionalmente que validan el nivel de conocimiento, experiencia y habilidades técnicas de los profesionales en protección digital. Se han convertido en un requisito cada vez más común para acceder a mejores oportunidades laborales o para especializarse en distintos ámbitos de la seguridad informática. 
    p.mb-4 A continuación, se presentan los principales tipos de certificaciones, su perfil y requisitos generales:
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 3.
      i Tipos y perfil de certificaciones
    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table(alt="Texto alternativo tabla")
        thead
          tr
            th Certificación
            th Tipo/especialidad
            th Perfil/requisitos principales
        tbody
          tr
            td #[b CompTIA Security+]
            td Básica, generalista.
            td Recomendado: 2 años en TI, sin requisito formal, examen teórico.
          tr
            td #[b CISSP (ISC)]
            td Gestión y arquitectura de seguridad.
            td 5 años experiencia en seguridad, aprobar examen, adherirse a código ético.
          tr
            td #[b CEH (Certified Ethical Hacker)]
            td #[i Hacking] ético y pruebas ofensivas.
            td Experiencia en TI o curso oficial, aprobar examen práctico.
          tr
            td #[b CISM (ISACA)]
            td Gestión, dirección de seguridad.
            td 5 años de experiencia en gestión seguridad TI, aprobar examen.
          tr
            td #[b CRISC (ISACA)]
            td Gestión de riesgos.
            td 3 años experiencia en control y riesgo de TI, aprobar examen.
          tr
            td #[b GSEC (GIAC)]
            td Técnicas esenciales seguridad.
            td Sin requisito formal, recomendado experiencia en TI. Examen teórico.
          tr
            td #[b OSCP (Offensive Security)]
            td #[i Pentesting], auditoría técnica avanzada.
            td Experiencia recomendada; examen práctico de #[i hacking] en entorno real.
          tr
            td #[b CCSP (Certified Cloud Security Professional)]
            td Seguridad en la nube.
            td Experiencia en TI/nube, aprobar examen internacional.
          tr
            td #[b CySA+ (CompTIA)]
            td Detección y respuesta a amenazas.
            td 3-4 años en seguridad, examen teórico.
          tr
            td #[b CHFI (EC-Council)]
            td Informática forense.
            td Experiencia en forense digital; examen y formación opcional.
    p.mb-4 De acuerdo a lo anterior, se relaciona la clasificación general de certificaciones, según sus objetivos: 
    .tarjeta--BG053.px-md-5.mb-5
      .row.justify-content-center.align-items-center.my-lg-5.my-4
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema3/img19.png', alt='Imagen decorativa' style='margin-bottom: -23px;')
        .col-lg-8(data-aos="fade-left")
          SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-6")
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img20.svg' alt='AvatarTop')
              h5.text-center Nivel básico y fundamental
              p.text-center CompTIA Security+, GSEC, CCT. Aptas para principiantes.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img21.svg' alt='AvatarTop')
              h5.text-center  Defensa y análisis
              p.text-center CySA+, GCIH (gestión de incidentes), GSEC.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img22.svg' alt='AvatarTop')
              h5.text-center Ofensiva y #[i pentesting]
              p.text-center CEH, OSCP, PenTest+.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img23.svg' alt='AvatarTop')
              h5.text-center Gestión y gobierno
              p.text-center CISSP, CISM, CRISC, CCISO.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img24.svg' alt='AvatarTop')
              h5.text-center Cloud y tecnologías específicas
              p.text-center CCSP, AWS Security Specialty, Azure Security Engineer.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/img25.svg' alt='AvatarTop')
              h5.text-center Forense y análisis post incidente
              p.text-center CHFI, GCFA.
    .tarjeta-BG02.px-lg-5.px-4
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema3/img26.svg', alt='Imagen decorativa')
        .col-lg-7
          p Asimismo, se deben tener en cuenta los siguientes requisitos generales
          ul.lista-ul--color
            li
              i.fas.fa-hand-point-right
              p.mb-0 La mayoría de certificaciones avanzadas requieren experiencia profesional (de 2 a 5 años), superar un examen extenso o práctico y en algunos casos, firmar y cumplir un código ético.
            li
              i.fas.fa-hand-point-right
              p.mb-0 Las certificaciones técnicas ofensivas suelen requerir aprobar pruebas prácticas en entornos reales simulados.
            li
              i.fas.fa-hand-point-right
              p.mb-0 Las de gestión (CISM, CRISC, CISSP) se centran en la experiencia en roles de liderazgo, dirección o gestión integral de la seguridad de la información.
            li
              i.fas.fa-hand-point-right
              p.mb-0 Certificaciones fundamentales o junior, exigen menos experiencia, aunque se recomienda formación básica en TI.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	Educación formal y rutas de formación en ciberseguridad
    p.mb-5 La educación formal y las rutas de formación en ciberseguridad, ofrecen hoy un abanico amplio y flexible para quienes desean ingresar, especializarse o avanzar dentro de este dinámico campo profesional, sin importar su punto de partida.

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Educación formal en ciberseguridad
    p.mb-4 La formación académica en ciberseguridad ofrece múltiples alternativas según el nivel de especialización y el enfoque profesional deseado. A continuación, se presentan los principales tipos de programas y su orientación: 
    .tarjeta.tarjeta--BG01.p-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Grado universitario
            p.mb-0 Existen programas de pregrado específicamente diseñados para formar profesionales en ciberseguridad, orientados tanto al desarrollo técnico como a la gestión estratégica. Estos estudios suelen incluir materias como redes, programación segura, criptografía, gestión de riesgos y protección de datos.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img27.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Ingenierías con énfasis en seguridad
            p.mb-0 Algunos programas de ingeniería han incorporado énfasis o módulos en ciberseguridad, abarcando el diseño y operación de infraestructuras digitales seguras, la prevención de ataques y la evaluación de vulnerabilidades.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img28.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Especializaciones y maestrías
            p.mb-0 A nivel posgrado, la formación se vuelve más específica y estratégica. Las especializaciones profundizan en áreas clave, como análisis de amenazas, investigación forense digital, diseño de políticas y gobierno de la seguridad. Las maestrías suelen incorporar tanto aspectos técnicos avanzados como gestión, cumplimiento de normativas y liderazgo para preparar a quienes aspiran a roles directivos o de consultoría.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img29.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Diplomados y cursos institucionales
            p.mb-0 Además de titulaciones tradicionales, muchas instituciones han diseñado diplomados, talleres y programas de capacitación para empresas, reforzando tanto competencias técnicas como una cultura organizacional centrada en la seguridad.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img30.png' alt="Imagen decorativa")
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Rutas de formación profesional y continua
    p.mb-5 La formación en ciberseguridad no sigue un único camino; existen diversas rutas que permiten desarrollar competencias, según los intereses, el nivel de experiencia y las metas profesionales de cada persona. Por ello, se presentan las principales alternativas de formación y actualización continua: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Formaciones modulares escalables")
            p.mb-0 Existen rutas de aprendizaje que permiten avanzar paso a paso, comenzando con fundamentos básicos y progresando hacia la defensa, el monitoreo, el desarrollo seguro de software, el análisis forense y la simulación de ataques, según el área de interés.
          div(titulo="Rutas especializadas: #[i Blue team] y #[i Red team]")
            p.mb-0 Algunas trayectorias educativas permiten optar por especializaciones prácticas en defensa (#[i Blue team]: monitoreo, respuesta a incidentes, administración de sistemas seguros) o ataque (Red team: pruebas de penetración, evaluación de seguridad ofensiva).
          div(titulo="Cursos cortos, microcertificaciones y formación en línea")
            p.mb-0 La oferta #[i online] facilita adquirir conocimientos actualizados, a través de cursos breves, certificaciones modulares, laboratorios virtuales, simulaciones realistas y retos de #[i hacking] ético. Este formato es ideal para quienes desean compatibilizar la formación con la vida laboral o actualizarse de manera continua en nuevas tecnologías y amenazas.
          div(titulo="Aprendizaje autodirigido")
            p.mb-0 Los recursos abiertos y gratuitos, como plataformas educativas y comunidades de ciberseguridad, complementan la formación formal y permiten practicar habilidades en escenarios prácticos.
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-md-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img31.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
