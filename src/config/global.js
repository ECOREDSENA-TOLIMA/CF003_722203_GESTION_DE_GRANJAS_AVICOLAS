export default {
  global: {
    componenteFormativo: 'Estrategias y análisis de mercados',
    descripcionCurso:
      'El análisis de mercado permite conocer el entorno al que enfrenta la empresa; este parte del estudio detallado del cliente, implementando herramientas y métodos de investigación con el fin de conocer sus expectativas y necesidades. La formulación de un plan de mercadeo dará respuesta a las necesidades del entorno a través del diseño de estrategias y su cuantificación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        titulo: 'Entorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Análisis del entorno',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fuentes de información',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan estratégico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cliente / Consumidor',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Plan de mercado',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Informe de resultados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Diseño del plan de mejora',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Acciones',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Puntos críticos de control',
            hash: 't_5_3',
          },
        ],
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_722203.zip',
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
      tema: 'Plan de marketing: diseño, implementación y control',
      referencia:
        'Hoyos Ballesteros, R. (2018). Plan de marketing: con enfoque en gerencia de mercadeo. Ecoe Ediciones.',
      tipo: 'Libro',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w24257w/LibroPlandeMarketing-1-92.pdf',
    },
    {
      tema: 'Interpretación indicadores de gestión',
      referencia:
        'de Recursos Educativos Digitales SENA, E. [@EcosistemaSENAVirtual]. (2022, mayo 20). Interpretación de indicadores de gestión (KPI). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nCUYv5oPwJY',
    },
  ],
  glosario: [
    {
      termino: 'Análisis FODA',
      significado:
        'es el análisis de cuatro variables (oportunidades, amenazas, fortalezas y debilidades. Permite analizar las características de la empresa en relación con el medio que la envuelve, compensando las oportunidades con las amenazas y las fortalezas con las debilidades.',
    },
    {
      termino: 'Consumidor',
      significado:
        'se conoce también como cliente o usuario, es toda aquella persona natural o jurídica que realice un pago a cambio de recibir un beneficio.',
    },
    {
      termino: 'Estrategia de mercado',
      significado:
        'diseño y creación de acciones que llevan al cumplimiento del objetivo trazado, logrando incrementar las ventas y una ventaja competitiva.',
    },
    {
      termino: 'Información demográfica',
      significado:
        'información referente al tamaño y a las características de una población o público objetivo como el género, edad, nivel económico, preferencias personales, etc.',
    },
    {
      termino: 'Segmento',
      significado:
        'subgrupo de personas que muestran características similares entre ellos y comparten algunas necesidades y atributos en especial.',
    },
    {
      termino: 'SIM',
      significado:
        'acrónimo de Sistema de Investigación de Mercados, pero también de Sistema de Información de Mercados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Capdepón, M (2018). Técnicas en Investigación de Mercados - Fuentes de Información. [Archivo de video] youtube',
      link: 'https://www.youtube.com/watch?v=22Edu6E9ibw',
    },
    {
      referencia: 'Gil Juárez, A. (2016). El consumidor. Editorial UOC.',
      link: 'https://www.academia.edu/186815/El_consumidor',
    },
    {
      referencia:
        'Hoyos Ballesteros, R. (2018). Plan de marketing : con enfoque en gerencia de mercadeo. Ecoe Ediciones.',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w24257w/LibroPlandeMarketing-1-92.pdf',
    },
    {
      referencia:
        'Marketing estratégico - Alpha CLOUD. (s/f). Alphaeditorialcloud.com. Recuperado el 27 de julio de 2023, de',
      link:
        'https://www.alphaeditorialcloud.com/library/publication/marketing-estrategico-desde-el-paradigma-esencial',
    },
    {
      referencia:
        'Sánchez Herrera, J. Merino Sanz, M. J. & Santesmases Mestre, M. (2013). Fundamentos de marketing. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://www.academia.edu/40557434/Fundamentos_de_MERCADOTECNIA',
    },
    {
      referencia: 'Sevilla, P. (2017). Pirámide de Maslow Economipedia.com',
      link: 'https://economipedia.com/definiciones/piramide-de-maslow.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
