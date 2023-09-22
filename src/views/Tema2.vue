<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de Información
    
    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right")
          .col-md-12.ps-lg-2
            p Para que una empresa pueda lograr la participación deseada en el mercado siempre deberá recurrir a los sistemas de información: es una de las herramientas más importantes y utilizadas para trazar el horizonte que se desea dentro de la organización.
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/temas/tema2/decorador-1.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Sistemas de información
                      p.text-small En el siguiente enlace encuentra un video con una breve introducción a los sistemas de información
                    
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=n9kqKg1tDV0')" target="_blank")
                        span Ver video
                        i.fas.fa-video
      
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema2/img-1.png" data-aos="fade-left" style="max-width: 400px")

    p La herramienta del SIM (Sistemas de Información de Mercados) debe ser utilizada de la forma correcta y aplicarse por los colaboradores que tengan un amplio conocimiento del mercado basados en la experiencia y estudios de los mismos, ya que se debe surtir el proceso de analizar, clasificar y usar correctamente la información que se tenga al alcance y usarla de manera eficaz.
    p.mb-5 Los sistemas de información se pueden obtener de fuentes primarias y secundarias.

    //- .col-xl-10.mx-auto.mb-5
    //-   img.d-md-block(src="@/assets/curso/temas/tema2/img-2.svg" data-aos="fade-left")
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-5.mb-2.col-12.d-flex.align-items-stretch
        div(style="background-color:#D4FEFE;")
          .h4.text-center.p-2.mb-0(style="background-color:#B20D0D;") 
            p.text-white.mb-0 #[b Fuentes de información primaria]
          .p-3
            p Son datos que se recopilan para dar respuesta a una situación específica de mercado identificada por la empresa y son datos que se obtienen originalmente.
      .col-lg-5.mb-2.col-12.d-flex.align-items-stretch
        div(style="background-color:#D4FEFE;")
          .h4.text-center.p-2.mb-0(style="background-color:#B20D0D;") 
            p.text-white.mb-0 #[b Fuentes de información secundaria]
          .p-3
            p Son los datos ya existentes y que fueron creados con otro fin, pero que se pueden utilizar para responder a otros requerimientos y necesidades de información diferentes a los iniciales.

    p.mb-5 En la siguiente figura se puede entender lo mencionado: 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 1.
        span <em>Herramienta SIM (Sistemas de Información de Mercados)</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-3.svg" data-aos="fade-left" alt="En la figura 1 se muestra las fuentes primarias y secundarias de datos utilizados en un Sistema de Información de Mercado (SIM). Se pueden obtener datos internos y externos, así como cuantitativos y cualitativos.")

    Separador 
    #t_2_1.titulo-segundo.color-secundario(data-aos="fade-right")
      h2 2.1 Fuentes de Información

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-4.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La información como una de las herramientas más importantes para la toma de decisiones no pertenece a alguien específico dentro de las empresas, por el contrario, debe estar al alcance de todos para ser utilizada en el momento de ser requerida. A continuación, se describen las fuentes de donde se pueden obtener la información necesaria para estudiar y tomar de decisiones.
        
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h3 Información interna y externa

    .row.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | <strong>Interna:</strong> la información interna son los datos que se pueden recolectar al interior de la empresa, a partir del intercambio de información entre las diferentes áreas de esta y sus colaboradores, y de esta forma se puede establecer que la información interna hace parte de las fuentes primarias dado a que se recopila a través de instrumentos diseñados por la empresa como la entrevista, encuesta o dinámicas de grupo (estos se explicarán más adelante).  

    //- p Según Sastre y Polo (2014): 

    .col-xl-10.mb-5.mb-lg-0.mx-auto
      //- .bloque-texto-d debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      .bloque-texto-d.color-primario.p-2.mb-5
        .bloque-texto-d__texto.mb-2
          i.fas.fa-quote-left
          p.text-regular La información interna abarca todos los datos relativos a las ventas, los pedidos, los inventarios de materiales y productos, los saldos por cobrar y las deudas, entre otros. Es crucial que toda esta información se encuentre debidamente categorizada dentro de la empresa, siendo recolectada de forma constante y actualizada para permitir su acceso en cualquier momento y de la manera más sencilla posible, ya sea a través de bases de datos, archivos internos u otros medios. De este modo, cada departamento de la empresa reúne distintos tipos de información que posteriormente deben ser consolidados, clasificados y analizados en su totalidad.
        .bloque-texto-d__autor 
          .h5.mb-0 -Sastre y Polo, 2014 
            i.fas.fa-quote-right
        
    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | <strong>Externa:</strong> la información externa es aquella que se obtiene con los actores ajenos a la empresa, pero con los que se tiene una relación directa como clientes y proveedores. El levantamiento de esta información puede hacerse con herramientas como encuestas de satisfacción, formatos PQR (Peticiones, Quejas y Reclamos) o entrevistas informales, ya que así se convierte en una fuente de información primaria; es importante conocer que, otras alternativas de obtener esta información son con fuentes secundarias como por ejemplo estudios e informes de comportamiento del sector, políticas del estado o indicadores de crecimiento.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 2.
        span <em>Clasificación datos</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-5.svg" data-aos="fade-left" alt="En la figura 2 se muestra la relación entre las fuentes de información internas (área de ventas, talento humano, contabilidad y comercial), y las fuentes de información externas, (clientes, proveedores y distribuidores).")
      figcaption Nota. Adaptado de “Entorno e información de mercados”. Sastre y Polo, (2014). 

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h3 Información cualitativa y cuantitativa 

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | <strong>Cualitativa:</strong> esta información resulta de manera subjetiva y son los datos e información no numérica respecto a un tema específico que se esté investigando y está basada en comportamientos, opiniones, gustos y preferencias de un grupo específico; la recopilación de esta información se basa en saber por qué los clientes o consumidores tienen determinadas preferencias. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | <strong>Cuantitativa:</strong> esta información resulta manera objetiva y genera datos numéricos, pues las fuentes de información están basadas en datos históricos, informes, estadísticas, proyecciones de entidades públicas, entre otros. 

    //- .col-xl-10.mx-auto.mb-5
    //-   .titulo-sexto.color-primario(data-aos="fade-right")
    //-     h5 Tabla 1.
    //-     span <em>Características de la información</em>
    //-   img.d-md-block(src="@/assets/curso/temas/tema2/img-6.svg" data-aos="fade-left")
    //-   figcaption Nota. Tomado de “Entorno e información de mercados”. Sastre y Polo. (2014). 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Características de la información] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Tomado de “Entorno e información de mercados”. Sastre y Polo. (2014).
            thead
              tr.cabecera-a.text-center
                th Información Cualitativa 
                th Información Cuantitativa
            tbody.text-small.text-center
              tr
                td.p-2 Orientada al proceso
                td.p-2 Orientada al resultado
              tr
                td.p-2 Subjetiva
                td.p-2 Objetiva
              tr
                td.p-2 Datos no estadísticos
                td.p-2 Datos estadísticamente universales
              tr
                td.p-2 Información de datos concretos y variables específicas
                td.p-2 Información generalizada de todos los acontecimientos de la empresa
              tr
                td.p-2 Conocimiento profundo del entorno
                td.p-2 Conocimiento escaso del entorno donde se recopila la información
              tr
                td.p-2 Datos profundos, perceptivos, narrativos
                td.p-2 Datos numéricos, porcentuales, estadísticos


    .titulo-segundo.color-secundario(data-aos="fade-right")
      h3 Herramientas

    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.px-5
            img(src='@/assets/curso/temas/tema2/decorador-2.svg' alt='')
          .tarjeta.tarjeta--custom(style="background-color:#ABFFFF")
            .p-4
              p Para hacer un ejercicio válido de levantamiento de información en fuentes primarias es necesario reconocer las herramientas que existen y deben ser usadas a partir del resultado que se desea obtener, entendiendo que estas serán orientadas a los actuales o futuros clientes. A continuación, se hace una relación de estas: 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | <strong>Entrevistas:</strong> es uno de los métodos más utilizados para la obtención de información, pues se trata de una conversación entre un entrevistador y entrevistado donde se formulan preguntas para obtener la información necesaria del tema definido con anterioridad. El tipo de información obtenida es subjetiva como, por ejemplo, la percepción del producto o servicio, las preferencias de los clientes o consumidor final.  
    
    //- .cajon-b.color-primario.mt-3.mb-5
    //-   p Para profundizar en esta herramienta de obtención de información puede consultar el siguiente anexo.

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | <strong>Dinámicas de grupo:</strong> las dinámicas de grupo tienen una similitud con las entrevistas, pero es importante tener en cuenta que se debe aplicar a grupos de 2 a 12 personas. Es necesario que los grupos estén conformados por personas con elementos en común (gustos, aficiones, estrato), aspectos a ser analizados con anterioridad por el entrevistador. 
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | <strong>Observación:</strong> como su nombre lo indica consiste en observar a una persona o grupo de personas y sus reacciones frente a un producto o un servicio, tomando nota de sus movimientos, acciones y percepción frente a diferentes acciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | <strong>Técnicas de creatividad:</strong> van enfocadas a grupos de trabajo en los cuales se realizan actividades diferentes a la entrevista, por ejemplo: 

    .row.mb-4
      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4(style="height:87%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/paso_1.svg' alt='')
          .tarjeta.tarjeta--custom.d-flex.align-items-center
            .p-4
              h5.mb-2 #[strong Lluvia de ideas] 
              p.mb-0 Herramienta de trabajo en equipo que tiene como finalidad la generación de nuevas ideas.
      
      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4(style="height:87%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/paso_2.svg' alt='')
          .tarjeta.tarjeta--custom.d-flex.align-items-center
            .p-4
              h5.mb-2 #[strong Espina de pescado] 
              p.mb-0 Diagrama causa-efecto en forma de espina de pescado que permite identificar las variables que generan un problema y que permite la toma de decisiones. 

      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4(style="height:87%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/paso_3.svg' alt='')
          .tarjeta.tarjeta--custom.d-flex.align-items-center
            .p-4
              h5.mb-2 #[strong Árbol de problemas] 
              p.mb-0 Herramienta utilizada para la identificación de problemas a partir del análisis causa-efecto.

      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4(style="height:87%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/paso_4.svg' alt='')
          .tarjeta.tarjeta--custom.d-flex.align-items-center
            .p-4
              h5.mb-2 #[strong Lista de atributos] 
              p.mb-0 Herramienta aplicada para la creación de nuevos productos o mejorar los servicios o productos existentes. Consiste básicamente en listar los atributos o características del nuevo producto o del que se desea mejorar, posteriormente se analiza cada una de estas y de esta manera, se van descalificando las que sean menos relevantes.

    p.mb-5 Es importante recordar que las herramientas de información secundaria ya existen y no hay que elaborarlas ni crearlas (indicadores, índices, informes económicos, estadísticas), por ello, es de relevancia tener en cuenta la veracidad de las fuentes de información y así obtener datos seguros para hacer un análisis real. 

    .col-xl-10.mx-auto.mb-5
      .tarjeta.color-primario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema2/decorador-1.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Técnicas en Investigación de Mercados - Fuentes de Información
                p.text-small En el siguiente enlace encuentra un video donde puede profundizar sobre las fuentes de información:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=vE77y1o8DWY')" target="_blank")
                  span Ver video
                  i.fas.fa-video













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
