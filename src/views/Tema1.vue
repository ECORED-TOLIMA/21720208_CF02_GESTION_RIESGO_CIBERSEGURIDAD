<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Análisis de evidencia digital    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img1.jpg', alt='Imagen decorativa')
    
    p.mb-5 Para dar contexto a lo que se refiere el análisis de evidencia digital, se invita a que analice los siguientes dos casos que se presentan por medio de estos videos:
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Caso # 1
    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-12
        figure
          .video
            iframe(width="1246" height="701" src="https://www.youtube.com/embed/gaIBAjLKUBE" title="Análisis forense y profesionalización en ciberseguridad  - Caso 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Caso # 2
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          .video
            iframe(width="1246" height="701" src="https://www.youtube.com/embed/LzvHFdnPJlQ" title="Análisis forense y profesionalización en ciberseguridad  - Caso 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

    separador
    .tarjeta-BG02.px-md-5.px-4
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1	Conceptos fundamentales del análisis forense digital
      p El análisis forense digital es una disciplina encargada de identificar, recolectar, preservar, analizar y presentar evidencia digital de manera que garantice su integridad y utilidad en procesos legales o investigaciones de seguridad. Implica el uso de técnicas especializadas para evitar la alteración de los datos y su correcto procesamiento, con el objetivo de reconstruir hechos, descubrir actividades sospechosas y aportar información válida ante las autoridades.
      p.mb-4 A continuación, se relacionan los conceptos fundamentales del análisis forense digital:
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1.
      i Conceptos del análisis forense digital
    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table(alt="Texto alternativo tabla")
        thead
          tr(data-aos="fade-left")
            th Concepto
            th Descripción breve
        tbody
          tr
            td #[b Identificación]
            td Localiza posibles fuentes de evidencia digital, como discos duros, correos o dispositivos móviles.
          tr
            td #[b Recolección]
            td Obtiene la evidencia resguardando su integridad, siguiendo procedimientos que eviten la alteración de datos.
          tr
            td #[b Preservación]
            td Garantiza que los datos recolectados permanezcan intactos y auténticos durante todo el proceso.
          tr
            td #[b Análisis]
            td Examina de manera detallada la evidencia, usando herramientas forenses para descubrir, recuperar y correlacionar información relevante.
          tr
            td #[b Documentación]
            td Registra de manera cronológica y precisa todos los pasos realizados, generando informes claros y verificables.
          tr
            td #[b Presentación]
            td Exhibe los hallazgos de forma comprensible y útil en juicios o auditorías, respetando normas legales.
    p.mb-4 A continuación, se relacionan algunos ejemplos: 
    .tarjeta.tarjeta--gris.fondo.p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Identificación")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img2.jpg', alt='Texto que describa la imagen')
          .col-lg-6
            h4 Identificación
            ul.lista-ul--color
              li 
                i.fas.fa-hand-point-right
                | Encontrar un disco duro externo conectado a una computadora involucrada en un delito.
              li
                i.fas.fa-hand-point-right
                | Localizar correos electrónicos sospechosos en la bandeja de entrada de un usuario.
              li
                i.fas.fa-hand-point-right
                | Detectar tráfico de red anormal en un servidor empresarial.
        .row.justify-content-center(titulo="Recolección")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img3.jpg', alt='Texto que describa la imagen')
          .col-lg-6
            h4 Recolección
            ul.lista-ul--color
              li
                i.fas.fa-hand-point-right
                | Clonar el contenido de un #[i smartphone], usando herramientas forenses.
              li
                i.fas.fa-hand-point-right
                | Extraer archivos de un servidor utilizando técnicas que evitan modificar los datos originales.
              li
                i.fas.fa-hand-point-right
                | Recolectar registros de acceso de una base de datos.
            
        .row.justify-content-center(titulo="Preservación")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.jpg', alt='Texto que describa la imagen')
          .col-lg-6
            h4 Preservación
            ul.lista-ul--color
              li
                i.fas.fa-hand-point-right
                | Guardar una copia de los datos recolectados en un dispositivo de solo lectura.
              li
                i.fas.fa-hand-point-right
                | Sellar y almacenar un disco duro en una bolsa antiestática.
              li
                i.fas.fa-hand-point-right
                | Mantener los precintos de seguridad y etiquetas intactas durante el traslado de la evidencia.
        .row.justify-content-center(titulo="Análisis")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img5.jpg', alt='Texto que describa la imagen')
          .col-lg-6
            h4 Análisis
            ul.lista-ul--color
              li
                i.fas.fa-hand-point-right
                p.mb-0 Buscar archivos eliminados en un disco con #[i software] especializado.
              li
                i.fas.fa-hand-point-right
                | Analizar los metadatos de fotos para determinar fechas y ubicaciones.
              li
                i.fas.fa-hand-point-right
                | Examinar logs de actividad para identificar accesos no autorizados.
        .row.justify-content-center(titulo="Documentación")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img6.jpg', alt='Texto que describa la imagen')
          .col-lg-6
            h4 Documentación
            ul.lista-ul--color
              li
                i.fas.fa-hand-point-right
                | Anotar cada paso realizado durante el análisis en un cuaderno o sistema digital.
              li
                i.fas.fa-hand-point-right
                | Tomar capturas de pantalla de hallazgos relevantes.
              li
                i.fas.fa-hand-point-right
                | Escribir un informe que describa procedimientos, herramientas utilizadas y resultados.
        .row.justify-content-center(titulo="Presentación")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img7.jpg', alt='Texto que describa la imagen')
          .col-lg-6
            h4 Presentación
            ul.lista-ul--color
              li
                i.fas.fa-hand-point-right
                | Exponer los hallazgos en un juicio utilizando gráficos o resúmenes visuales.
              li
                i.fas.fa-hand-point-right
                | Explicar en lenguaje sencillo los resultados y la importancia de la evidencia encontrada.
              li
                i.fas.fa-hand-point-right
                | Responder preguntas de abogados o jueces sobre la validez de las pruebas.
        .row.justify-content-center(titulo="Cadena de custodia")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img8.jpg', alt='Texto que describa la imagen')
          .col-lg-6
            h4 Cadena de custodia
            ul.lista-ul--color
              li
                i.fas.fa-hand-point-right
                | Firmar un registro cada vez que alguien recibe o entrega la evidencia.
              li
                i.fas.fa-hand-point-right
                | Archivar un documento que detalle fechas, horas y nombres de quienes manipularon la evidencia.
              li
                i.fas.fa-hand-point-right
                | Utilizar sellos de seguridad numerados para verificar que no ha habido alteraciones.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	Proceso forense en ciberseguridad organizacional
    p.mb-4 El proceso forense en ciberseguridad organizacional, es un conjunto de procedimientos estructurados para identificar, contener, analizar y remediar incidentes de seguridad, asegurando la validez y la integridad de la evidencia digital.
    p.mb-4 Al respecto, se destacan los siguientes: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        LineaTiempoD.color-secundario
          .row.justify-content-center(numero="1" titulo="Procedimientos 1")
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Detección del incidente]: todo comienza cuando un sistema de monitoreo alerta sobre una actividad anormal, como múltiples intentos de acceso fallidos o transferencia de grandes volúmenes de datos.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Activar el protocolo forense]: el equipo de respuesta a incidentes (CSIRT o DFIR) inicia el protocolo forense, delimitando responsabilidades y asegurando que cada paso quede documentado desde el principio.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Preservación de escena]: los sistemas afectados se aíslan para evitar que la amenaza se propague o que la evidencia sea manipulada.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Notificación interna]: se comunican los hechos relevantes a los responsables de seguridad, TI, legales y, si corresponde, a la alta dirección.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Identificación de evidencia]: se localizan los dispositivos críticos: servidores, estaciones, correos, #[i logs], dispositivos móviles, #[i backups] y registros en la nube.
                
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img8.jpg', alt="Imagen decorativa")
          .row.justify-content-center(numero="2" titulo="Procedimientos 2")
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Recolección de evidencia]: se efectúan copias forenses #[i bit] a #[i bit] de discos duros, memoria RAM, registros de red y cualquier dato potencialmente útil, asegurando la cadena de custodia.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Etiquetado y documentación]: cada evidencia se archiva y etiqueta meticulosamente, detallando fecha, hora, responsable y condiciones de recolección.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Verificación de integridad]: se usan #[i hash] criptográficos (MD5, SHA-1, SHA-256) para garantizar que la evidencia no sea alterada durante el análisis.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Análisis preliminar]: se visualizan logs iniciales buscando actividad sospechosa (inicios de sesión, conexiones externas, eliminación de archivos).
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Hipótesis de ataque]: el equipo desarrolla hipótesis sobre cómo ocurrió el incidente: vía externa, interna, #[i malware], ingeniería social, etc.
    
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img9.jpg', alt="Imagen decorativa")
          .row.justify-content-center(numero="3" titulo="Procedimientos 3")
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Análisis profundo:] herramientas forenses especializadas que permiten recuperar archivos borrados, analizar vectores de ataque y rastrear movimientos laterales dentro de la red.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Correlación de eventos:] se unen evidencias de distintos sistemas para reconstruir la cronología del ataque o fuga de datos.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Identificación de responsables:] en la medida de lo posible, se atribuye la acción a usuarios internos, externos o cuentas comprometidas.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Medidas contemporáneas:] se recomiendan y, si es posible, implementan controles para detener el ataque y evitar su repetición inmediata.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Remediación:] se limpia el entorno, reestableciendo sistemas, restaurando backups seguros e instalando parches.
               
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img10.jpg', alt="Imagen decorativa")
          .row.justify-content-center(numero="4" titulo="Procedimientos 4")
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Recuperación:] los sistemas vuelven a la normalidad bajo monitorización continua.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Evaluación de daños:] se analiza el alcance del incidente: impacto financiero, operativo, de reputación y legal.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Reporte forense:] se elabora un informe detallado, claro y entendible, que incluya cronología, técnicas usadas, descubrimientos, evidencia documental y conclusiones.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Validación legal:] si procede, se consulta con asesores legales para asegurar que la evidencia pueda usarse en juicios.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Presentación de evidencia:] la información se expone ante directivos, auditores, reguladores o autoridades judiciales si es necesario.
     
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img11.jpg', alt="Imagen decorativa")
          .row.justify-content-center(numero="5" titulo="Procedimientos 5")
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Retroalimentación y mejora:] el equipo revisa y documenta lecciones aprendidas, actualiza políticas y procedimientos.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Capacitación y concienciación:] se refuerzan entrenamientos internos sobre ciberseguridad y respuesta a incidentes.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Simulacros forenses:] se programan ejercicios regulares para mantener la eficacia del proceso.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Actualización de herramientas:] se evalúan y actualizan constantemente las soluciones de monitoreo y análisis.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Integración con gestión de riesgos:] los hallazgos se usan para ajustar el mapa de riesgos de la organización.
                
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img12.jpg', alt="Imagen decorativa")
          .row.justify-content-center(numero="6" titulo="Procedimientos 6")
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Seguimiento:] se monitorean posibles repercusiones, como intentos de represalia o campañas de desinformación.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Cumplimiento normativo:] se revisa y garantiza el cumplimiento de normativas como GDPR, LFPDPPP o PCI DSS.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Reportes externos:] si el incidente es mayor, se informa a autoridades regulatorias o sectoriales según obliga la ley.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Soporte a investigaciones externas:] se colabora con entes externos si el incidente involucra cibercrimen organizado.
                  li
                    i.fas.fa-circle
                    p.mb-0  #[b Cierre formal:] una vez finalizados todos los pasos, se documenta el cierre y el aprendizaje obtenido, asegurando la trazabilidad del proceso.
                
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img13.jpg', alt="Imagen decorativa")
    p.mb-4 Ahora bien, imagine una empresa en pleno funcionamiento cuando, de repente, suena una alarma: el equipo de monitoreo detecta movimientos sospechosos en uno de sus servidores críticos. Inicia entonces la siguiente historia de detectives digitales: 
    .tarjeta--BG013.px-lg-4.p-4.mb-5
      SlyderE(indicadores="izquierda")
        .row
          .col-lg-4
            p.text-white El primer héroe en actuar es el especialista del equipo forense, que activa el protocolo de emergencia. Rápidamente aísla los sistemas afectados para que el atacante no siga avanzando ni borre sus huellas.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen')
        .row
          .col-lg-4
            p.text-white Corren mensajes por la empresa: el área de ciberseguridad alerta a TI, legal y a la dirección. Todos saben que, a partir de ese momento, cada acción cuenta y debe ser documentada.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema1/img15.png', alt='Texto que describa la imagen')
        .row
          .col-lg-4
            p.text-white El equipo localiza las posibles fuentes de evidencia: servidores, correos, respaldos y hasta registros en la nube. Todo se recolecta siguiendo estrictas normas, haciendo copias exactas de los dispositivos y calculando “huellas digitales” (hashes) para demostrar que nada se ha alterado.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema1/img16.png', alt='Texto que describa la imagen')
        .row
          .col-lg-4
            p.text-white La sala se llena de pantallas mostrando registros y gráficos. Los analistas comienzan a revisar los logs, buscan patrones inusuales, conexiones extrañas y archivos borrados recientemente. Surge la hipótesis: el atacante usó credenciales internas y pasó de un sistema a otro buscando información sensible.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema1/img17.png', alt='Texto que describa la imagen')
        .row
          .col-lg-4
            p.text-white Al descubrir cómo entró y qué información tocó, el equipo elabora un mapa de lo ocurrido y prepara recomendaciones inmediatas: cerrar accesos vulnerados, restaurar sistemas de un respaldo seguro y reforzar la protección.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema1/img18.png', alt='Texto que describa la imagen')
        .row
          .col-lg-4
            p.text-white Mientras tanto, todo queda perfectamente documentado en informes: desde el primer aviso hasta la última acción de remediación. Cada pieza de evidencia tiene su etiqueta, cada copia su respaldo. Si la gravedad lo exige o la ley lo indica, el reporte se comparte con directivos o autoridades legales.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema1/img19.png', alt='Texto que describa la imagen')
        .row
          .col-lg-4
            p.text-white Finalmente, una junta reúne al equipo. Se repasan errores, aciertos y se actualizan los procedimientos para estar mejor preparados la próxima vez. Así, este ciclo de investigación deja enseñanzas y fortalece la cultura de seguridad digital en la organización.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema1/img20.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 De esta forma, el proceso forense, contado como una historia, se convierte en el escudo invisible que protege a la empresa contra amenazas y le da la capacidad de aprender, adaptarse y seguir adelante.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Normativa aplicable en el análisis de evidencia digital
    p.mb-4 El análisis de evidencia digital se rige por diversas normativas internacionales y nacionales, así como por estándares técnicos, ampliamente reconocidos en el ámbito forense. Estos marcos normativos buscan garantizar la validez, integridad y admisibilidad de la evidencia en procesos legales o administrativos. Los principales son: 
    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5.p-4(titulo="Normas ISO/IEC" :icono="require('@/assets/curso/temas/tema1/img24.svg')")
        .row.justify-content-center
          .col-lg-5.col-10.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/img21.jpg', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul
              li
                i.fas.fa-angle-right
                p.mb-0 #[b ISO/IEC 27037:2012:] establece directrices para la identificación, recolección, adquisición y preservación de evidencia digital, asegurando un tratamiento adecuado desde el inicio del proceso.
              li
                i.fas.fa-angle-right
                p.mb-0 #[b ISO/IEC 27042:2015:] proporciona lineamientos específicos para el análisis e interpretación de evidencia digital, asegurando que los resultados sean trazables y reproducibles.
              li
                i.fas.fa-angle-right
                p.mb-0 #[b ISO/IEC 27043:2015:] detalla los principios y procesos para la investigación de incidentes de seguridad de la información, incluyendo el análisis forense.
              li
                i.fas.fa-angle-right
                p.mb-0 #[b ISO/IEC 27041:2015:] establece directrices sobre la garantía de idoneidad y eficacia de los métodos y herramientas utilizadas en investigaciones digitales.

      .py-4.py-md-5.p-4(titulo="Regulaciones y estándares tecnológicos" :icono="require('@/assets/curso/temas/tema1/img25.svg')")
        .row.justify-content-center
          .col-lg-5.col-10.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/img22.jpg', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul
              li
                i.fas.fa-angle-right
                p.mb-0 #[b RFC 3227:] recoge directrices para la recopilación de evidencia digital, especialmente sobre el orden de adquisición y la integridad de los datos.
              li
                i.fas.fa-angle-right
                p.mb-0 #[b Protocolos institucionales:] muchas organizaciones y entidades gubernamentales desarrollan protocolos internos basados en estas normas internacionales, adaptados a su contexto legal y operativo.
      .py-4.py-md-5.p-4(titulo="Marco legal nacional (ejemplo Colombia y países hispanoamericanos)" :icono="require('@/assets/curso/temas/tema1/img26.svg')")
        .row.justify-content-center
          .col-lg-5.col-10.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/img23.jpg', alt='Texto que describa la imagen')
          .col-lg-7
            ul.lista-ul
              li
                i.fas.fa-angle-right
                p.mb-0 #[b Leyes de Comercio Electrónico, Ley de Protección de Datos, Código Procesal Penal y disposiciones sobre delitos informáticos:] contemplan reglas para la obtención y valoración de evidencia digital en procesos judiciales.
              li
                i.fas.fa-angle-right
                p.mb-0 #[b Cadena de custodia:] registros formales y procedimientos para documentar, transportar y manipular la evidencia digital conforme a la ley y a estándares reconocidos.
</template>

<script>
export default {
  name: 'Tema1',
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
