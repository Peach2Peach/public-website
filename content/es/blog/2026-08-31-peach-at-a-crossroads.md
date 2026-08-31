---
keywords:
  - Peach Bitcoin
  - marketplace de Bitcoin sin KYC
  - escrow de Bitcoin
  - regulación suiza Bitcoin
  - trading P2P de Bitcoin
  - Bitcoin autocustodia
  - trading sin escrow
  - cumplimiento normativo Peach
tags:
  - Company
  - Rants and Opinions
previewImage: /img/blog/peach-at-a-crossroads/cover.png
description: |
  Peach está en una encrucijada. Una carta de nuestra fundadora sobre cómo empezó Peach, cómo nos convertimos en un marketplace sin KYC licenciado en Suiza, qué decidió el regulador este año y por qué pausamos temporalmente el escrow.
---

# Peach en una encrucijada

**Una carta de nuestra fundadora.**

Queridos usuarios de Peach, querida comunidad de Peach:

Lleváis amando Peach desde 2022.

Hoy, Peach está en una encrucijada.

Dejadme rebobinar el camino con vosotros.

## Cómo empezó Peach

Soy de la promoción Bitcoin de 2018. *(Habla @proofofsteph.)*

Ese año caí por la madriguera del conejo. 2019 fue el año maxi. Bitcoin me voló la cabeza desde muchísimas perspectivas distintas. Sentí que había encontrado a mi gente y el catalizador adecuado para ayudar a mejorar el estado del mundo. Pensaba en Bitcoin 7 días a la semana, viajé a un montón de meetups y conferencias por todo el mundo. Trabajar en mi empleo fiat ya no era un buen uso de mi tiempo ni de mi energía. Tenía que alinear mi capacidad mental con mi actividad económica. ¿Cómo podía contribuir? Soy constructora, líder y emprendedora por dentro.

Y así, sin más, Peach nació en mi cabeza en 2020.

Al principio construí Peach para mí misma. ¿Cómo adquirir Bitcoin «de la forma correcta», sin sacrificar privacidad ni seguridad, pero a través de una plataforma fácil de usar?

El espacio estaba totalmente abierto. Por un lado veía un montón de plataformas de trading... Kraken, Coinbase, etc. Realmente sonaban a cosa de crypto bros y traders. Por otro lado veía brókeres más pequeños, a menudo liderados por su fundador. Opciones muy interesantes, pero la mayoría seguía exigiendo KYC y no estaba disponible en móvil. Y luego vi los marketplaces peer-to-peer. Opciones interesantes para acumular sats: sin KYC, con un libro de órdenes descentralizado, es decir, sin un panal de datos, y con muchos métodos de pago disponibles, incluidos los locales.

Y aquí entra Peach.

## Lo que Peach fue construido para ser

- **Una marca cercana y del día a día.** Una marca que da la bienvenida a tu mujer, a tu hermana y a tu abuela.
- **Un marketplace mobile-first,** construido desde cero.
- **La mejor experiencia peer2peer en Bitcoin.** Un producto pensado en cada rincón para que el usuario sienta que todo es fluido, fácil, seguro e incluso divertido. En Peach, el producto hace el trabajo duro entre bastidores; el usuario simplemente se deja guiar por el flujo.
- **Una infraestructura de back-end para que el equipo gestione la resolución de disputas,** directamente en la app de los usuarios.
- **Todo en autocustodia,** con una wallet integrada construida con bdk, y datos de pago y mensajes de chat cifrados con la clave PGP del usuario.
- **Y un modelo sin KYC,** ¡con una empresa registrada en Suiza!

Este último punto es del que quiero hablar hoy.

## Sin KYC... y legal

¡¡¡Sin KYC!!! 🤯 ¡Y legal respecto a las queridas leyes de los gobiernos fiat!

No quería en absoluto abrir un negocio en el que la empresa fuera responsable de los fondos de los usuarios.

No quería en absoluto abrir un negocio en el que el cumplimiento normativo fuera mi trabajo a tiempo completo en lugar de construir producto.

Así que, milagrosamente, encontré una vía con los reguladores suizos. En 2022 trabajé en un caso de cumplimiento en el que argumenté y presenté lo siguiente:

- **Las operaciones de Peach son puramente bipartitas.** El vendedor financia el escrow con sus propias claves y el comprador firma un mensaje confirmando que la dirección de liberación le pertenece. Esto ocurre bajo el capó cuando se usa la wallet de Peach, y el usuario lo hace manualmente cuando usa una wallet externa.
- **El mecanismo y el papel del escrow son puramente técnicos,** para garantizar la seguridad de la operación. El escrow no es una tercera parte económica en la transferencia de fondos. Todas las salidas del escrow están predefinidas antes de que empiece el contrato entre comprador y vendedor, y la salida no se puede alterar. Incluso en los casos en que el vendedor pierde una disputa y los fondos deben enviarse al comprador sin la firma del vendedor —lo que ocurrió a una tasa del **0,03 %** durante el último año— los sats se envían al comprador una hora después de que Peach obtiene una única firma del escrow (4320 bloques después de la fecha de creación del escrow).
- **El ID único del dispositivo se hashea y se almacena,** garantizando un dispositivo = una cuenta.
- **Los datos de pago se hashean y se almacenan,** garantizando una persona = una cuenta.

Sobre la base de esos mecanismos de cumplimiento, un OAR suizo autorizó a Peach en 2022 a operar un marketplace sin KYC con límites de trading diarios y mensuales.

## Qué ha cambiado este año

Peach obtuvo su licencia en 2022 y fue auditado con éxito por una empresa de auditoría independiente en 2023, 2024 y 2025.

Pero este año, el regulador ha decidido que la regla de ayer no es la regla de hoy. Ya sabéis... 1984 y todo eso. Lo que era cierto ayer no lo es hoy.

Así que el mes pasado recibí una carta. A pesar de una auditoría independiente satisfactoria, el regulador —por motivos desconocidos— pretende recalificar y reconsiderar el acuerdo de cumplimiento que ellos mismos aprobaron hace unos años.

No os voy a mentir: sabía desde el día 1 que esto pasaría tarde o temprano. Por algo tuiteo a menudo *«Stack sats while you still can»*.

Todavía no me rindo ni me pliego. Al menos no sin responder al regulador. También seré totalmente honesta: si pierdo el argumento, tampoco iré en contra. Peach ha sido un negocio legal desde el día 1, y pretendo que siga siéndolo.

## Qué pasa ahora: sin escrow, temporalmente

Mientras la evaluación de la situación sigue en curso, hemos decidido **pausar el modelo de escrow actual de Peach.**

Mientras tanto, y temporalmente hasta que tengamos la sentencia final, hemos decidido continuar la operación... **sin escrow.**

Solo los siguientes usuarios podrán crear ofertas de venta:

- Usuarios con KYC
- Usuarios especiales que incluyamos manualmente en la lista blanca (actualmente no hay nadie)
- Usuarios con **cero disputas perdidas** Y más de **60 operaciones como vendedor**
- Usuarios con **cero disputas perdidas** Y más de **30 operaciones como vendedor** Y más de **80 operaciones en total**

Un detalle: si un usuario **no** tiene KYC, no puede estar en más de **1 operación a la vez.** Es una protección contra un vendedor malintencionado que intente estafar a varios compradores a la vez.

El sistema de disputas dentro de la app seguirá disponible para ayudar, pero Peach ya no tendrá una firma en el escrow.

También seguiremos cobrando un 2 % de comisión sobre las transacciones de liberación... para pagar nuestras facturas, ya sabéis.

## La encrucijada

No sé qué le depara el futuro a Peach. Lo que sí sé es que Peach no es solo un marketplace. Peach es una marca, una reputación, una base de usuarios y una comunidad.

Peach está ahora en una encrucijada.

El marketplace p2p puede continuar o no como hasta ahora con un modelo de escrow.

Quizá haya llegado el momento de diversificar. Peach está idealmente posicionado para desarrollar un conjunto de servicios autocustodiales y convertirse en el compañero de Bitcoin que recomendarás a tu mujer, a tu abuela y a tu hermana.

Quizá este camino tenga que continuar sin mí.

El camino se irá desvelando en las próximas semanas. Os mantendré informados.

Gracias.
