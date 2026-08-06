---
keywords:
  - entropía Bitcoin
  - frase semilla
  - lista de palabras BIP39
  - cómo se generan las frases semilla
  - seguridad autocustodia Bitcoin
  - generación de números aleatorios wallet
tags:
  - Education
  - Security
previewImage: /img/blog/entropy-and-seed-phrases/cover.jpg
description: |
  Una guía peachy sobre qué es realmente la entropía, cómo funcionan las frases semilla, de dónde viene el azar de verdad y qué tan seguras son tus 12 palabras.
---

# Una guía peachy sobre la entropía, las frases semilla y cómo estar seguro

<img src="/img/blog/entropy-and-seed-phrases/hero.jpg" alt="Un melocotón de dibujos animados con peto azul corriendo por un desierto de relojes derretidos, cartas, calculadoras y fórmulas matemáticas flotantes, perseguido por un dinosaurio" style="display:block; margin: 0 auto 2rem; width: 100%; max-width: 520px;">

*Aviso: este artículo fue escrito sin IA. La imagen de portada sí fue hecha con IA.*

## ¿Qué es la entropía?

Para empezar: la entropía es una medida del caos.

El objetivo no es decir que algo tiene X cantidad de entropía, sino poder comparar 2 cosas y decir que una tiene más entropía que la otra.

Por ejemplo:

- un huevo roto tiene más entropía que un huevo perfecto
- una habitación desordenada tiene más entropía que una habitación ordenada

Y las propiedades interesantes de la entropía son:

- es más fácil aumentar la entropía (crear caos) que revertirla (crear orden)
- el mundo vive en una tendencia constante al aumento de entropía

Por eso es más fácil encontrar algo en una habitación ordenada que en una desordenada, y por eso la habitación se desordena con el tiempo y tienes que gastar energía en limpiarla.

La mayoría de las cosas de nuestra vida se benefician de una entropía baja. La autocustodia de Bitcoin se beneficia de una entropía alta. Pero podemos decir que la entropía es subjetiva. Si yo conozco mi frase semilla, la entropía de mi wallet es muy baja. Solo es alta para los demás. Si le digo a todo el mundo 1 de mis palabras, estoy reduciendo la entropía para ellos, pero sigue siendo bastante alta.

## ¿Qué es una frase semilla?

<img src="/img/blog/entropy-and-seed-phrases/seed-sprouts.jpg" alt="Cinco brotes en etapas crecientes de crecimiento saliendo de tierra oscura" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(una semilla creciendo hasta ser planta — la misma idea que hay detrás de la "semilla" en frase semilla)*

Primero: ¿por qué llamarla semilla? En los ordenadores, la aleatoriedad viene de algún sitio. Si proporcionamos una semilla, la aleatoriedad crecerá a partir de ella, siempre de la misma manera.

Una frase semilla es una convención para memorizar un número entre 0 y 340282366920938463463374607431768211455. Sí, es un número grande, y 12 palabras en inglés te ayudan a memorizar tu número especial dentro de ese rango.

El truco es que ese número podría escribirse en binario (algo como 01110010101… pero muy largo). Así que la comunidad de Bitcoin decidió crear una lista de palabras en inglés y asociar a cada una una secuencia de 11 bits.

Por ejemplo:

```
abandon = 00000000000
zoo     = 11111111111
olympic = 10011010010
laptop  = 01111101000
```

2 cosas interesantes:

- hay listas de palabras para inglés, portugués, chino, coreano, francés, español, italiano y checo;
- para asegurarse de que la gente no se equivoque al introducir su propia frase semilla, hay un sistema que te avisa de que has introducido una semilla "incorrecta", así que no puedes simplemente equivocarte en una de tus palabras, abrir una wallet vacía y asustarte.

## ¿Son suficientes 12 palabras?

La cantidad de números que se pueden representar con las 12 palabras es enorme, y se considera segura. Si quieres ayudarte a recordar las 12 palabras y las escribes en un papel en orden aleatorio en tu casa, sigue siendo relativamente seguro hacerlo: le llevará a alguien muuuucho tiempo probar todas las combinaciones de esas 12 palabras.

Por supuesto, más palabras significan más espacio, y por tanto más difícil de adivinar. Pero a veces con lo suficiente basta.

Solo con 12 palabras, un ordenador rápido necesitaría 10 mil millones de años para comprobar todos esos números y "robar" todas las wallets de Bitcoin de 12 palabras. Si juntas todo el poder de minería de Bitcoin y lo rediriges a adivinar las semillas, tardaría 11 mil años en hacer lo mismo.

Para mí, eso es viable. Pero añadir una palabra extra aumenta el tiempo muuuucho más. ¡Tú decides!

## ¿Cómo se generan esas semillas?

<img src="/img/blog/entropy-and-seed-phrases/randomness-comic.jpg" alt="Tira cómica: en un recorrido por contabilidad presentan el generador de números aleatorios, que es un trol repitiendo nueve, nueve, nueve, nueve. ¿Seguro que eso es aleatorio? Ese es el problema con la aleatoriedad: nunca puedes estar seguro." style="display:block; margin: 0 auto 2rem; width: 100%;">

*(Dilbert, de Scott Adams — © 2001 United Feature Syndicate, Inc.)*

Aleatoriamente. Sin embargo, la aleatoriedad es una ilusión: nada es verdaderamente aleatorio.

¿Recuerdas cuando estabas en el colegio y el profesor quería que un alumno al azar saliera a la pizarra? Nunca elegían al alumno #1, pero el alumno #7 siempre era elegido "al azar".

Los ordenadores no pueden producir nada aleatorio. Pero pueden generar pseudoaleatoriedad. Por ejemplo, pueden usar los valores de temperatura del sistema de los últimos 30 minutos, más la luz que entra por la webcam, más la velocidad de internet, más el comportamiento del ratón/teclado, etc., como fuentes de aleatoriedad. El objetivo es obtener aleatoriedad de fuentes que sean prácticamente imposibles de controlar.

Un ejemplo famoso es la aleatoriedad de Cloudflare usando lámparas de lava. Tienen muchísimas lámparas de lava, una webcam filmándolas constantemente, y los patrones impredecibles de las burbujas de lava se usan como fuente de aleatoriedad.

<img src="/img/blog/entropy-and-seed-phrases/lava-lamps.jpg" alt="Una pared con decenas de lámparas de lava de colores colocadas en estanterías en el vestíbulo de una oficina" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(la pared de lámparas de lava de Cloudflare en San Francisco, filmada las 24 horas como fuente de aleatoriedad)*

## Entonces, ¿por qué se descubrieron algunas semillas?

En cuanto al incidente de Coldcard, hubo un error en el código que usaba una mala fuente de aleatoriedad. En cuanto los hackers se dieron cuenta de que la aleatoriedad era solo una combinación de factores simples, eso redujo las posibilidades y se convirtió en una cuestión de buscar entre esos candidatos.

Otra vez: la entropía es subjetiva. En cuanto alguien tiene una "pista", la entropía baja. Otra pista, y la entropía baja todavía más.

Ejemplo: imagina que tengo una estantería muy alta y llena de libros. Te digo que hay un billete de 5 euros escondido en uno de los libros. Será muy difícil encontrarlo. Pero empiezas a mirar alrededor y te das cuenta de que no tengo ninguna escalera para llegar a las partes más altas de la estantería. Por tanto, crees que el billete de 5 euros tiene que estar en los libros alcanzables sin escalera. Concentras tus esfuerzos en los candidatos correctos y te haces 5 euros más rico 🙂

## ¿Cómo genera Peach las semillas para la Peach Wallet?

Peach es una app móvil, por tanto tiene acceso a la fuente pseudoaleatoria segura del teléfono móvil. Dicho de forma simple: se apoya en la aleatoriedad del teléfono móvil, que es la misma que se usa para muchos otros aspectos de seguridad del teléfono.

¿Pero de dónde saca el teléfono esa aleatoriedad? Crea una olla de aleatoriedad con valores físicos:

- el tiempo de arranque de todas las apps/servicios del teléfono + cuánto tardaron en arrancar (hasta la millonésima de milisegundo)
- ruido eléctrico en los circuitos: altamente impredecible y muy sensible a la temperatura
- cómo se "toca" tu teléfono: el ritmo de las pulsaciones, la posición exacta de las pulsaciones, cuánto duran, etc.
- valores del acelerómetro: cuánto se ha agitado tu teléfono, la inclinación actual, las coordenadas geográficas actuales y pasadas (incluida la altitud)
- muchas otras cosas (ej.: intensidad de luz en la(s) cámara(s), sonido del micrófono, etc.)
- un poco de la olla de aleatoriedad anterior, de antes de que el teléfono se apagara y encendiera

Dicho de otro modo: tu teléfono ya estaría hackeado si esa fuente de entropía fuera mala.

## Conclusión: ¿estoy seguro?

Hay gente que tira dados para generar sus semillas, lo cual es efectivamente una buena fuente de entropía (a menos que tengas dados trucados, y alguien tenga acceso a esos dados trucados. Quémalos después de usarlos, ¡quién sabe!). Otros "confían" en las fuentes digitales de aleatoriedad leyendo el código usado para generarlas, pero no todo el mundo es ingeniero. Puedes pedirle a una IA que evalúe si un software concreto es bueno para generar semillas, pero en ese momento estás confiando en la IA.

Los hardware wallets no hacen que tu semilla sea más difícil de adivinar, solo reducen la exposición a que los hackers accedan a un archivo que contenga las semillas.

Bitcoin es difícil, ser el dueño de tu propio dinero es difícil, pero merece la pena. Haz tu propia investigación, no sigas modas, y estarás bien.

Una cosa que recomiendo: desarrollar la técnica del Palacio de la Memoria, para guardar tu frase semilla en la cabeza.

<img src="/img/blog/entropy-and-seed-phrases/memory-palace.jpg" alt="Portada de álbum con un edificio gigante de hormigón con forma de cabeza, en pie en un desierto bajo un sol pálido" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(la portada del álbum de música "Memory Palace", de la banda "Intervals")*

Happy peaching 🍑

---

## Notas finales

Si quieres saber más sobre las funciones de Peach, o leer alguno de nuestros otros artículos, ¡los puedes encontrar aquí!

[Necesitas un hardware wallet](https://peachbitcoin.com/es/blog/you-need-a-hw/)
[Cómo restaurar tu Peach wallet desde una frase semilla](https://peachbitcoin.com/es/blog/how-to-restore-peach-wallet/)
[Cómo comprar Bitcoin P2P con Peach](https://peachbitcoin.com/es/buy-bitcoin-no-id/)
[¿Qué es GroupHug y cómo te ahorra comisiones?](https://peachbitcoin.com/es/blog/group-hug/)
[¿Por qué P2P? Los fundamentos](https://peachbitcoin.com/es/blog/why-p2p-chapter-1/)
[Estafas de triangulación en mercados P2P](https://peachbitcoin.com/es/blog/triangulation-scams/)

Si quieres saber más sobre nosotros, visita nuestras redes sociales o simplemente [contáctanos](mailto:hello@peachbitcoin.com) (usa nuestra [clave PGP](https://keys.openpgp.org/search?q=hello%40peachbitcoin.com) si es posible), ¡estaremos encantados de saber de ti!

[Telegram](https://t.me/+vhBVLv6zoLgyYjlk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

¡Sigue corriendo la voz sobre Peach, quién sabe cuándo encontrarás el match de tu vida!
