<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar y reforzar el conocimiento adquirido sobre el análisis forense y profesionalización, teniendo en cuenta los procesos en ciberseguridad.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La ciberseguridad solo protege computadoras y no datos ni redes.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. La ciberseguridad protege computadoras, datos, redes y otros dispositivos frente a amenazas digitales.',
          mensaje_incorrecto:
            'Incorrecto. La ciberseguridad abarca la protección de computadoras, datos y redes.',
        },
        {
          id: 2,
          texto:
            'El origen de la ciberseguridad está ligado a la conexión de computadoras y el nacimiento de las redes.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La ciberseguridad surge a partir del desarrollo de redes informáticas entre los años 50 y 60.',
          mensaje_incorrecto:
            'Incorrecto. La ciberseguridad surgió con las primeras redes y conexiones de computadoras.',
        },
        {
          id: 3,
          texto:
            'Una de las características clave de la ciberseguridad es la confidencialidad de la información.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La confidencialidad es una característica básica de la ciberseguridad, junto con la integridad y la disponibilidad.',
          mensaje_incorrecto:
            'Incorrecto. La confidencialidad, junto con integridad y disponibilidad, son pilares de la ciberseguridad.',
        },
        {
          id: 4,
          texto:
            'Las empresas no necesitan ciberseguridad si no manejan datos confidenciales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. Todas las empresas, independientemente del tipo de datos, están expuestas a riesgos y deben proteger su información y sistemas.',
          mensaje_incorrecto:
            'Incorrecto. Todas las empresas deben proteger su información y sistemas, sin importar el tipo de dato.',
        },
        {
          id: 5,
          texto: 'La Ley 1273 de 2009 regula delitos informáticos en Colombia.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La Ley 1273 es un marco legal clave para la protección frente a delitos informáticos en Colombia.',
          mensaje_incorrecto:
            'Incorrecto. Esta ley regula y sanciona delitos informáticos en el país.',
        },
        {
          id: 6,
          texto:
            'Los delitos informáticos solo incluyen el robo de información.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. Incluyen una variedad de actos como fraude, sabotaje, acceso no autorizado y malware.',
          mensaje_incorrecto:
            'Incorrecto. Involucran varios delitos como fraude, sabotaje, <em>hacking</em>, etc.',
        },
        {
          id: 7,
          texto:
            'Los ciberdelincuentes siempre actúan de manera aislada, sin formar grupos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. Los actores pueden ser individuos o grupos organizados (cibercriminales, hacktivistas, etc.).',
          mensaje_incorrecto:
            'Incorrecto. Existen tanto individuos como grupos organizados en el cibercrimen.',
        },
        {
          id: 8,
          texto:
            'El <em>phishing</em> es una técnica común para engañar a usuarios y robar datos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Es una técnica ampliamente utilizada para obtener información mediante el engaño.',
          mensaje_incorrecto:
            'Incorrecto. El <em>phishing</em> es una de las técnicas más comunes en ciberataques.',
        },
        {
          id: 9,
          texto:
            'La infraestructura tecnológica de una empresa solo comprende computadoras.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. Incluye <em>hardware, software</em>, redes, almacenamiento y procesos de gestión.',
          mensaje_incorrecto:
            'Incorrecto. Comprende <em>hardware, software</em>, redes, almacenamiento y más.',
        },
        {
          id: 10,
          texto:
            'El 5G y la inteligencia artificial son tendencias emergentes en tecnologías de la información en la actualidad.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Ambas figuran están entre las tendencias líderes para el entorno digital actual.',
          mensaje_incorrecto:
            'Incorrecto. Son tendencias clave para el futuro de las TI.',
        },
        {
          id: 11,
          texto:
            'Una adecuada gestión de incidentes implica solo identificar amenazas, sin necesidad de responder a ellas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. La gestión de incidentes incluye la identificación, respuesta y recuperación frente a amenazas.',
          mensaje_incorrecto:
            'Incorrecto. Se requiere identificar, responder y recuperarse de incidentes.',
        },
        {
          id: 12,
          texto:
            'El SOC es responsable de monitorear y responder a incidentes de seguridad en tiempo real.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. El Centro de Operaciones de Seguridad, se encarga del monitoreo y respuesta a incidentes en la organización.',
          mensaje_incorrecto:
            'Incorrecto. El SOC sí cumple esta función en la ciberseguridad organizacional.',
        },
        {
          id: 13,
          texto:
            'El análisis forense digital se limita a la recuperación de datos perdidos, sin investigar incidentes.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. Abarca recuperación, investigación y análisis de incidentes de seguridad.',
          mensaje_incorrecto:
            'Incorrecto. El análisis forense también investiga e identifica evidencias e incidentes.',
        },
        {
          id: 14,
          texto:
            'El marco NIST y la norma ISO/IEC 27005 son herramientas para la gestión de riesgos en seguridad de la información.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Ambos son marcos de referencia ampliamente utilizados en gestión de riesgos.',
          mensaje_incorrecto:
            'Incorrecto. Son estándares internacionales para la gestión de riesgos.',
        },
        {
          id: 15,
          texto:
            'La educación y capacitación en ciberseguridad no es necesaria para trabajar en el área.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. Es esencial estar en constante capacitación y formación para adaptarse a las nuevas amenazas y tecnologías.',
          mensaje_incorrecto:
            'Incorrecto. La formación es clave para desempeñarse en ciberseguridad.',
        },
        {
          id: 16,
          texto:
            'Las certificaciones como CISSP o CEH ayudan a demostrar competencias en ciberseguridad.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Certificaciones internacionales validan conocimientos y habilidades profesionales.',
          mensaje_incorrecto:
            'Incorrecto. Estas certificaciones son reconocidas en el ámbito profesional.',
        },
        {
          id: 17,
          texto:
            'El análisis de evidencia digital debe cumplir con normativas legales específicas en cada país.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Es necesario cumplir la normativa local o internacional para validar la evidencia.',
          mensaje_incorrecto:
            'Incorrecto. El cumplimiento legal es obligatorio en el análisis forense.',
        },
        {
          id: 18,
          texto:
            'El <em>ransomware</em> es un tipo de malware que bloquea el acceso a los datos hasta que se paga un rescate.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Es una de las formas más comunes y peligrosas de cibercrimen hoy día.',
          mensaje_incorrecto:
            'Incorrecto. El <em>ransomware</em> funciona cifrando datos y pidiendo rescate por ellos.',
        },
        {
          id: 19,
          texto:
            'Solo las grandes empresas pueden ser víctimas de ciberataques.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. Personas, pymes y grandes empresas pueden ser blanco de ataques cibernéticos.',
          mensaje_incorrecto:
            'Incorrecto. Todas las organizaciones y usuarios pueden ser víctimas.',
        },
        {
          id: 20,
          texto:
            'La gestión de riesgos de seguridad de la información ayuda a identificar, evaluar y tratar posibles amenazas.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Es un proceso central para prevenir daños en las organizaciones.',
          mensaje_incorrecto:
            'Incorrecto. Ayuda precisamente a identificar y gestionar amenazas a la información.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicitaciones, ha superado la actividad, demostrando sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
