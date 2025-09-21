# Preguntas frecuentes sobre la liberación de Escrow

:::details ¿Qué es GroupHug?
GroupHug es simplemente el término que le hemos dado a la acción de agrupar transacciones de diferentes usuarios para evitar que cada uno pague comisiones individuales. Para una explicación más detallada, consulta nuestra [entrada en el blog](/es/blog/group-hug).
:::

:::details Si tengo una sola oferta de compra activa, ¿se liberará de inmediato?

No, tu pago se añadirá a una cola, esperando a ser liberado. El pago se realizará cuando participen suficientes usuarios en el lote. El número de participantes necesarios se muestra en la información de pagos pendientes. Puedes acceder a esta vista en los detalles de la operación.  
Allí puedes ver cuántos espacios del lote actual están ocupados. También verás un ETA que indica el tiempo máximo de espera si no se llenan los espacios antes.
:::

:::details ¿Cómo funciona si tengo varias ofertas de compra activas?

Como se mencionó, tus pagos se añadirán a la cola para agruparse con otros participantes.
:::

:::details ¿Existe un límite de participantes en el agrupamiento?

No, los lotes también pueden superar el número máximo de participantes. No es un corte fijo, sino un umbral. Es decir, una vez alcanzado el mínimo, simplemente tomamos todos los PSBTs y los agrupamos para crear la transacción y reducir las comisiones que paga cada participante.
:::
