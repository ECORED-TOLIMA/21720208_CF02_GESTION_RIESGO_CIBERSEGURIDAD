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
        p.text-center.mb-0  Expertos en seguridad con foco en IA, big data, protección de infraestructuras críticas, seguridad de IoT, cloud, blockchain, etc. 
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
      p.mb-4 El mercado profesional de la ciberseguridad en la actualidad atraviesa un momento de auge sin precedentes, caracterizado por una demanda creciente de talento, salarios atractivos y enormes oportunidades de desarrollo profesional. Este sector se consolida como uno de los más dinámicos y estratégicos dentro del ecosistema digital global, impulsado por la acelerada transformación digital, la sofisticación de las amenazas y la obligatoriedad regulatoria en múltiples industrias.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Alta demanda y brecha de talento
        p.mb-4 La escasez de profesionales, es uno de los retos más destacados en la actualidad: como se mencionó previamente, la brecha global alcanza los 3.5 millones de vacantes sin cubrir, según reportes de la industria. El incremento de ataques cibernéticos —en particular ransomware y amenazas avanzadas a infraestructuras críticas— ha hecho que la protección digital sea una prioridad, incluso para pequeñas y medianas empresas, sectores financieros, sanitarios y gobiernos. Esta situación convierte la ciberseguridad en una carrera de futuro casi garantizado, con enorme proyección de empleabilidad y altos niveles de estabilidad laboral.
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

    
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2	Certificaciones en ciberseguridad: tipos y requisitos

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	Educación formal y rutas de formación en ciberseguridad
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
