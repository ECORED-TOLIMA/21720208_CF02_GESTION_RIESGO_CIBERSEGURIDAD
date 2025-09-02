<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Gestión de riesgos de seguridad de la información    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
    
    p.mb-5 La gestión de riesgos de seguridad de la información, es una disciplina esencial que toda persona y empresa debe comprender para proteger adecuadamente sus activos más valiosos. El riesgo, en este contexto, se define como la posibilidad de que una amenaza explote una vulnerabilidad, ocasionando un impacto negativo sobre los recursos informáticos, ya sean datos, servicios o infraestructura. Una correcta gestión, lleva los siguientes pasos: 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row(titulo="")
            .col-lg-6.order-2.order-lg-1
              h4 Identificación
              p Comienza con la identificación de los activos críticos: información confidencial, sistemas financieros, bases de datos de clientes o dispositivos de red.
            .col-lg-6.col-8.mb-md-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img2.png', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.col-8.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img3.png', alt='Imagen decorativa')
            .col-lg-6
              h4 Reconocimiento y análisis
              p Posteriormente, se reconocen y analizan las amenazas que podrían afectar estos activos, como #[i malware], ataques de #[i phishing], errores humanos, desastres naturales o acciones internas malintencionadas.
          .row(titulo="")
            .col-lg-6.order-2.order-lg-1
              h4 Evaluación
              p Finalmente, se realiza una evaluación sistemática de vulnerabilidades; esto abarca desde brechas en el #[i software], hasta malas configuraciones e insuficiente capacitación del personal. 
            .col-lg-6.col-8.mb-md-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img4.png', alt='Imagen decorativa')
    p.mb-5 El análisis de riesgos, implica cruzar amenazas y vulnerabilidades, para estimar la probabilidad de ocurrencia y el posible impacto asociado, lo que permite priorizar los riesgos más significativos. Una vez priorizados, se diseña un plan de tratamiento, que puede incluir la implementación de controles técnicos (cortafuegos, cifrado, autenticación multifactor), organizativos (políticas, normas, campañas de concienciación) y procedimientos de respuesta ante incidentes.
    
    .row.mb-4
      .col-lg-5.col-10.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img5.png', alt='Imagen decorativa')
      .col-lg-7
        p.mb-5 La gestión de riesgos es un proceso continuo, no un esfuerzo aislado. Los riesgos evolucionan por cambios tecnológicos, amenazas emergentes y nuevos marcos regulatorios, por lo que requiere revisiones y actualizaciones periódicas. El marco internacional más reconocido para estructurar esta gestión es la norma ISO/IEC 27005, que promueve un ciclo de mejora continua: identificar, analizar, evaluar, tratar, monitorear y comunicar los riesgos.
        .cajon.color-primario.p-4
          p.mb-0 La toma de decisiones debe estar documentada y alineada con los objetivos globales del negocio y el cumplimiento normativo. Involucrar a todas las áreas de la organización, desde la alta dirección hasta los usuarios finales, es clave para crear una cultura de seguridad.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Identificación, evaluación y tratamiento de riesgos
    p.mb-4 A continuación, se detallan estas etapas con sus respectivas explicaciones y su orden de aplicación en la gestión de seguridad de la información: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Identificación de riesgos")
            p.mb-0 Se inicia con el reconocimiento sistemático de activos, amenazas y vulnerabilidades que pueden afectar el funcionamiento o confidencialidad, integridad y disponibilidad de los sistemas. Este paso implica mapear los activos críticos, identificar fuentes potenciales de riesgo (internas y externas), así como las debilidades que podrían ser explotadas, usando técnicas como entrevistas, revisión documental y análisis de incidentes previos. 
          div(titulo="Evaluación de riesgos")
            p.mb-0 Luego, se cuantifica o cualifica la probabilidad de que una amenaza explote una vulnerabilidad y el impacto que esto tendría en la organización. Se utilizan metodologías formales para ponderar la criticidad y priorizar los riesgos, normalmente empleando matrices de riesgo, análisis de escenarios o cálculos probabilísticos, considerando aspectos técnicos, operativos y de negocio. 
          div(titulo="Tratamiento o mitigación del riesgo")
            p.mb-0 Finalmente, se seleccionan y aplican controles o medidas que reduzcan el riesgo a niveles aceptables, mediante acciones como evitar el riesgo, reducirlo con controles técnicos u organizativos (#[i firewalls], cifrado, capacitación), transferirlo (seguro) o aceptarlo cuando no se justifica una inversión mayor. Este proceso debe ser documentado, con planes de acción claros, indicadores para evaluar la eficacia de las medidas y procesos de revisión continua, asegurando la alineación con los objetivos estratégicos y cumplimiento normativo de la organización. 
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-md-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-left")
        .tarjeta.color-primario.tarjcone.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img7.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 Estas etapas conforman un ciclo iterativo y dinámico para mantener la seguridad y resiliencia frente a amenazas cambiantes en sistemas de información.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Relación entre análisis forense y gestión de riesgos
    p La relación entre el análisis forense digital y la gestión de riesgos de seguridad de la información es estrecha y complementaria, pues ambos buscan proteger de manera integral los activos digitales y minimizar el impacto de incidentes de seguridad en las organizaciones. 
    p.mb-4 Al respecto, se dan las siguientes diferenciaciones: 
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='Texto que describa la imagen')
        h4.text-center Gestión de riesgos 
        p Mientras la gestión de riesgos se enfoca en identificar, evaluar y tratar las amenazas y vulnerabilidades para prevenir incidentes.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='Texto que describa la imagen')
        h4.text-center Análisis forense
        p El análisis forense interviene cuando un incidente ya ha ocurrido, proporcionando mecanismos técnicos y metodológicos para la adquisición, preservación, análisis y presentación de la evidencia digital, con el fin de entender el suceso y atribuir responsabilidades. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 El análisis forense aporta información valiosa para la gestión de riesgos, ya que sus hallazgos permiten validar o ajustar las hipótesis de amenazas, identificar nuevas vulnerabilidades explotadas y evaluar la efectividad de los controles existentes. 
    .tarjeta-BG02.px-md-5.px-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema2/img10.svg', alt='Texto que describa la imagen')
        .col-lg-8
          p De esta manera se retroalimenta el ciclo de mejora continua de la seguridad organizacional, fortaleciendo las defensas y reduciendo la probabilidad y el impacto de futuros ataques. Además, la gestión de riesgos define protocolos y políticas de actuación que aseguran que el análisis forense se realice respetando la integridad y cadena de custodia de la evidencia, lo que es fundamental para que los resultados sean admisibles en procesos legales o auditorías. En un contexto organizacional, ambos procesos deben estar integrados en los planes de respuesta a incidentes y en las estrategias de seguridad para garantizar una reacción rápida, coordinada y eficaz frente a las amenazas. 

    p Por ejemplo, la identificación temprana de riesgos mediante evaluaciones, permite preparar y capacitar equipos forenses que actúen eficientemente tras un incidente; a su vez, los informes forenses detallados facilitan la toma de decisiones sobre qué riesgos priorizar y qué controles implementar o mejorar. La integración de análisis forense y gestión de riesgos, también contribuye a la resiliencia organizacional al permitir aprender de incidentes pasados, detectar patrones y anticipar tendencias de ataques. Así, la gestión de riesgos y el análisis forense se complementan en la protección y recuperación de los sistemas de información, reflejando un enfoque proactivo y reactivo necesario para la seguridad integral en entornos digitales modernos.
    p.mb-4 Analice la siguiente historia para tener mayor claridad sobre estas dos acciones: 
    .tarjeta--BG044.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--BG04.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-12
              .bgfondo1
                .tarjeta.bgblanco
                  p.mb-0 Imagine una ciudad digital donde todos los datos son tesoros guardados en cofres electrónicos, protegidos día y noche por un sistema de vigilancia: la gestión de riesgos.   
          .row
            .col-lg-12
              .bgfondo2
                .tarjeta.bgblanco
                  p.mb-0 Este equipo vigila de cerca los posibles peligros: ladrones virtuales, tormentas de #[i malware], accidentes internos, identificando por dónde podrían entrar, qué vulnerabilidades existen y qué medidas hay que reforzar antes de que ocurra un desastre. 
          .row
            .col-lg-12
              .bgfondo3
                .tarjeta.bgblanco
                  p.mb-0 Su trabajo es anticipar amenazas y levantar escudos: cortafuegos, sistemas de detección y reglas claras para todos los habitantes digitales.
          .row
            .col-lg-12
              .bgfondo4
                .tarjeta.bgblanco
                  p.mb-0 Pero un día, pese a todo el esfuerzo, una amenaza logra burlar las defensas y roba información valiosa. 
          .row
            .col-lg-12
              .bgfondo5
                .tarjeta.bgblanco
                  p.mb-0 Aquí entra en acción el equipo de análisis forense digital, los detectives expertos. Llegan al lugar del incidente, preservan cuidadosamente cada evidencia, reconstruyen paso a paso lo sucedido y descifran cómo el atacante logró avanzar. Su investigación revela no solo qué se perdió, sino también qué falló y por qué.
          .row
            .col-lg-12
              .bgfondo6
                .tarjeta.bgblanco
                  p.mb-0 Este hallazgo es crucial para la gestión de riesgos, que toma nota de las técnicas usadas por los atacantes y de las debilidades expuestas. 
          .row
            .col-lg-12
              .bgfondo7
                .tarjeta.bgblanco
                  p.mb-0 El aprendizaje del incidente sirve para ajustar controles, fortalecer protocolos y estar mejor preparados para el futuro. Así, ambos equipos se complementan: la gestión de riesgos prepara y previene, el análisis forense investiga y enseña tras lo ocurrido. 
          .row
            .col-lg-12
              .bgfondo8
                .tarjeta.bgblanco
                  p.mb-0 Juntos, mantienen la ciudad digital resiliente, aprendiendo de los errores y reforzando continuamente sus defensas frente a amenazas siempre cambiantes.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Herramientas y marcos para la gestión de riesgos (NIST, ISO/IEC 27005)
    p.mb-4 La gestión de riesgos en el ámbito de la seguridad de la información, requiere marcos y herramientas sólidas que permitan a las organizaciones identificar, analizar, tratar y monitorear posibles amenazas. Dos de los marcos más reconocidos internacionalmente son el NIST Risk Management Framework (RMF) y la norma ISO/IEC 27005. A continuación, la explicación de cada uno: 
    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5.p-4(titulo="Marco NIST RMF")
        .row.justify-content-center
          .col-lg-5.col-10.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img19.png', alt='Texto que describa la imagen')     
          .col-lg-7
            p.mb-0 Es ampliamente utilizado en los Estados Unidos, especialmente en organismos federales y empresas que requieren altos estándares de seguridad. Consta de seis pasos esenciales: preparación, categorización del sistema, selección de controles de seguridad, implementación de controles, evaluación de controles, autorización del sistema y monitoreo continuo. El proceso parte desde la categorización de los sistemas en función de su impacto potencial, seleccionando controles apropiados basados en publicaciones especializadas como NIST SP 800-37 o SP 800-53, hasta la implementación y supervisión constante de la eficacia de los mismos. Esta estructura fomenta una aproximación adaptable y escalable, facilitando la gestión proactiva del riesgo y la toma de decisiones informadas desde la alta dirección hasta el personal operativo.
      .py-4.py-md-5.p-4(titulo="Norma ISO/IEC 27005")
        .row.justify-content-center
          .col-lg-5.col-10.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img20.png', alt='Texto que describa la imagen') 
          .col-lg-7
            p.mb-0 Es una norma internacional dedicada a la gestión de riesgos de seguridad de la información y está alineada con la ISO/IEC 27001, la cual establece los requisitos para los Sistemas de Gestión de Seguridad de la Información (SGSI). ISO/IEC 27005 proporciona directrices para un proceso continuo y estructurado que incluye la definición del contexto, la identificación, análisis y evaluación de riesgos, así como su tratamiento, revisión y comunicación. El establecimiento del contexto implica comprender el entorno organizacional, sus objetivos y parte interesada. Posteriormente, se identifican los riesgos que afectan la confidencialidad, integridad y disponibilidad de la información, se analizan las probabilidades y consecuencias y se comparan con los criterios de aceptación establecidos. En el tratamiento de riesgos, se pueden emplear estrategias como la mitigación, transferencia, aceptación o eliminación del riesgo, mientras que el monitoreo y la revisión aseguran la mejora continua del sistema.
    p Uno de los principales aportes de la ISO/IEC 27005, es su enfoque flexible, apto para cualquier tipo y tamaño de organización. También enfatiza la interrelación entre los diversos métodos de evaluación de riesgos, permitiendo aproximaciones cualitativas, cuantitativas o semicuantitativas según las necesidades y recursos de la entidad. A diferencia del NIST, que provee listas de controles sugeridos, ISO/IEC 27005 se centra en el marco metodológico, dejando que cada organización adapte los controles y criterios a sus circunstancias particulares, siempre en coherencia con los requisitos de la ISO/IEC 27001.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Ambos marcos impulsan una cultura de gestión de riesgos, promueven la responsabilidad y concientizan a todos los niveles dentro de la organización sobre la importancia de la seguridad de la información. Facilitan la integración de los procesos de gestión de riesgos con otros enfoques empresariales y ofrecen una plataforma para la mejora continua, la automatización de tareas, la generación de reportes y el seguimiento de acciones correctivas.
    p.mb-5 Por lo tanto, el NIST RMF como la ISO/IEC 27005, representan pilares fundamentales en la administración de riesgos, destacándose cada uno en lo siguiente: 

    .row.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta.tarjeta--BG03.h-100
          figure
            img(src='@/assets/curso/temas/tema2/img22.png', alt='Texto que describa la imagen')
          .p-4
            h5 NIST RMF
            p.mb-0 Posee un enfoque práctico y detallado en los controles de seguridad.
      .col-lg-6
        .tarjeta.tarjeta--BG03.h-100
          figure
            img(src='@/assets/curso/temas/tema2/img23.png', alt='Texto que describa la imagen')         
          .p-4
            h5 ISO/IEC 27005
            p.mb-0 Ofrece una guía metodológica robusta y adaptable.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La elección o combinación de estos marcos, dependerá del contexto regulatorio, el sector y las necesidades específicas de cada organización. Implementarlos correctamente contribuye a reducir amenazas, cumplir normativas y sustentar la confianza digital en los procesos, productos y servicios de la entidad.

    p.mb-4 Para tener una mayor claridad sobre lo explicado anteriormente, se relaciona la siguiente tabla que detalla los puntos clave que diferencian y relacionan el NIST RMF y la ISO/IEC 27005, en el contexto de la gestión de riesgos en seguridad de la información:
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2.
      i Marcos y herramientas para la gestión de riesgos
    .tabla-a.color-acento-contenido.mb-5
      table(alt="Texto alternativo tabla")
        thead
          tr(data-aos="fade-right")
            th #[b Aspecto]
            th NIST Risk Management Framework (RMF)
            th ISO/IEC 27005
        tbody
          tr(data-aos="fade-right")
            td #[b Origen]
            td Estados Unidos (NIST).
            td Internacional (ISO/IEC).
          tr(data-aos="fade-right")
            td #[b Aplicación principal]
            td Entes gubernamentales y empresas.
            td Organizaciones de cualquier sector y tamaño.
          tr(data-aos="fade-right")
            td #[b Propósito]
            td Gestión de riesgos de seguridad de sistemas.
            td Gestión de riesgos de la información.
          tr(data-aos="fade-right")
            td #[b Estructura]
            td 6 pasos: preparación, categorización, selección, implementación, evaluación, monitoreo
            td Proceso continuo: contexto, identificación, análisis, evaluación, tratamiento, monitoreo y comunicación.
          tr(data-aos="fade-right")
            td #[b Enfoque]
            td Práctico y detallado, controles prescriptivos.
            td Metodológico, flexible y adaptable.
          tr(data-aos="fade-right")
            td #[b Relación con otras normas]
            td Basado en NIST SP 800-37 y SP 800-53.
            td Alineado con ISO/IEC 27001.
          tr(data-aos="fade-right")
            td #[b Controles de seguridad]
            td Lista específica de controles sugeridos.
            td Definición metodológica, controles elegidos por la organización.
          tr(data-aos="fade-right")
            td #[b Métodos de valoración]
            td Normalmente cualitativo, con algunos cuantitativos.
            td Permite enfoques cualitativos, cuantitativos y semicuantitativos.
          tr(data-aos="fade-right")
            td #[b Mejora continua]
            td Énfasis en monitoreo y revisión.
            td Énfasis en revisión continua y mejora.
          tr(data-aos="fade-right")
            td #[b Adaptabilidad]
            td Escalable y adaptable a diferentes escenarios.
            td Altamente flexible y adaptable.
          tr(data-aos="fade-right")
            td #[b Cultura organizacional]
            td Promueve responsabilidad y concientización.
            td Promueve cultura de gestión de riesgos.
          tr(data-aos="fade-right")
            td #[b Automatización y soporte]
            td Facilita reportes y seguimiento automatizados.
            td Admite integración con herramientas y automatización.
          tr(data-aos="fade-right")
            td #[b Decisión de controles]
            td Basado en impacto y categorización.
            td Basado en contexto y criterios propios.
          tr(data-aos="fade-right")
            td #[b Compatibilidad]
            td Integrable con otros marcos NIST.
            td Integra con otros estándares ISO.
          tr(data-aos="fade-right")
            td #[b Regulatorio]
            td Requerido en gobierno federal de EE. UU.
            td Recomendado internacionalmente.
</template>
<script>
export default {
  name: 'Tema2',
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
