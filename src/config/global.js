export default {
  global: {
    componenteFormativo:
      'Análisis forense y profesionalización en ciberseguridad',
    descripcionCurso:
      'La profesionalización en la ciberseguridad, es clave para garantizar que los especialistas cuenten con la formación, certificaciones y competencias técnicas y éticas necesarias para desarrollar su labor con efectividad y rigor. Además, la gestión de riesgos y la actualización constante son elementos críticos para enfrentar las amenazas en un entorno digital en constante evolución. Esta combinación fortalece la seguridad organizacional y promueve la confianza en los usuarios finales. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Análisis de evidencia digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos fundamentales del análisis forense digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Proceso forense en ciberseguridad organizacional',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normativa aplicable en el análisis de evidencia digital',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de riesgos de seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación, evaluación y tratamiento de riesgos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Relación entre análisis forense y gestión de riesgos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Herramientas y marcos para la gestión de riesgos (NIST, ISO/IEC 27005)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Enfoques profesionales en la ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Panorama del mercado profesional de la ciberseguridad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Certificaciones en ciberseguridad: tipos y requisitos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Educación formal y rutas de formación en ciberseguridad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sensibilización de usuarios sobre ciberseguridad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_21720208_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Gestión de riesgos de seguridad de la información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 12 de junio). <em>Tratamiento de riesgos de ciberseguridad</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=X-hUaV0nsnk&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '2.1 Identificación, evaluación y tratamiento de riesgos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, 24 de junio). <em>Fundamentos para la gestión del riesgo de ciberseguridad</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=rIInW1zOe_I&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '2.1 Identificación, evaluación y tratamiento de riesgos',
      referencia:
        'Grupo Fraga. (2022, 1 de agosto). <em>Cómo realizar la evaluación de riesgos según la ISO 27001</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9w7O4in-Oos&ab_channel=GrupoFraga',
    },
    {
      tema: '2.2 Relación entre análisis forense y gestión de riesgos.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, 1 de junio). <em>Gestión del riesgo</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=KU4j7Cio1rk&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema:
        '2.3 Herramientas y marcos para la gestión de riesgos (NIST, ISO/IEC 27005)',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, 30 de septiembre). <em>Análisis, valoración de riesgos y controles de ciberseguridad: riesgos</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=QLWc_y6HMuA&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: 'Análisis forense digital',
      significado:
        'disciplina que se encarga de identificar, recolectar, preservar, analizar y presentar evidencia digital, con el fin de garantizar su integridad y validez legales para la investigación de incidentes o delitos informáticos.',
    },
    {
      termino: 'Cadena de custodia',
      significado:
        'proceso riguroso que documenta cada manipulación y traslado de la evidencia digital, asegurando su autenticidad y admisibilidad en procedimientos legales.',
    },
    {
      termino: 'Certificación CISSP',
      significado:
        'credencial reconocida internacionalmente para profesionales que demuestran experiencia y conocimientos en gestión y arquitectura de seguridad de la información.',
    },
    {
      termino: 'Evidencia digital',
      significado:
        'información en formato electrónico almacenada en dispositivos digitales, que puede ser utilizada como prueba en investigaciones o procesos judiciales.',
    },
    {
      termino: 'ISO/IEC 27005',
      significado:
        'norma internacional que proporciona directrices metodológicas para la gestión de riesgos en seguridad de la información, flexible y adaptable a diferentes organizaciones.',
    },
    {
      termino: 'Microcertificaciones',
      significado:
        'cursos o certificaciones cortas y especializadas que permiten adquirir conocimientos específicos y actualización constante en determinadas áreas de ciberseguridad.',
    },
    {
      termino: 'Monitoreo continuo',
      significado:
        'proceso permanente de supervisión del estado de seguridad y efectividad de controles implementados para detectar incidentes o desviaciones.',
    },
    {
      termino: 'NIST Risk Management Framework (RMF)',
      significado:
        'marco de gestión de riesgos desarrollado por el Instituto Nacional de Estándares y Tecnología de EE. UU., que consta de etapas para categorizar, seleccionar, implementar, evaluar, autorizar y monitorear controles de seguridad.',
    },
    {
      termino: '<em>Pentesting</em> (Pruebas de penetración)',
      significado:
        'técnica ofensiva que consiste en simular ataques controlados para identificar vulnerabilidades en sistemas y redes informáticas.',
    },
    {
      termino: 'Preservación de evidencia',
      significado:
        'conjunto de acciones que garantizan que la información digital sea mantenida intacta y sin alteraciones desde su obtención hasta su presentación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Española de Normalización. (2021, 3 de diciembre). UNE-EN ISO/IEC 27701 Gestión de la Privacidad de la Información. UNE.',
      link:
        'https://www.une.org/la-asociacion/sala-de-informacion-une/notas-de-prensa/publicada-la-norma-une-en-isoiec-27701-para-la-gestion-de-la-privacidad-de-la-informacion/',
    },
    {
      referencia:
        'Caballero Velasco, M. Á. (2015). El libro del hacker. Anaya Multimedia.',
      link: '',
    },
    {
      referencia:
        'Cano, J. E. (2018). Ciberseguridad y protección de datos personales en Colombia. Ediciones Jurídicas Gustavo Ibáñez.',
      link: '',
    },
    {
      referencia:
        'Ferrer, E. A. (2023). Estudios de cibercrimen. Ediciones Olejnik.',
      link: '',
    },
    {
      referencia:
        'Gómez, L. A. & Rodríguez, M. P. (2020). Gestión de riesgos en seguridad informática: Enfoque práctico para organizaciones colombianas. Editorial Universidad del Rosario.',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology (NIST). (2024, 26 de febrero). The NIST Cybersecurity Framework (CSF) 2.0.',
      link: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
    },
    {
      referencia:
        'Paredes, A. R. Z., Quevedo, I. M. S., & Chalacán, L. J. M. (2020). Seguridad informática en las PyMES de la ciudad de Quevedo. Journal of Business and Entrepreneurial Studies: JBES, 4(2), 232-241.',
      link: '',
    },
    {
      referencia:
        'Pérez, C. A., & González, F. J. (2021). Seguridad en redes y criptografía aplicada. Ediciones de la U.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier Eduardo Diaz Machuca ',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },

        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
