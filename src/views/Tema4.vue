<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Informe de resultados  

    .col-xl-10.mx-auto
      .d-flex.flex-wrap.mb-5
        .col-xl-12.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
          .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
            .col-md-12.ps-lg-4
              p El informe de resultados del plan de mercado se debe presentar a manera de informe ejecutivo, (informe escrito con resultados y recomendaciones de manera específica) respecto al desarrollo del plan de mercado, este debe contener la proporción de cumplimiento entre las metas propuestas y las alcanzadas, las actividades realizadas y la explicación o justificación respecto a los objetivos inconclusos.  Algunas de las métricas que se recomiendan tener presentes para determinar el nivel de cumplimiento del plan de mercado son las siguientes: 

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img-1.png', alt='')  
      .col-12.col-md-8.mb-5.mb-lg-0(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="A" titulo="Clientes nuevos")
            .col-12.mb-4.mb-md-0
              p.text-small Se busca determinar cuántos clientes nuevos surgieron a partir de las estrategias implantadas. El indicador más importante para determinar si el plan funcionó, es el crecimiento de las ventas. Esta métrica es más sencilla de medir en productos no comprados continuamente, como vehículos o inmuebles, donde el incremento en ventas se asocia a nuevos clientes y no a compras de clientes leales. 
          .row(numero="B" titulo="Contribución al canal de ventas")
            .col-12.mb-4.mb-md-0
              p.text-small Las campañas de mercadeo suelen apostar por la consecución de nuevos clientes, pero otro indicador de éxito es el crecimiento de la base de datos con clientes potenciales; en muchas ocasiones se realizan ventas a ellos tras un periodo de tiempo, por lo que su consecución será, en cierta medida, producto del plan de mercadeo.
          .row(numero="C" titulo="Retorno de la inversión")
            .col-12.mb-4.mb-md-0
              p.text-small Una comparativa entre el dinero invertido en la implementación de las estrategias y el incremento de ingresos obtenido, es uno de los elementos de juicio más importantes para determinar si resultó productivo el plan de mercado. No solo basta con un resultado positivo, la diferencia debe ser lo suficiente para compensar los riesgos asumidos y el trabajo adicional realizado. 
          .row(numero="D" titulo="Percepción de la marca")
            .col-12.mb-4.mb-md-0
              p.text-small A diferencia de las métricas anteriores, esta se centra en un aspecto meramente cualitativo. La forma en la que las personas ven el producto puede posibilitar la transición e inclusión de clientes nuevos. El posicionamiento de los productos puede ser un factor de gran relevancia al plantear estrategias que involucren incursión en nuevos mercados o la oferta de una referencia nueva. 
       
    p.mb-5 Como se mencionó previamente, la evolución de las ventas se constituye como el factor más importante a la hora de medir la efectividad de las estrategias aplicadas. El análisis comparativo dota de contexto la evolución de las ventas, al enfrentarla a los resultados previos a la ejecución de las medidas propuestas. El diseño de un informe comparativo para este propósito puede tomar la siguiente forma:

    //- .col-xl-8.mx-auto.mb-5
    //-   .titulo-sexto.color-primario(data-aos="fade-right")
    //-     h5 Tabla 4.
    //-     span <em>Informe histórico de ventas</em>
    //-   img.d-md-block.mb-2(src="@/assets/curso/temas/tema4/img-2.svg" data-aos="fade-left")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 4.] #[i Informe histórico de ventas] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th(colspan="5") Informe histórico de ventas
              tr.text-center
                th
                th Año 1
                th Año 2
                th(colspan="2") Variación
            tbody.text-center
              tr.text-center
                th
                th
                th
                th #[b $]
                th #[b %]
              tr.text-center
                th Producto A
                td.p-2 15.000
                td.p-2 13.000
                td.p-2 2000
                td.p-2 15,4 %
              tr.text-center
                th Producto B
                td.p-2 2.500
                td.p-2 2.200
                td.p-2 300
                td.p-2 13,6 %
              tr.text-center
                th Producto C
                td.p-2 3.000
                td.p-2 3.200
                td.p-2 -200
                td.p-2 -6,3 % 
              tr.text-center
                th Total
                td.p-2 20.500
                td.p-2 18.400
                td.p-2 2.100
                td.p-2 11,4 % 


    p Las variaciones negativas implican una disminución en las ventas, mientras que las positivas un crecimiento. La comparativa puede ampliarse tanto como los analistas lo consideren necesario. Puede revisarse la evolución histórica abarcando más años, o segmentar las comparativas por regiones o centros de distribución. Es por ello, que el informe se plantee a la medida de las necesidades, enfocado a funcionarios en específico para una retroalimentación posterior, o a nivel global para la toma de decisiones transversales.
    .cajon-b.color-acento-botones.p-3.mb-5
      p.mb-0 Si dentro de las metas del plan de mercado se establecieron unos valores estimados a alcanzar, la tabla podría complementarse con indicadores de cumplimiento así: 

    //- .col-xl-8.mx-auto.mb-5
    //-   .titulo-sexto.color-primario(data-aos="fade-right")
    //-     h5 Tabla 5.
    //-     span <em>Informe de ejecución</em>
    //-   img.d-md-block.mb-2(src="@/assets/curso/temas/tema4/img-3.svg" data-aos="fade-left")
      
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 5.] #[i Informe de ejecución] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead.text-center
              tr.cabecera-a
                th(colspan="4") Informe de ejecución
              tr
                th
                th Incremento obtenido
                th Incremento proyectado
                th Cumplimiento 
            tbody.text-center
              tr
                th Producto A
                td.p-2 2.000
                td.p-2 2.000
                td.p-2 100 % 
              tr
                th Producto B
                td.p-2 300
                td.p-2 800
                td.p-2 38 %
              tr
                th Producto C
                td.p-2 -200
                td.p-2 1.000
                td.p-2 -20 %
              tr
                th Total
                td.p-2 2.100
                td.p-2 3.800
                td.p-2 55 %

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img-4.png', alt='Texto que describa la imagen')
      .col-12.col-md-7.p-4(style="background-color: #FFEEB5")(data-aos="fade-left")
        p Para determinar el nivel de cumplimiento debe dividirse el incremento obtenido sobre el proyectado. Cualquier cifra que se acerque o supere el 100 % puede considerarse positiva. En el caso del producto A, se lograron las metas propuestas, en el caso del producto B la efectividad no alcanzó ni la mitad de la esperada, y en el caso del producto C, las estrategias no tuvieron ningún efecto, o incluso, tuvieron uno negativo.
        p Para el análisis es importante tener en cuenta factores adicionales como políticas económicas o variaciones de precio producto de la inflación. Para ello, pueden contrastarse las comparativas de ingresos con las de unidades vendidas, si el incremento obedece mayoritariamente al incremento del valor de los productos, propio de todos los años, es evidente que las estrategias no han resultado fructíferas. Por tal razón, cada tabla debe ir acompañada de un contexto que le otorgue al analista todos los elementos para hacerse un juicio acertado. 
    
    .cajon-b.color-acento-contenido.p-3
      p.mb-0 Como se recomendó previamente, estas variaciones según las expuestas en la tabla 5, es necesario compararlas con las inversiones efectuadas para llevar a cabo las estrategias. Por ejemplo, si para alcanzar esos resultados se invirtieron $ 2.500 en contrataciones y campañas publicitarias, las estrategias no funcionaron, puesto que el beneficio generado fue de $ 2.100, lo que se traduce en una pérdida neta de $ 400. 
        br
        br 
        | A partir de estas observaciones se plantean las acciones de mejora para reformular el plan de mercado e identificar aquellas medidas que sí generen impactos positivos. 





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
