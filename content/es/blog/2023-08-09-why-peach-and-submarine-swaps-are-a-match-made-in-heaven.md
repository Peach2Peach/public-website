---
keywords:
  - Bitcoin
  - comprar bitcoin
  - vender bitcoin
  - aplicación Peach
  - P2P
  - p2p
  - intercambio p2p
  - cómo comprar bitcoin
  - cómo vender bitcoin
  - de igual a igual
tags:
  - Producto
previewImage: /img/blog/lightning.jpeg
description: |
  Bitcoin es dinero para personas libres. Creemos que cada ser humano tiene el derecho de elegir el dinero que utiliza para almacenar su
  riqueza, el resultado de su trabajo, su tiempo y energía.
  La misión de Peach es contribuir a la adopción de Bitcoin en manos de la gente.
---

# Intercambios LN <-> On-Chain, por @swissnode

## Por qué Peach y los intercambios submarinos son una combinación perfecta

He sido bastante vocal en mi apoyo a Peach y he invertido algunos sats después de convencerme hace casi dos años sobre la brillantez de lo que Peach tiene para ofrecer a la comunidad de Bitcoin: una forma simple para que el acumulador sencillo apile sus sats sin necesidad de identificarse en una plataforma para hacerlo.

Me di cuenta, como operador del nodo SwissNode, de que el emparejamiento de monedas no necesita limitarse a un intercambio fiat-Bitcoin. De hecho, hay casos de uso para ir más allá. Bienvenido al mundo de los intercambios submarinos onchain-offchain.

Un intercambio submarino es, simplemente, una forma de convertir sats que el socio A tiene en la cadena con sats que el socio B puede tener en la Red Lightning (LN). A así gana sats a través de una factura de LN y B gana sats en la cadena a través de una transacción usual en la Blockchain.

Hay dos razones principales para querer hacer esto. Un operador de nodo podría simplemente querer más de su liquidez en el lado de lightning, quizás para equilibrar la proporción de sats que se mantienen en la capacidad del canal "local" y aquellos en la capacidad del canal "remoto". Dejaré eso ahí, esto es obviamente un aspecto más técnico del intercambio submarino. Un operador de nodo también podría querer convertir algo de su liquidez de la red lightning de vuelta en utxos "en cadena". Esto me ha ocurrido cuando una contraparte quería un pago solo a través de la blockchain en lugar de a través de lightning, por ejemplo.

La segunda razón para querer tal intercambio es, sin embargo, algo que casi todos los bitcoiners pueden o DEBERÍAN disfrutar: la capacidad de romper la rastreabilidad del conjunto de utxos que posee, de modo que ninguna entidad tenga la capacidad de saber qué ocurrió con los sats previamente mantenidos en la cadena. ¡Esto no se puede exagerar! Una vez que los sats en tu utxo han pasado, entonces mantienes tu liquidez en varios canales que son prácticamente imposibles de inspeccionar. La naturaleza de lightning es tal que la contabilidad doble probada y verdadera de los canales utilizados significa que solo tus socios de canal pueden saber cuántos sats posees del otro lado del canal. En teoría podrías intercambiar esos sats de lightning de nuevo y luego estar en posesión de un utxo que no se puede rastrear en absoluto a su propietario.

¿Por qué debería querer Peach hacer esto? ... te oigo preguntar... Bueno, aquí está el punto clave. Al ofrecer este servicio por casi nada, Peach se vuelve EXTREMADAMENTE atractivo para los miles de propietarios de nodos que necesitan cambiar entre piscinas de liquidez en cadena y fuera de cadena. Actualmente existen servicios como el servicio LOOP de Lightning Labs pero pagarás bastante por el privilegio. De esta manera, Peach seguramente ganará cientos si no miles de nuevos usuarios que necesitan este servicio. Incluso al ofrecerlo gratis, atraerían a muchos que vinieron por los intercambios pero luego descubrieron la mejor manera de acumular p2 sin kyc.

¿Cómo funciona esto en la práctica? Muy simplemente, apenas difiere del caso de uso habitual de Peach: El vendedor creará un fideicomiso en cadena con Peach por cierto número de sats. La única desviación del camino normal es que ahora debe decidir: exigirá los sats de lightning a través de LNURL. Esto

 permite al vendedor determinar un margen (-21% < x < 21%). Podría ser una idea en futuras versiones también hacer las facturas normales de LN sin margen. Una vez hecho esto, el proceso usual entra en juego... Una vez que se establece y confirma el fideicomiso, un comprador puede indicar su disposición a comprar esos sats en cadena con un "match". Si el vendedor "coincide doblemente", el comprador debe enviar los sats fuera de cadena a través de LNURL. Una vez confirmado por el vendedor, el fideicomiso liberará los sats en cadena al comprador. Los procesos habituales aún aplican si el comprador o el vendedor disputan la acción del otro. Peach determinará qué es qué y liberará el fideicomiso según el proceso de disputa probado y comprobado.

@swissnode

## Notas Finales

Si quieres saber más sobre las características de Peach, o leer algunos de nuestros otros artículos, ¡puedes encontrarlos aquí!

[Cómo recuperar carteras de Bitcoin usando una frase semilla](https://peachbitcoin.com/es/blog/how-to-restore-peach-wallet/)

[Cómo financiar múltiples ofertas de venta](https://peachbitcoin.com/es/blog/funding-multiple-sell-offers/)

[Cómo comprar y vender Bitcoin con efectivo usando Peach](https://peachbitcoin.com/es/blog/how-to-buy-and-sell-bitcoin-with-cash-using-peach/)

[Cómo añadir un nuevo método de pago en la aplicación Peach](https://peachbitcoin.com/es/blog/how-to-add-a-payment-method/)

[¡Peach se expande al Sur Global!](https://peachbitcoin.com/es/blog/peach-expands-to-the-global-south/)

[Haciendo público nuestro Peach-API](https://peachbitcoin.com/es/blog/making-our-peach-api-public/)

[Funcionalidad completa de la cartera](https://peachbitcoin.com/es/blog/full-wallet-functionality/)

[¿Qué es GroupHug?](https://peachbitcoin.com/es/blog/group-hug/)

[¿Por qué la serie P2P? Capítulo 1](https://peachbitcoin.com/es/blog/why-p2p-chapter-1/)

[¿Por qué la serie P2P? Capítulo 2](https://peachbitcoin.com/es/blog/why-p2p-chapter-2/)

[¿Por qué la serie P2P? Capítulo 3](https://peachbitcoin.com/es/blog/why-p2p-chapter-3-circular-economies/)

[¿Por qué la serie P2P? Capítulo 4](https://peachbitcoin.com/es/blog/why-p2p-chapter-4-chains-of-trust/)

[Peach x meetups](https://peachbitcoin.com/es/blog/peach-for-meetups/)

Si quieres saber más sobre nosotros, consulta nuestras redes sociales, o simplemente [contáctanos](mailto:hello@peachbitcoin.com) (usa nuestra [clave PGP](https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2) si es posible) ¡estaremos encantados de escuchar de ti!

[Telegram](https://t.me/+GkOW1J-ixBBkZWRk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

¡Sigue difundiendo la palabra de Peach, quién sabe cuándo encontrarás la pareja de tu vida!
