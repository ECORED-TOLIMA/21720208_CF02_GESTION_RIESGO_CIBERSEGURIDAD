<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Sensibilización de usuarios sobre ciberseguridad
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
    p.mb-5 Adoptar hábitos responsables que ayuden a navegar de manera segura en el mundo digital, es un compromiso de toda la organización, independientemente del #[i software], políticas y #[i hardware] que se implemente para mitigar estos riesgos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='Imagen decorativa')
      .col-lg-7
        p La sensibilización en ciberseguridad consiste en adquirir conocimientos y hábitos para reconocer, prevenir y reaccionar ante los riesgos digitales, como fraudes, #[i malware] o robo de información. La mayoría de los incidentes de seguridad suceden por errores humanos, por lo que estar bien informado es clave para evitar ser víctima de un ciberataque.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Con solo hacer clic en un enlace malicioso, es posible comprometer múltiples sistemas, lo que constituye un ejemplo común de ataque.
    p.mb-4 A continuación, se presentan algunos aspectos esenciales que todo usuario debería conocer para fortalecer sus hábitos digitales y cumplir con las normativas vigentes: 
    .tarjeta.tarjeta--BG01.p-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 ¿En qué consiste un programa de sensibilización en ciberseguridad?
            p Un programa de sensibilización busca cambiar comportamientos y actitudes mediante actividades constantes: seminarios, capacitaciones en línea, vídeos, juegos y simulaciones. Debe ser sencillo, práctico y repetirse de forma periódica.
            p #[b Ejemplo de actividades:] reconocer intentos de phishing, aprender a crear contraseñas seguras y conocer cómo actuar si ocurre un incidente.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema4/img3.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 ¿Qué es la información sensible y por qué protegerla?
            p La información sensible son todos aquellos datos que, si se hicieran públicos o llegaran a manos indebidas, causarían daño a una persona u organización. Incluye nombres completos, números de identificación, cuentas bancarias, contraseñas, información médica, etc.
            p #[b Consecuencias de no protegerla:] robo de identidad, pérdidas económicas, daño a la reputación
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema4/img3.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Cumplimiento normativo: ¿Qué es y para qué sirve?
            p El cumplimiento normativo en ciberseguridad es seguir las leyes y estándares que regulan la protección de datos y sistemas. Su objetivo es garantizar la privacidad y la seguridad digital, evitando sanciones legales, pérdida de confianza y otros riesgos.
            p #[b Ejemplo en Colombia:] Ley 1273 de 2009, que sanciona los delitos informáticos
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema4/img3.png' alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Prácticas y tecnologías de protección básicas
        p.mb-4 Algunas tecnologías esenciales para proteger la información incluyen: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img6.svg', alt='Imagen decorativa')
          .tarjeta.bgblanco2.p-3(x="16.2%" y="58%" numero="+")
            p Barreras que bloquean accesos no autorizados.
          .tarjeta.bgblanco2.p-3(x="42.5%" y="24%" numero="+")
            p Detectan y eliminan software malicioso.
          .tarjeta.bgblanco2.p-3(x="84%" y="40%" numero="+")
            p  Protege los datos para que no puedan ser leídos si son interceptados.
          .tarjeta.bgblanco2.p-3(x="57.5%" y="77%" numero="+")
            p Alertan sobre actividades sospechosas.
      .col-lg-10.movil
          figure
            img(src='@/assets/curso/temas/tema4/img6_1.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Hábitos responsables para una buena ciberseguridad
    .tarjeta-BG02.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.order-lg-1.order-2
          p Es importante tener en cuenta las siguientes recomendaciones:
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 Use contraseñas largas y únicas, cámbielas regularmente.
            li 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 No comparta contraseñas ni información sensible.
            li 
              .lista-ol--cuadro__vineta
                span 3
              p.mb-0 Evite conectarte a redes Wi-Fi públicas sin protección.
            li 
              .lista-ol--cuadro__vineta
                span 4
              p.mb-0 Actualice siempre los dispositivos y aplicaciones.
            li 
              .lista-ol--cuadro__vineta
                span 5
              p.mb-0 Revise que los sitios #[i web] sean seguros (inicio con "https").
            li 
              .lista-ol--cuadro__vineta
                span 6
              p.mb-0 Utilice doble autenticación si está disponible.
            li 
              .lista-ol--cuadro__vineta
                span 7
              p.mb-0 Bloquee el computador o celular cuando no los use.
        .col-lg-4.col-8.order-lg-2.order-1.mb-4.mb-lg-0(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema4/img7.png', alt='Imagen decorativa')
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Las simulaciones de ataques 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema4/img8.svg', alt='Imagen decorativa')
      .col-lg-7
        p Sirven para poner a prueba los conocimientos y ver cómo se reacciona ante situaciones reales de riesgo, sin perjudicar los sistemas auténticos. Así, se puede identificar las áreas de mejora y reforzar la protección ante ataques reales. También las campañas de sensibilización (carteles, correos informativos, actividades de grupo) y el esfuerzo de toda la comunidad educativa o laboral, ayudan a construir una cultura de seguridad, donde todos participan activamente y comparten buenas prácticas para protegerse mutuamente.
        p Un ejemplo de esto, son las pruebas de #[i phishing] simuladas.


</template>

<script>
export default {
  name: 'Tema4',
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
