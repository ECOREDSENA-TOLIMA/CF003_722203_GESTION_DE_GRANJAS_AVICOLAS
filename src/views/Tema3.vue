<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Plan estratégico 

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
          .col-md-11.ps-lg-4
            p El plan estratégico de <em>marketing</em> o el plan de mercadeo están enfocados a cumplir los mismos objetivos, los cuales están encaminados a diseñar estrategias para poder captar la atención de clientes, consumidores finales y futuros clientes para así ganar participación en el mercado. Es importante conocer al consumidor al que se quiere llegar, identificar las características, atributos y cualidades que debe tener el cliente para formular un buen plan de mercado, de lo contrario no servirá de nada el trabajo que se realice. 
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema3/img-1.png" data-aos="fade-left" style="max-width: 400px")

    Separador 

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 3.1 Cliente/ Consumidor 

    .row.justify-content-center.align-items-center.mb-5 
      .col-md-4.col-lg-2.col-12.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema3/decorador-1.svg", alt="")
      .col-md-8.col-lg-9.col-12(data-aos="fade-down")
        p El cliente es cualquier persona natural o jurídica que compra un producto o recibe un servicio por parte de la empresa, lo que hace que las partes mantengan una relación comercial y que la empresa dirija sus esfuerzos a satisfacer sus necesidades al diseñar e implementar estrategias para lograr una compra habitual. 
    
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 Comportamiento del consumidor  

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-md-7.p-4(style="background-color: #ABFFFF")(data-aos="fade-left")
        p La toma de decisión de compra del cliente o consumidor viene influenciada por un deseo, un impulso o una necesidad, siendo esta última la más común al momento de influir en la decisión final. El mercadeo se encarga de investigar las motivaciones y necesidades de los clientes para traducir los deseos de estos y poder identificar qué es exactamente lo que buscan.   
        p Teniendo en cuenta lo anterior, no se puede seguir adelante sin hacer referencia a la pirámide de las necesidades de Abraham Maslow, quien desde su primera aparición en 1943 hizo el esfuerzo para hacer entender que las necesidades del ser humano están jerarquizadas en distintos niveles en los cuales se va avanzando a medida que se suple el nivel anterior. De esta manera, el sector productivo concentra sus esfuerzos en las personas que logran cubrir las necesidades sociales, ya que son aquellos que por poder adquisitivo podrán tomar una decisión de compra o no.  

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 3.
        span <em>Pirámide de las necesidades Maslow</em>
      img.d-md-block.mb-2(src="@/assets/curso/temas/tema3/img-3.svg" data-aos="fade-left")
      figcaption Nota. Tomado de https://economipedia.com/definiciones/piramide-de-maslow.html

    p.mb-5 La pirámide de Maslow muestra las necesidades del ser humano por niveles siendo los 2 primeros las necesidades básicas y que por naturaleza deben ser cubiertas, cuando se pasa al 3 nivel (Necesidades Sociales), el mercadeo empieza a centrar sus esfuerzos en el diseño de estrategias para que el cliente sienta la necesidad de compra, de esta manera, la adquisición de bienes o servicios hará que se sienta satisfecho y se generan las necesidades de los 2 últimos niveles, generando un proceso cíclico donde las estrategias se vuelven el elemento fundamental para incitar al proceso de compra por parte de los consumidores.  
    
    .col-xl-10.mx-auto.mb-5
      .tarjeta.color-primario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema1/decorador-web.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p Para profundizar sus conocimientos acerca del tema anteriormente mencionado ingrese al siguiente enlace.

              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="('https://economipedia.com/definiciones/piramide-de-maslow.html')" target="_blank")
                  span Ir al sitio web
                  i.fas.fa-link

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 Influencias del consumidor  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-7.mb-4.mb-md-0
        p Las variables que influencian la decisión del consumidor son vistas desde un punto de vista psicológico, que ayuda al mercadeo a generar estrategias para que finalmente se genere el proceso de compra, por eso la referencia anterior de la pirámide de Maslow, sin embargo, estas no son las únicas variables que influyen porque existen otras que intervienen en el proceso, estas son:  
        ul.lista-ul.mb-2(data-aos="fade-down")
          li.mb-0
            i.fas.fa-check
            | <strong>El entorno:</strong> influenciadas por las tradiciones familiares, los gustos de los grupos sociales (amigos, trabajo, estudio) que frecuenta la cultura a la cual pertenece y los líderes de opinión que siga según sus gustos.
          br
          li.mb-0
            i.fas.fa-check
            | <strong>Preferencias individuales:</strong> la forma como ha crecido cada ser humano influye en las decisiones que toma a lo largo de la vida, por ello, para el mercadeo no debe ser ajeno conocer a su cliente o consumidor desde aspectos como la personalidad, las creencias, los valores y su estilo de vida.

      .col-md-4.mb-4.mb-md-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema3/img-4.png', alt='')

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 Conducta de compra 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-5.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Identificados en el apartado anterior, los factores que influencian el comportamiento de compra, se debe hacer referencia al proceso de la decisión final para pagar por el bien o servicio deseado. Para esto se hace necesario comprender que actualmente los clientes o consumidores compran más que un objeto o servicio, pues ahora la decisión se basa en la experiencia que se pueda generar, el valor agregado que entreguen las empresas del mercado y la manera en que se presta atención al cliente. Con el acceso a la tecnología e información, actualmente se suelen hacer comparativos para poder decidir a quién comprar y a quién no. 

    p.mb-5 Lo primero que hace el cliente es identificar la necesidad que tiene, buscar información respecto a las empresas posibles de suplir la necesidad, comparar quien ofrece una experiencia significativa y diferente, y tomar la decisión de compra. Es importante resaltar que esta puede ser de manera inmediata o postergada según el interés del cliente. Para finalizar el proceso de compra se debe generar un acompañamiento por la empresa para conocer la percepción del cliente en cuanto al nivel de satisfacción: un cliente satisfecho generara un proceso de recompra y la llegada de más clientes, un cliente insatisfecho hará que se pierda su fidelización y la de algunos clientes más.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 4.
        span <em>Proceso decisión de compra </em>
      img.d-md-block(src="@/assets/curso/temas/tema3/img-6.svg" data-aos="fade-left")

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 Segmento de mercado

    .row.justify-content-center.align-items-center.mb-5 
      .col-md-4.col-lg-2.col-12.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema3/decorador-2.svg", alt="")
      .col-md-8.col-lg-9.col-12(data-aos="fade-down")
        p La segmentación de mercado es la división de este en grupos homogéneos respecto a algunos criterios como la edad, género, gustos, ubicación geográfica, entre otros con el fin de implementar posteriormente una investigación de mercado para conocer sus preferencias y gustos a la hora de tomar la decisión de compra para finalizar con el diseño de un plan de mercadeo. 

    .col-xl-10.mx-auto.mb-5
      .tarjeta.color-primario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Segmentación de mercados
                p.text-small Para ampliar su conocimiento acerca de la segmentación de mercado puede acceder al siguiente video. 

              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="('http://www.youtube.com/watch?v=rndPdop69X0')" target="_blank")
                  span Ir al sitio web
                  i.fas.fa-link

    p Aplicar la investigación al segmento de mercado definido por la empresa es fundamental para asegurarse de que las estrategias planificadas puedan satisfacer las necesidades de los clientes y consumidores finales. En la actualidad, es importante comprender que los clientes no solo buscan satisfacer sus necesidades con los atributos del producto o la calidad del servicio, sino que también anhelan vivir una experiencia, encontrar valor agregado e identificar los beneficios y ventajas que ofrecen las empresas en el sector.
    p.mb-5 Según Kotler y otros (2006), la implementación exitosa de la segmentación del mercado involucra un proceso compuesto por tres fases esenciales:

    .row.justify-content-center.align-items-center
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema3/numero_1.svg' alt='AvatarTop')
          .tarjeta.tarjeta--custom
            .p-4
              p <strong>Segmentación de mercado propiamente dicha:</strong> etapa en la que se identifican criterios y variables que permiten dividir el mercado en grupos o segmentos de consumidores y definir el perfil de cada uno de estos grupos. Por ejemplo, una empresa productora de embutidos podría definir en este paso si quiere enfocar su producto a la población de una localidad o al municipio.  

      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema3/numero_2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--custom
            .p-4
              p <strong>Definición del público objetivo:</strong> posterior a la segmentación, realiza una valoración de cada segmento, selecciona aquel al cual se va a dirigir y decide la estrategia para este. La elección puede obedecer a diferentes criterios, pero siempre se parte del bien a ofrecer; siguiendo con el ejemplo anterior, en este punto puede definirse si la venta estará dirigida a los pequeños comercios como tiendas o minimercados o se hará distribución directa a los consumidores finales. 

      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema3/numero_3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--custom
            .p-4
              p <strong>Posicionamiento del producto en el mercado:</strong> finalmente la empresa decide cuál es el posicionamiento adecuado para el producto del mercado objetivo elegido y diseña el plan de mercadeo con el que lo comercializará.  Si en el caso anteriormente expuesto se define vender a las tiendas y minimercados, en este punto se determina si se abordará con una estrategia publicitaria agresiva, con la contratación de impulsadores u ofreciendo muestras gratuitas; o, por el contrario, se buscará un posicionamiento más orgánico y lento que permita cubrir la demanda del producto con la capacidad de producción disponible. 

    Separador 

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 3.2 Plan de mercado  

    .row
      .col-12.col-md-4.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema3/img-7.png', alt='Texto que describa la imagen')
      .col-12.col-md-7.mt-4
        .cajon-b.color-acento-contenido.p-3.mb-5
          p.mb-0 Lo primero que se debe saber es que plan de mercado es un documento donde es necesario plasmar cuáles son los objetivos que persigue la empresa, las acciones o estrategias a implementar y el presupuesto para poder llevarlas a cabo. La utilidad de este plan es que la meta se establece desde el inicio de forma clara y debe ser alcanzable y las estrategias como el camino para lograrla. El plan es pensado para funcionar de forma anual; cada año nuevo trae consigo su nuevo plan. 
          p El plan de mercado es vital en el funcionamiento de la empresa, ya que conlleva consigo una medición de las actividades desarrolladas, la satisfacción del cliente y la planeación de actividades para responder a las necesidades actuales del mercado y la comunicación con clientes, consumidores y clientes futuros.  

    .col-xl-10.mx-auto.mb-5
      .tarjeta.color-primario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema1/decorador-web.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p En el siguiente enlace encuentra una página para profundizar en el diseño de plan de mercadeo.

              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="('https://www.inboundcycle.com/blog-de-inbound-marketing/que-es-un-plan-de-marketing-y-como-hacer-uno')" target="_blank")
                  span Ir al sitio web
                  i.fas.fa-link

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 5.
        span <em>Plan de mercadeo, objetivos e importancia.</em>
      img.d-md-block(src="@/assets/curso/temas/tema3/img-8.svg" data-aos="fade-left")

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 Estructura plan de mercado  

    p.mb-5 Para que el plan de mercado pueda desarrollarse de manera correcta se considera la siguiente estructura, la cual está dividida en 3 grandes áreas, así será más fácil el cumplimiento de los objetivos: 

    .row.justify-content-center.align-items-center
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar1-b.mb-5
          .tarjeta1.tarjeta--custom1
            .p-4
              p <strong><em>Marketing</em> analítico:</strong> es esencial llevar a cabo la investigación y análisis de información relacionada con la empresa, el mercado y la competencia. Esta investigación se basa en grupos principales, que son el análisis interno y externo, el estudio de mercado y el análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas).
              ul.lista-ul.mb-2(data-aos="fade-down")
                li.mb-0
                  i.fas.fa-check
                  | <strong>Análisis interno y externo:</strong> se analizan las variables que influyen en el desarrollo de la actividad comercial.  
                br
                li.mb-0
                  i.fas.fa-check
                  | <strong>Estudio de mercado:</strong> se debe identificar las necesidades reales del mercado de esta manera se definen los atributos del producto, el valor agregado, experiencia que genera, se define estrategia para definir el precio, se hace la definición de estrategias para ingresar al mercado competidor y se define el canal de distribución con el cual llegarán al consumidor final.  
                br
                li.mb-0
                  i.fas.fa-check
                  | <strong>FODA (Fortalezas, Oportunidades, Debilidades y Amenazas):</strong> la implementación de la matriz hace un ejercicio para poder identificar las <strong>fortalezas y debilidades</strong> de la empresa de manera interna, en este análisis se deben tener en cuenta variables que son controlables por la organización como la disponibilidad de recursos económicos, personal capacitado, calidad del producto o servicio, capacidad de endeudamiento o acceso a tecnología.  Así mismo, se identifican las <strong>oportunidades y amenazas</strong>   del mercado que no se pueden controlar, entre estas variables se encuentran las condiciones climáticas para el desarrollo de algún proceso, situación de orden público, impuestos, alza de precios de materia prima, estrategias de la competencia, entre otros. 

    p.mb-5 Este primer paso del estudio de mercado es el más importante, ya que entrega información clara y objetiva de la situación actual de la empresa en el mercado respecto a la competencia, a la situación socioeconómica y demarca la intención de los objetivos a cumplir.

    .row.justify-content-center.align-items-center
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar2-b.mb-5
          .tarjeta2.tarjeta--custom2
            .p-4
              p <strong><em>Marketing</em> analítico:</strong> es esencial llevar a cabo la investigación y análisis de información relacionada con la empresa, el mercado y la competencia. Esta investigación se basa en grupos principales, que son el análisis interno y externo, el estudio de mercado y el análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas).
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/temas/tema1/decorador-web.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 <em>Marketing</em> analítico y estratégico 
                        p Para complementar sobre el <em>marketing</em> analítico y estratégico se le recomienda consultar el siguiente documento. 

                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_ 2._Marketing_analitico_y_estratégico.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-download

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar3-b.mb-5
          .tarjeta3.tarjeta--custom3
            .p-4
              p <strong><em>Marketing</em> operativo:</strong> en este punto se desarrolla el grueso del plan, aquí se deben concentrar el diseño, implementación y costo de las estrategias para lograr lo que se planteó al inicio de este. Se identifica las necesidades de recursos y se determina sí debe existir financiación externa.
              p El <em>marketing</em> operativo se desarrolla en 4 pasos donde se recoge todos los elementos analizados del <em>marketing</em> analítico y estratégico, es el momento de actuar y decidir la implementación del plan, los 4 pasos son los siguientes: 
              
              ul.lista-ul.mb-2(data-aos="fade-down")
                li.mb-0
                  i.fas.fa-check
                  | <strong>4p:</strong> en este punto se desarrolla el grueso del plan, aquí se deben concentrar el diseño, implementación y costo de las estrategias para lograr lo que se planteó al inicio de este. Se identifica las necesidades de recursos y se determina sí debe existir financiación externa.
                br
                li.mb-0
                  i.fas.fa-check
                  | <strong>Comunicación:</strong> la empresa define los medios por los cuales comunicará la estrategia diseñada, debe tener claro según la estrategia diseñada cuál será la forma de llegar a sus clientes, estas pueden ser el mercadeo tradicional como pautas, promociones, patrocinios o mercadeo digital como <em>marketing web,</em> social media y mobile.
                br
                li.mb-5
                  i.fas.fa-check
                  | <strong>Puesta en marcha:</strong> se debe generar un cronograma de actividades según cada uno de los objetivos, el cronograma debe ser anual y deben tener fecha de inicio, de finalización y responsables, así mismo, es indispensable definir cada una de las estrategias planteadas, estas deben ser claras, medibles y relacionarse con cada objetivo a cumplir. Un ejemplo de la manera de cómo organizar el cronograma se muestra a continuación:
              
              .titulo-sexto.color-primario(data-aos="fade-right")
                h5 Tabla 2.
                span <em>Diseño cronograma de actividades</em>
              img.d-md-block.mb-2(src="@/assets/curso/temas/tema3/img-9.svg" data-aos="fade-left")
              figcaption.mb-5 Nota. Tomado de “Propuesta plan de mercadeo para una empresa agro avícola”. Hoyos y Henao, (2020).
              
              ul.lista-ul.mb-2(data-aos="fade-down")
                li.mb-0
                  i.fas.fa-check
                  | <strong>Presupuesto:</strong> todo lo que se planee en el cronograma de actividades deberá tener asignado un presupuesto, esto debe quedar establecido desde la planeación, de tal manera que si no se cuenta con los recursos la empresa pueda buscar fuentes de financiación antes de la puesta en marcha, si esto no se logra los procesos quedarán inconclusos y no se cumplirán los objetivos. La dirección y área de mercadeo deben ser muy cuidadosos a definir las actividades, las cuales son la recopilación de todo el trabajo hecho del <em>marketing</em> estratégico hacia atrás, pues cualquier detalle que quede por fuera, es una representación monetaria que puede tener un impacto muy grande y negativo en la organización.  

    TabsB.color-primario.mb-5
      .py-4.py-md-5.px-5(titulo="<em>Marketing</em> operativo ")
        .row
          .col-md-12.mb-4.mb-md-0
            p Implica la ejecución de actividades diarias, como la gestión de productos, precios, distribución y promoción, con el objetivo de alcanzar los resultados comerciales deseados. El <em>marketing</em> operativo es esencial para lograr una presencia efectiva en el mercado y satisfacer las necesidades de los clientes de manera eficiente. 

      .py-4.py-md-5.px-5(titulo="Paso 1")
        .row
          .col-md-12.mb-4.mb-md-0
            p El <em>marketing mix,</em> también conocido como las "4 P", es un concepto fundamental en el primer paso del <em>marketing</em> operativo. Se refiere a la combinación estratégica de cuatro elementos clave que una empresa debe considerar al desarrollar su estrategia de <em>marketing:</em> Producto (o servicio), Precio, Plaza (o distribución) y Promoción. El <em>marketing mix</em> busca adaptar estos elementos de manera óptima para satisfacer las necesidades del objetivo de mercado y alcanzar los objetivos comerciales establecidos. 

      .py-4.py-md-5.px-5(titulo="Paso 2")
        .row
          .col-md-12.mb-4.mb-md-0
            p La comunicación se refiere al segundo paso esencial que implica transmitir mensajes claros y persuasivos sobre el producto o servicio de una empresa al objetivo público. Es el proceso mediante el cual la empresa utiliza diferentes herramientas de comunicación, como publicidad, promoción de ventas, relaciones públicas y <em>marketing</em> digital, para informar, persuadir y recordar a los consumidores acerca de su oferta. La comunicación efectiva en el operativo de <em>marketing</em> permite crear conciencia de marca, generar interés en el producto o servicio y, en última instancia, impulsar la acción de compra por parte de los clientes. 

      .py-4.py-md-5.px-5(titulo="Paso 3")
        .row
          .col-md-12.mb-4.mb-md-0
            p La puesta en marcha se refiere a la fase en la que se desarrolla un cronograma detallado de actividades y se ejecutan las acciones necesarias para alcanzar los objetivos propuestos. 
            p Durante esta etapa, se asignan responsabilidades, se definen plazos y se implementan las estrategias y tácticas de <em>marketing.</em> Además, se fortalecieron indicadores clave de rendimiento (KPI) para medir el progreso y el éxito de cada acción. 
            p La puesta en marcha es fundamental para asegurar que todas las actividades se realicen de manera oportuna y eficiente, garantizando así el logro de los objetivos planteados en el plan de <em>marketing.</em> 

      .py-4.py-md-5.px-5(titulo="Paso 4")
        .row
          .col-md-12.mb-4.mb-md-0
            p El presupuesto se refiere al cuarto paso crucial que implica la reserva de recursos financieros y recursos humanos necesarios para llevar a cabo las actividades de <em>marketing</em> planificadas en la puesta en marcha. 
            p Es en esta etapa que se determina el monto de dinero disponible para cada actividad de <em>marketing,</em> así como los recursos humanos necesarios para llevar a cabo dichas tareas. El presupuesto es esencial para controlar los costos y asegurarse de que los recursos se utilicen de manera eficiente y efectiva para lograr los objetivos de <em>marketing</em> establecidos. 
            p Al establecer un presupuesto claro y realista, se garantiza que la estrategia de <em>marketing</em> se implemente de manera adecuada, y permite tomar decisiones informadas en cuanto a la priorización de actividades y el enfoque de recursos para obtener el máximo rendimiento de las inversiones de <em>marketing.</em> 

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 Evaluación y seguimiento

    .row.justify-content-around.align-items-center.mb-5
      .col-5  
        figure
          img(src="@/assets/curso/temas/tema3/img-10.png")
      .col-7
        .caja.color-primario-b.p-4.mb-5
          p El plan de mercado debe tener un cronograma de actividades según lo establecen los pasos del <em>marketing</em> operativo, en él, se define tiempo de inicio, finalización y responsables, de este modo, el mismo plan se convierte en la hoja de ruta para hacer la evaluación; algunos autores reconocen este proceso como auditoría de <em>marketing.</em> Esta auditoría permite hacer una evaluación amplia y sistemática de los objetivos, las estrategias y actividades implementadas, además de proporcionar datos a tener en cuenta para elaborar el plan del año siguiente. 
          p Por ello, se hace necesario definir los mecanismos de control, los cuales se clasifican en 3 tipos de controles básicos: 

        ul.lista-ul.mb-2(data-aos="fade-down")
          li.mb-0
            i.fas.fa-check
            | <strong>Control preventivo:</strong> se realiza antes del desarrollo de las actividades, anticipándose de alguna manera a futuros problemas. 
          br
          li.mb-0
            i.fas.fa-check
            | <strong>Control concurrente:</strong> se realiza en el momento que se está desarrollando la actividad, permite corregir los errores de forma inmediata antes de que tengan un impacto negativo. 
          br
          li.mb-0
            i.fas.fa-check
            | <strong>Control de retroalimentación:</strong> se realiza luego de finalizada la actividad, en este caso ya no se puede hacer ningún cambio ni corregir los problemas presentados, pero abre la puerta para implementar un plan de mejora para el desarrollo de actividades futuras. 
          br
          li.mb-0
            i.fas.fa-check
            | <strong>Plan de contingencia:</strong> dentro de la evaluación y seguimiento como parte del control se sugiere diseñar también un plan de contingencia, también conocido como plan de emergencia. El diseño de este plan permitirá reaccionar de forma inmediata ante imprevistos que se presenten en la ejecución del plan de mercado y que pueden afectar en gran medida a la empresa de manera negativa. 

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 Indicadores de gestión  

    .row.mb-4(data-aos="fade-down-left")
      .col-12.col-md-9.col-lg-10
        p.mb-3 La manera en la que se debe evaluar y medir si la empresa está cumpliendo las metas y objetivos propuestos es a través de los KPI (indicadores de gestión o indicador de desempeño). Los KPI se convierten en los instrumentos de evaluación que darán paso a la toma de decisiones correctas respecto a la implementación de las estrategias. 
        p Los KPI de <em>marketing</em> son necesarios para la empresa ya que permiten conocer si las estrategias diseñadas en el plan de mercado son las correctas, la adquisición de nuevos clientes y la interacción con los futuros clientes, estos indicadores están divididos en 4 categorías.

      .col-12.col-md-3.col-lg-2 
        figure
          img(src='@/assets/curso/temas/tema3/decorador-6.svg', alt='')

    .col-xl-9.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        ul.lista-ul.mb-2(data-aos="fade-down")
          li.mb-0
            i.fas.fa-check
            | <strong>Indicadores por campaña:</strong> estos indicadores miden el comportamiento del público objetivo respecto a la campaña diseñada por la empresa, ejemplo: costo por <em>lead</em> o prospecto, este es un cliente potencial del cual se ha obtenido el contacto. 
          br
          li.mb-0
            i.fas.fa-check
            | <strong>Indicadores de producto:</strong> este indicador muestra la aceptación de un producto o servicio de la empresa respecto a la competencia, el indicador más utilizado es el porcentaje de participación del producto en el mercado.  
          br
          li.mb-0
            i.fas.fa-check
            | <strong>Indicadores de <em>marketing</em> digital:</strong> la tendencia actual es realizar inversión en estrategias de <em>marketing</em> digital con el fin de tener presencia en la web y poder atraer nuevos clientes por este canal de comunicación. Entre los indicadores más utilizados de esta categoría están: porcentaje de clientes influenciados por <em>marketing,</em> alcance de las redes sociales, entre otros. 
          br
          li.mb-0
            i.fas.fa-check
            | <strong>Indicadores generales:</strong> estos indicadores se centran en medir la relación que existe entre el esfuerzo de la empresa y la inversión respecto a la adquisición de clientes, por ejemplo: costo de adquisición de un nuevo cliente e índice de satisfacción de los clientes con la marca.
  
    .cajon-b.color-acento-botones.p-3.mb-5
      p.mb-0 A continuación, se muestra un ejemplo de 2 indicadores de un plan de mercado de granjas avícolas: 

    .col-xl-10.mx-auto
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 3.
        span <em>Indicadores de evaluación plan de mercado</em>
      img.d-md-block.mb-2(src="@/assets/curso/temas/tema3/img-11.svg" data-aos="fade-left")
      figcaption Nota. Tomado de “Propuesta plan de mercadeo para una empresa agro avícola”. Hoyos y Henao, (2020). 












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
