<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cajon.color-secundario.p-4.d-flex.flex-wrap.mb-5(data-aos="fade-right")
      .col-md-11.ps-lg-4
        p El mercado está concebido como el espacio donde por naturaleza se genera un intercambio entre los ofertantes y demandantes de los diferentes sectores económicos, este espacio puede ser físico o no, pero independientemente de esto siempre debe responder a las necesidades de los clientes. De esta manera, se debe entender que un estudio de mercado es una herramienta enfocada a identificar problemas, detectar oportunidades y al diseño de estrategias para tomar decisiones acertadas dentro de la empresa para impactar positivamente en el posicionamiento del sector económico.
    
    figure.mt-5.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/njQRxlRlBh8" title="Estrategias y análisis de mercados" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
  

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
