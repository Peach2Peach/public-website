---
keywords:
  - vender bitcoin
  - fideicomiso
  - transacción agrupada
tags:
  - Cómo hacer
previewImage: /img/blog/funding-multiple-sell-offers/batched-transaction.png
description: |
  A partir de la versión 0.3.0, Peach App introduce la capacidad de crear y financiar múltiples ofertas de venta. Aquí te mostramos cómo funciona.
---

# Cómo Financiar Múltiples Ofertas de Venta

A partir de la versión 0.3.0, Peach App introduce la capacidad de crear y financiar múltiples ofertas de venta. Esta función ofrece dos ventajas principales:

- **ahorrar tiempo**, no más toques repetidos en botones
- **ahorrar comisiones**, financiar todos los fideicomisos en una sola transacción: por ejemplo, agrupar 5 pagos en una sola transacción puede ahorrarte fácilmente el 60% en comisiones de transacción.

## Cómo funciona

### Financiamiento desde la billetera Peach

Financiar tus ofertas de venta desde tu Billetera Peach es la opción más sencilla. Al hacer clic en el botón "financiar desde billetera Peach", la aplicación Peach se encarga de todo por ti. Crea una transacción de financiamiento que envía los fondos necesarios a cada dirección de fideicomiso automáticamente.

### Financiamiento desde billetera externa

Si prefieres usar una billetera externa, aún puedes financiar múltiples ofertas de venta, pero implica un proceso de dos pasos:

1. **enviar sats a una dirección interna de la Billetera Peach**: La dirección que ves es una dirección interna de la Billetera Peach registrada especialmente para este propósito. La aplicación Peach mantiene un ojo en esta dirección hasta que tus ofertas sean canceladas o la dirección esté financiada.
2. **financiamiento y distribución**: Una vez que los sats llegan a esta dirección interna, la lógica de la aplicación Peach divide los fondos entre las ofertas de venta que has creado y los envía a las direcciones de fideicomiso individuales.

## Preguntas frecuentes

Mientras leías, es posible que te hayas hecho una de estas preguntas. Yo también me las he hecho, así que me gustaría darte una respuesta directamente.

:::details ¿Por qué no un solo fideicomiso para muchas ofertas de venta?
Efectivamente, hemos estado contemplando cómo podemos tener solo un fideicomiso del cual se puedan atender muchas ofertas de venta.
La razón por la que no usamos un solo fideicomiso es que haría los pagos mucho más difíciles de realizar.
En la configuración actual los fideicomisos se pagan en su totalidad en una sola transacción y se termina. Sin embargo, si tuviéramos que pagar parcialmente un fideicomiso al comprador A, la naturaleza de la transacción de bitcoin nos dejaría con una salida de cambio de los sats que aún no se han gastado. Por simplicidad, digamos que el cambio vuelve a la misma dirección de fideicomiso.
Aún nos queda otro problema por resolver: transacciones pendientes. Imagina que la primera transacción de liberación al comprador A está pendiente a 8 sats / vB pero la red actualmente solo procesa transacciones con 21 sats / vB o más. Si comenzamos otra transacción de liberación al comprador B mientras aún no está confirmada, el comprador B tendrá que pagar más comisiones de transacción para que la transacción se confirme antes.
:::

:::details ¿Por qué no puedo crear 2 ofertas de venta a la vez?
Para el proceso de dos pasos, se ahorran comisiones al financiar 3 fideicomisos o más. Para evitar incurrir en más comisiones, no permitimos el financiamiento agrupado de dos ofertas de venta.
:::

:::details Puedo agrupar mis propias transacciones, ¿necesito hacer el proceso de dos pasos?
En este momento, sí. Pero pronto lanzaremos una actualización para crear múltiples ofertas de venta sin que se muestre la dirección de financiamiento intermedia.
:::
