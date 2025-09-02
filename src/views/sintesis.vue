<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente aborda principalmente el análisis forense digital, mostrando su importancia y procedimiento dentro de la ciberseguridad. El proceso forense sigue varias etapas clave enfocadas en la evidencia y manejo de la información.
    p Además, se ejemplifican prácticas comunes en análisis forense y paralelamente, se incluyen comparativas entre el NIST Risk Management Framework (RMF) y la norma ISO/IEC 27005, destacando sus diferencias en origen, aplicación, estructura y enfoque metodológico para la gestión de riesgos en seguridad de la información.
    p También se presentan certificaciones claves en ciberseguridad, detallando certificaciones básicas, avanzadas, ofensivas, de gestión y especializadas en cloud o forense.
    p Por último, se resalta la importancia de complementos como cursos cortos, microcertificaciones y formación en línea, que facilitan la actualización continua e igualmente, se relaciona la importancia de la sensibilización del usuario en todos los procesos de ciberseguridad.
    p En suma, el contenido enfatiza en la importancia del análisis forense digital como pilar en la investigación y defensa en ciberseguridad, la gestión de riesgos a través de marcos reconocidos y la necesidad de formación constante y certificaciones especializadas para abordar los retos contemporáneos de la seguridad informática.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Análisis forense y profesionalización en ciberseguridad, se abordan los procesos clave para la investigación y gestión de incidentes de seguridad digital dentro de las organizaciones. Se inicia con el análisis de evidencia digital, comprendiendo sus conceptos fundamentales, el proceso forense aplicado en entornos corporativos y la normativa que regula estas acciones. Luego, se desarrolla la gestión de riesgos de seguridad de la información, destacando la identificación, evaluación y tratamiento de riesgos, así como la relación entre el análisis forense y la mitigación de amenazas, apoyada en marcos de referencia como NIST e ISO/IEC 27005. Posteriormente, se exploran los enfoques profesionales en ciberseguridad, incluyendo el panorama del mercado laboral, certificaciones relevantes y rutas de formación especializadas. Finalmente, se enfatiza la importancia de la sensibilización de los usuarios como un pilar para fortalecer la cultura de ciberseguridad en las organizaciones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
