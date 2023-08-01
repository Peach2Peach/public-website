# Preguntas frecuentes sobre Trading

:::details ¿Cómo puedo estar seguro de que recibiré el bitcoin/dinero?

Cuando se hace una oferta de venta, el vendedor envía el bitcoin a una dirección que es controlada por él y por Peach: el bitcoin sólo se puede mover desde allí si él y Peach lo autorizan. Esto garantiza que:

- El vendedor no puede mover el bitcoin (de vuelta) por su cuenta
- Peach no puede robar el bitcoin
- El comprador no recibe el bitcoin hasta que se realiza el pago
- El vendedor puede recuperar el bitcoin si el comprador no responde

Si el intercambio no se resuelve de forma normal, esta dirección pasa automáticamente al control total de Peach después de aproximadamente 30 días (para ser precisos: cuando se han minado 4320 bloques de bitcoin). Esto garantiza que:

- El comprador puede recibir el bitcoin si puede demostrar que hizo el pago pero el vendedor no responde
- El bitcoin no queda atascado si algo le sucede al vendedor

Esta es la parte más importante para asegurar su intercambio. Además de esto, también tenemos nuestro complejo sistema de reputación que le ayuda a identificar a las personas que han estado usando Peach de manera confiable durante mucho tiempo.
:::

:::details ¿Por qué hay un límite de trading?

Las regulaciones suizas establecen que una persona sólo puede comprar hasta 1000 CHF de bitcoin al día, sin proporcionar su identificación al vendedor. Dado que preferimos mantenernos fuera de la cárcel, hacemos cumplir este límite en la aplicación.

Todos los detalles de su pago se almacenan en su teléfono, por lo que no podemos verlos. Lo que podemos ver es un hash\* de la ID de su teléfono (no identificativo)  y de sus detalles de pago. Esto nos permite bloquear cualquier operación que exceda el límite personal.

\* Un hash es un dato que se ha hecho irreconocible, similar a encriptarlo. Los mismos datos siempre conducirán al mismo hash. Esto significa que no sabemos cuáles son los datos, pero podremos detectar si se utilizan los mismos datos dos veces.
:::

:::details ¿Hay alguna forma de comprar/vender más allá del límite de trading?

¡Si eres un comprador o vendedor de alto volumen, envíanos un correo electrónico a [$contactEmail$](mailto:$contactEmail$)!
:::

:::details ¿Cuáles son las comisiones por intercambiar Bitcoin en Peach?

Peach cobra una comisión del 2% del volumen de trading en comisiones al comprador. Cuando se realiza un intercambio en Peach, se están haciendo transacciones en la cadena de bloques de Bitcoin, lo que resultará en comisiones de transacción. Siempre puede ver la estructura completa de las comisiones al final de su transacción, que puede parecer algo así:

![Desglose del intercambio](/img/faq/trading/TradeBreakdowns.png)
:::

:::details ¿Cómo puedo cancelar una oferta o un intercambio?

Puede cancelar sus ofertas e intercambios haciendo clic en la X roja en la parte superior de la pantalla, siempre que esté disponible:

![Cancelar intercambio](/img/faq/trading/cancel.png)

Dicho esto, esto a menudo tiene consecuencias. Antes de emparejarte con alguien, puedes cancelar en cualquier momento. Después de haber emparejado, sin embargo, tu reputación se verá afectada negativamente. Además, como vendedor, deberás pedir permiso al comprador para cancelar el intercambio. ¡Es posible que ya haya realizado el pago!
:::

:::details ¿Por qué recibí menos sats de los que pensaba que estaba comprando?

Peach cobra una tarifa comercial del 2% al comprador, lo que significa que recibirás menos sats que la cantidad del comercio. Además, tendrás que pagar tarifas de red de Bitcoin. Tu comercio podría verse así, por ejemplo:

![Desglose de compra](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details ¿Qué sucede si no quiero usar la billetera Peach para el pago / reembolso?

Por supuesto, eres libre de usar tu propia billetera si así lo deseas. Aún así, recomendamos encarecidamente usar la billetera Peach, ya que es la forma más fácil de realizar un intercambio. Luego puedes enviar los fondos a cualquier otra billetera.

Si deseas agregar tu propia billetera, puedes desactivar "pago a la billetera Peach" y luego establecer una dirección de pago personalizada:

![Desactivar billetera](/img/faq/trading/disablewallet.png)

Al realizar un intercambio, deberás firmar un mensaje que indique que estás en control de esta billetera, según las regulaciones suizas.

Estaremos trabajando en el soporte xpub muy pronto, pero por ahora, deberás cambiar esta dirección manualmente si no deseas reutilizarla.
:::

:::details ¿Cómo es calculado el precio de Bitcoin en la app?

El precio de Bitcoin que mostramos es un agregado del precio de Bitcoin en varias exchanges centralizadas.
:::

:::details ¿Cómo acelerar transacciones atascadas debido a comisiones de minería demasiado bajas?

Depende del tipo de transacciones de las que estemos hablando. Aquí hay una lista de todas las transacciones que pueden ocurrir en Peach y sus soluciones para aumentar las comisiones: 
1. Transacción para financiar el depósito en garantía para publicar una oferta de venta
> Si depositáste fondos desde la billetera Peach, puedes hacer RBF (Replace By Fee, aumentar la comisión) en la transacción.

> Si depositáste fondos desde una billetera externa, debe verificar si la billetera admite RBF para aumentar las tarifas de la red.

2. Liberar transacción del depósito en garantía (comprar Bitcoin)
> Si su dirección de recepción es de la billetera Peach, puede retirar el monto total a una billetera externa suya con tarifas más altas (Configuración > comisiones de red) - Técnica CPFP (Child Pays for Parent)

> Si su dirección de recepción proviene de una billetera externa, también puede realizar la técnica CPFP si es compatible con su billetera.

3. Enviar transacción desde la cartera de Peach a otra cartera
> Puede usar RBF (Replace-By-Fee) desde su Peach Wallet en los detalles de su transacción!
:::
