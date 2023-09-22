<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo Estrategias y análisis de mercados, es una disciplina esencial para cualquier organización que busque tener éxito en un entorno empresarial altamente competitivo. Comprende una serie de subtemas que necesitan herramientas necesarias para entender y adaptar al entorno, así como para planificar y mejorar continuamente las estrategias de mercado. El análisis del entorno se enfoca en evaluar factores externos que suceden a la empresa, mientras que los sistemas de información se refieren a la obtención y gestión de datos relevantes. El plan estratégico abarca la comprensión del cliente y el diseño de estrategias de mercado efectivas. El informe de resultados es clave para evaluar el éxito de las estrategias implementadas, y el plan de mejora ofrece pautas para perfeccionar y optimizar la estrategia en curso. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Estrategias y análisis de mercados, encontramos temas relacionados con el plan de marketing, la estrategia, el entorno y los objetivos.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
