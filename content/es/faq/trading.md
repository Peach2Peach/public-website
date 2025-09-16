# Preguntas Frecuentes sobre Comercio

:::details ¿Cómo puedo estar seguro de que recibiré los bitcoin / el dinero?

Al crear una oferta de venta o al emparejar una oferta de compra, el vendedor envía los bitcoin a una dirección controlada por él y por Peach: los bitcoin solo pueden moverse desde ahí si ambos, él y Peach, firman la transacción. Esto asegura que:

- El vendedor no pueda mover los bitcoin (de vuelta) por su cuenta
- Peach no pueda robar los bitcoin
- El comprador no reciba los bitcoin hasta que se realice el pago
- El vendedor pueda recuperar los bitcoin si el comprador no responde

Si la operación no se resuelve normalmente, esta dirección pasa automáticamente a estar bajo el control total de Peach después de unos 30 días (más exactamente: cuando se hayan minado 4320 bloques de bitcoin). Esto asegura que:

- El comprador pueda recibir los bitcoin si demuestra que realizó el pago pero el vendedor no responde
- Los bitcoin no queden bloqueados si le sucede algo al vendedor

Esta es la parte más importante para asegurar tu operación. Además, contamos con un sofisticado sistema de reputación que te ayuda a identificar personas que han estado usando Peach de manera confiable por mucho tiempo.
:::

:::details ¿Por qué existe un límite de comercio?

Las regulaciones suizas establecen que una persona solo puede comprar hasta 1000 CHF de bitcoin por día sin proporcionar su identificación al vendedor. Como preferimos no ir a la cárcel, aplicamos este límite en la aplicación.

Todos tus datos de pago se almacenan en tu teléfono, por lo que no podemos verlos. Lo que sí podemos ver es un hash\* de la ID de tu teléfono y de tus datos de pago. Esto nos permite bloquear cualquier operación que supere el límite personal.

\* Un hash es un dato que se hace irreconocible, similar a encriptarlo. Los mismos datos siempre producen el mismo hash. Esto significa que no sabemos cuáles son los datos, pero sí podemos detectar si se usan dos veces.
:::

:::details ¿Hay alguna forma de comprar/vender más del límite?

Si eres un vendedor de alto volumen, ¡envíanos un correo a [$contactEmail$](mailto:$contactEmail$)!
Se te pedirá que sigas un proceso KYC y se eliminarán tus límites.
:::

:::details ¿Cuáles son las comisiones por comerciar en Peach?

Peach cobra al comprador una comisión del 2% del volumen de la operación. Al realizar una operación en Peach, ejecutas transacciones en la blockchain de Bitcoin, lo que genera comisiones de red. Siempre puedes ver la estructura completa de comisiones al final de tu operación, que podría lucir así:

![Desglose de la Operación](/img/faq/trading/TradeBreakdowns.png)
:::

:::details ¿Cómo puedo cancelar una oferta o una operación?

Puedes cancelar tus ofertas y operaciones haciendo clic en la X roja en la parte superior de la pantalla, siempre que esté disponible:

![Cancelar Operación](/img/faq/trading/cancel.png)

Sin embargo, esto a menudo tiene consecuencias. Antes de emparejarte con alguien, puedes cancelar en cualquier momento. Pero después de emparejarte, tu reputación se verá afectada negativamente. Además, como vendedor, deberás pedir permiso al comprador para cancelar la operación. ¡Podría ser que ya haya realizado el pago!
:::

:::details ¿Por qué recibí menos sats de los que pensaba comprar?

Peach cobra una comisión de comercio del 2% al comprador, lo que significa que recibirás menos sats que la cantidad acordada. Además, deberás pagar comisiones de red de Bitcoin. Por ejemplo, tu operación podría lucir así:

![Desglose de Compra](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details ¿Qué pasa si no quiero usar la billetera de Peach para el pago / reembolso?

Por supuesto, eres libre de usar tu propia billetera si lo deseas. Aun así, recomendamos encarecidamente la billetera de Peach, ya que es la forma más sencilla de realizar una operación. Después, puedes enviar los fondos a cualquier otra billetera.

Si deseas añadir tu propia billetera, puedes desactivar «pago a billetera Peach» y luego establecer una dirección de pago personalizada:

![Desactivar Billetera](/img/faq/trading/disablewallet.png)

Al realizar una operación, deberás firmar un mensaje que confirme que controlas esa billetera, según las regulaciones suizas.

Pronto agregaremos soporte para xpub, pero por ahora tendrás que cambiar esta dirección manualmente si no quieres reutilizarla.
:::

:::details ¿Cómo se calcula el precio de Bitcoin en Peach?

El precio BTC que mostramos en Peach es un agregado de los precios de BTC en intercambios centralizados.
:::

:::details ¿Qué pasa con las monedas en alta inflación como Argentina, Venezuela, etc.?

Las monedas con alta inflación sufren gran volatilidad, por lo que el precio en distintos intercambios puede variar. Peach muestra el precio según un agregado de diferentes fuentes de precios de BTC.
:::

:::details ¿Cómo acelerar una transacción atascada por bajas comisiones de minería?

Depende del tipo de transacción. Aquí tienes una lista de transacciones que pueden ocurrir en Peach y las soluciones para aumentar las comisiones:

1. Transacción para financiar el escrow al publicar una oferta de venta o aceptar una de compra

- Si financiaste el escrow desde la billetera Peach, puedes usar RBF (Replace-By-Fee) y aumentar las comisiones
- Si financiaste el escrow desde una billetera externa, revisa si admite RBF

2. Transacción de liberación del escrow (compra de Bitcoin)

- Si tu dirección receptora es de la billetera Peach, puedes retirar el monto total a una billetera externa tuya con comisiones más altas (Ajustes > Comisiones de Red) – técnica CPFP
- Si tu dirección receptora es de una billetera externa, también puedes usar la técnica CPFP si tu billetera la admite

3. Transacción de envío desde la billetera Peach a otra billetera

- ¡RBF (Replace-By-Fee) desde la billetera Peach en los detalles de la transacción!
  :::

:::details ¿Qué es GroupHug?
GroupHug es simplemente el término que usamos para el proceso de agrupar transacciones de diferentes usuarios y así evitar pagar comisiones individualmente. Para una explicación más detallada, revisa nuestro [blog](https://peachbitcoin.com/blog/group-hug).
:::

:::details Si tengo una sola oferta de compra activa, ¿se liberará de inmediato?

No, tu pago se añadirá a una cola en espera. El pago se realizará cuando haya suficientes usuarios participando en el batch. El número de participantes necesarios se muestra en la información de pago pendiente. Allí también puedes ver cuántos espacios del batch actual están ocupados y un ETA que indica el tiempo máximo de espera.
:::

:::details ¿Cómo funciona si tengo varias ofertas de compra al mismo tiempo?

Como se mencionó, tus pagos se añadirán a la cola para agruparse con otros participantes.
:::

:::details ¿Existe un límite de participantes en el batch?

No, los batches pueden incluir más participantes de los mínimos necesarios. No es un corte, sino un umbral. Es decir, una vez alcanzado el mínimo, simplemente tomamos todos los psbts y los agrupamos para hacer la transacción, reduciendo las comisiones de cada participante.
:::

:::details ¿Cómo firmar una dirección externa?
Sigue estos pasos para firmar la dirección receptora al comprar Bitcoin en una billetera externa:

_Nota: Los 2 primeros pasos son útiles si deseas **siempre** recibir tus fondos en direcciones externas. Si solo quieres hacerlo una vez o usar a veces la billetera Peach, empieza desde el paso 3._

1. Ve a Ajustes

- Desactiva la billetera Peach
- Ve a la dirección de pago

2. Pega la nueva dirección receptora

3. Avanza en el proceso para publicar tu oferta de compra y antes de publicarla asegúrate de elegir la dirección externa (haz clic en el pequeño icono de billetera en la esquina superior derecha de la pantalla de resumen de la oferta).

4. Una vez confirmes tu oferta de compra, aparecerá el mensaje para firmar tu dirección. Cópialo y vuelve a tu billetera.

5. Busca la opción "firmar/verificar"\* y pega:

- tu dirección receptora
- el mensaje de Peach

6. Haz clic en firmar y aparecerá la firma. Cópiala.

7. Pega la firma en la billetera Peach y confirma.

8. Tu oferta será publicada.

_\* Aviso: no todas las billeteras soportan la opción de firmar/verificar._
Peach recomienda usar Blue Wallet, Sparrow o Samourai Wallet. Otras opciones incluyen Ledger y Trezor (Hardware Wallets), Bitcoin Core y Electrum.

También puedes encontrar un tutorial paso a paso sobre cómo firmar un mensaje usando Blue Wallet en nuestro canal de Youtube: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)
:::

:::details ¿Cómo usar CPFP para acelerar transacciones atascadas?

Sigue los pasos de este video: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) para acelerar transacciones atascadas usando CPFP dentro de la app Peach.
:::

:::details ¿Cómo funciona financiar múltiples ofertas de venta desde una billetera externa?

Cuando quieras financiar varias ofertas de venta a la vez, la aplicación genera una dirección intermedia desde tu billetera Peach. Una vez que los bitcoin llegan a esa dirección, se generan nuevas transacciones para cada escrow. Por ejemplo, si quieres financiar 5 ofertas de venta, se enviarán 5 transacciones a diferentes direcciones de escrow.
:::
