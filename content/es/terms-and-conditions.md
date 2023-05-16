# Términos y Condiciones

Estos Términos de Servicio se actualizaron por última vez el **12 de mayo de 2023**

## 1. Introducción

Esta página establece los términos de servicio para los titulares de cuentas de Peach. Al crear una cuenta de Peach, aceptas todos estos términos y condiciones.

Cuando hablamos de "Peach", "nosotros" o "nuestro", nos referimos a Peach S.A.R.L y sus representantes. Peach Sàrl es una empresa acreditada por [SRO PolyReg](https://www.polyreg.ch/en/) y está registrada, organizada y existente bajo las leyes de Suiza, con número de registro de la empresa CHE-158.025.408, cuya oficina registrada está en:

Rue des Beaux-Arts 8<br>
c/o LEAX Avocats Sàrl<br>
2000 Neuchâtel<br>
SUIZA

Cuando decimos "Comprador", nos referimos a la parte que crea una oferta en la plataforma para recibir bitcoin de otro usuario a cambio de una transferencia de su moneda de elección.

Cuando decimos "Vendedor", nos referimos a la parte que crea una oferta en la plataforma para enviar bitcoin a otro usuario a cambio de una transferencia de su moneda de elección.

Cuando decimos "tú", nos referimos a cualquier titular de cuenta de Peach y/o usuario de nuestros servicios y productos.

Peach es un mercado entre pares no custodial (aplicación móvil nativa) que facilita la conexión de dos personas para comprar y vender bitcoin (BTC). Peach proporciona los siguientes servicios:

* una aplicación móvil disponible para descargar de forma gratuita desde la App Store y Google Play Store
* la infraestructura para un comercio seguro con una solución de depósito en garantía de firma múltiple 2 de 2 entre Peach y el Vendedor
* un servicio de atención al cliente y gestión de disputas con un mediador de Peach empleado para arbitrar y resolver disputas entre usuarios

Peach solo facilita un mercado para que las personas intercambien bitcoin entre sí. Peach no es un intercambio de bitcoin y **no compra bitcoin a sus usuarios ni vende bitcoin a sus usuarios**.

La información en nuestro sitio web está destinada únicamente con fines informativos y no se debe confiar en ella para obtener asesoramiento legal, financiero o tributario. No se garantizan resultados financieros y siempre se debe discutir las inversiones con un profesional financiero de confianza.

A lo largo de este documento (y dentro de la aplicación y el sitio web de Peach), podemos usar indistintamente sats, satoshis, bitcoin o BTC, que todos entendemos como el token de bitcoin en la cadena de bloques de Bitcoin. Esta es la única "criptomoneda" para la cual Peach proporciona un servicio de emparejamiento. En este documento, diferenciamos entre "bitcoin" en el sentido del token y "Bitcoin" en el sentido de la red.

Peach no:

* procesa pagos - **el Comprador y el Vendedor asumen la responsabilidad total de la transferencia fiduciaria y los costos asociados**
* compra bitcoin a sus usuarios ni vende bitcoin a sus usuarios
* proporciona un servicio de intercambio de moneda digital
* participa en ninguna transacción
* proporciona asesoramiento legal o financiero


## 2. Tu cuenta

Cuando uses la aplicación Peach por primera vez, se te pedirá que elijas una contraseña para crear una cuenta. Esta cuenta permitirá que tu aplicación acceda a la plataforma de Peach para utilizar los servicios de emparejamiento. La contraseña que elijas cifrará tus datos privados de Peach, incluidas las claves para identificar tu cuenta y conectarte a los servicios de Peach.

Debes mantener la confidencialidad de tu contraseña y cuenta; **eres responsable de todas las actividades que se realicen a través de tu cuenta**, ya sea que hayas autorizado dicho uso o no. Si pierdes tu contraseña, no podrás acceder a tus comunicaciones cifradas o datos privados, y no hay forma de que Peach recupere el acceso.

No está permitido crear más de una cuenta de Peach. Con el fin de asegurarse de que un usuario solo pueda crear una cuenta de Peach desde su dispositivo móvil, **Peach guarda un _hash_ del ID único del dispositivo del usuario**, entre otras medidas. Puedes leer más sobre cómo se utilizan tus datos en nuestra [política de privacidad](https://peachbitcoin.com/privacy-policy/).

Debes tener al menos 18 años para registrarte en una cuenta de Peach. Al registrarte para obtener una cuenta, confirmas que tienes al menos 18 años.

## 3. Generando claves de Peach

Cuando creas una cuenta, se crea en tu dispositivo un par de claves público y privado que es único para ti. Tú tienes la clave privada: nosotros no tenemos una copia.

Cuando se realiza un emparejamiento (consulta las secciones 4 y 5), se utilizan las claves respectivas del comprador y del vendedor para crear una clave simétrica. Esta clave simétrica se utiliza para cifrar las comunicaciones entre las partes involucradas en este contrato/comercio específico. Por lo tanto, no podemos leer tus comunicaciones con otro usuario a menos que tú o la otra parte nos den la clave simétrica para descifrar estas comunicaciones, al plantear una disputa según se describe en la sección 9.

## 4. Creación de ofertas

Los usuarios de Peach pueden crear ofertas para comprar o vender sats a cambio de la moneda que elijan. El vendedor puede establecer las condiciones del comercio:

* la cantidad de bitcoin que se va a vender
* el o los métodos de pago que el vendedor está dispuesto a aceptar (incluidos los detalles de pago correspondientes que se utilizarán si se produce un emparejamiento y se realiza un comercio)
* las monedas que el vendedor está dispuesto a aceptar
* la prima (porcentaje por encima del precio de mercado en el momento de realizar el emparejamiento; consulta más detalles en la sección 6)

Los detalles de pago no pueden cambiarse desde el momento en que se publicó una oferta y en el momento del contrato. En el momento en que se publica la oferta de venta, se crea un _hash_ que se vincula a la oferta de venta.

Para que esta oferta esté disponible, el vendedor financiará el depósito en garantía.

El vendedor será cobrado una tarifa por la red Bitcoin para financiar un depósito en garantía, al igual que cualquier transacción estándar de Bitcoin. Cancelar una oferta resultará en que la red de Bitcoin cobre una comisión nuevamente. Cuando un fideicomiso de Peach se libera (para el Comprador o el Vendedor), la comisión se calcula automáticamente según la dinámica del mempool.

El Comprador publicará una oferta de Compra, en la que indicará sus condiciones preferidas para encontrar una oferta de Venta coincidente:

* un rango de la cantidad de bitcoin que desea comprar
* el método(s) de pago que el Comprador está dispuesto y puede utilizar
* las monedas que el Comprador está dispuesto y puede enviar

El Comprador proporcionará una dirección de Bitcoin a la que puede recibir Bitcoin, en caso de que esta oferta de compra resulte en un intercambio. Esta dirección puede ser proporcionada automáticamente por la billetera Peach incorporada, o el comprador puede proporcionar una dirección de una billetera externa.

Las ofertas de venta solo se mostrarán a los Compradores que hayan realizado una oferta de Compra que sea elegible para coincidir; lo que significa que la cantidad que el Vendedor ha enviado al fideicomiso se encuentra dentro del rango que el comprador ha indicado, y hay al menos una pareja de Moneda / Método de Pago que ambos usuarios han seleccionado.

El servicio Peach ofrecerá al Comprador todas las ofertas de Venta elegibles que coincidan con sus preferencias. Al aceptar (coincidir) una oferta del Vendedor, el Comprador acepta estar sujeto a los términos y condiciones de esa oferta (Moneda y Método de Pago). Cuando las ofertas coinciden con más de una moneda y/o Método de Pago, el Comprador puede indicar cuál coincidencia le gustaría seleccionar.

**El precio del intercambio, la moneda y el método de pago utilizado para el intercambio se bloquean en el momento en que el Comprador coincide con una oferta de venta específica**, según el precio de mercado y la prima establecida en la oferta de Venta. La oferta de Compra coincidente para esa oferta de Venta específica se comunica al usuario que realizó esa oferta de Venta respectiva.

Los detalles de pago ingresados en Peach solo se comparten con el Comprador en un contrato (Oferta coincidente por el Comprador y Doble coincidencia por el Vendedor). Esta comunicación está encriptada de extremo a extremo y solo es para el Comprador.

De acuerdo con la ley suiza, los intercambios sin KYC están regulados hasta un límite de CHF1000/día y CHF100'000/año. Una vez alcanzado este límite, no podrá realizar nuevos intercambios.

Como medida de seguridad, los dos primeros intercambios están limitados a CHF 50.

**Peach se reserva el derecho de eliminar ofertas a su discreción**. En general, se eliminarán las ofertas si parecen ser ilegales, no auténticas, fraudulentas o de alguna otra manera incorrectas.

## 5. Intercambios

Cualquier usuario puede usar Peach para crear una oferta de compra o venta. Como se describe en la sección 4, el Vendedor establece los criterios iniciales para una coincidencia.

Luego, un Comprador puede seleccionar las ofertas de venta que desea ver creando su propia oferta de compra con los criterios preferidos. El Comprador puede coincidir con tantas ofertas de venta como desee; se establece un intercambio con el primer Vendedor que le haga coincidir. En ese momento, se determina la cantidad de dinero fiduciario que se enviará al Vendedor. Ambas ofertas se eliminan del mercado, y ambas partes acuerdan llevar a cabo el intercambio de acuerdo con sus condiciones. Si alguna de las partes no cumple con alguna de las condiciones, se puede plantear una disputa, como se describe en la sección 9.

Al coincidir (como Comprador) y doble coincidir (como Vendedor), ambas partes aceptan estar sujetas a los términos y condiciones de esa oferta, que incluye la resolución de disputas según se describe en la sección 9.

El Comprador es responsable de asegurarse de que la cantidad y la moneda solicitadas por el Vendedor estén disponibles para el Vendedor a través del método de pago especificado en la oferta coincidente.

No tenemos ninguna cuenta bancaria que contenga los fondos de los usuarios, ni facilitamos ni retenemos pagos en moneda local entre Compradores y Vendedores.

Los intercambios de Bitcoin se realizan a través de la red de Bitcoin, que no podemos y no controlamos. Cuando un Vendedor envía BTC para financiar una oferta de venta, el Vendedor transfiere BTC directamente a un script de fideicomiso en la cadena de bloques pública de Bitcoin. La salida de transacción de fideicomiso solo puede ser redimida por el Comprador o el Vendedor. Peach no puede acceder a los BTC retenidos en fideicomiso según el código del script de fideicomiso de Bitcoin.

## 6. Comunicación entre las partes

Los usuarios de Peach pueden comunicarse a través de la plataforma Peach cuando hay una doble coincidencia y, por lo tanto, se crea un contrato.

Toda la comunicación realizada entre Compradores y Vendedores en Peach está encriptada de extremo a extremo con una clave simétrica específica para el contrato que se ha creado (como se describe en la sección 3). Ninguna tercera parte, incluyéndonos a nosotros, tiene la capacidad técnica de descifrar y/o leer estos mensajes a menos que se nos proporcione el secreto compartido para hacerlo por una de las partes al plantear una disputa, como se describe en la sección 9. El historial del chat estará disponible solo para el arbitraje. Una vez que se resuelve una disputa, el chat vuelve a ser privado entre las dos partes.

**Es responsabilidad del usuario realizar y mantener registros adecuados de comunicaciones, detalles de transacciones e historial financiero en la medida en que se les requiera hacerlo en su jurisdicción.**

Una vez que un usuario pierde el secreto compartido utilizado para encriptar los mensajes, esa conversación se vuelve inaccesible y se considera perdida.

No debes participar en comunicación con otros usuarios de Peach que sea ofensiva, abusiva, ilegal, difamatoria, indecente o inapropiada.

Reconoces que no podemos proporcionarte ninguna otra información sobre la identidad de otro usuario de Peach que no sea la que está disponible para ti a través de la aplicación Peach.

## 7. Términos de la transacción

Una vez que un comerciante y un Vendedor hacen coincidir sus ofertas, el intercambio debe proceder de acuerdo con los términos a los que tanto el Comprador como el Vendedor han coincidido. Esto normalmente implicará los siguientes pasos:

* El Comprador realiza el pago en la moneda coincidente,
* el Comprador afirma que se ha realizado el pago al presionar el botón Pago Realizado,
* una vez que se recibe el pago completo, el Vendedor confirma esto haciendo clic en el botón Confirmar Pago,
* luego, los bitcoins se liberan automáticamente del fideicomiso y se envían a la dirección de Bitcoin que el Comprador indicó en su oferta de Compra,
* ambos usuarios califican a la contraparte.

Si el Comprador no afirma que se ha realizado el pago dentro del período de tiempo definido, el fideicomiso puede ser cancelado por el Vendedor. El Comprador puede cancelar el fideicomiso en cualquier momento.

Las ventas entre Compradores y Vendedores están sujetas a:

* el pago de la tarifa de Peach
* el proceso de resolución de disputas
* los términos de la coincidencia, que constituyen un acuerdo entre el Comprador y el Vendedor con respecto a: la cantidad de bitcoin, el precio, el método de pago y la moneda.

## 8. Seguridad

Debes cumplir con todos los requisitos de seguridad razonables prescritos por Peach de vez en cuando.

## 9. Disputas

El contrato de venta es entre el Vendedor y el Comprador. En consecuencia, se requiere que las partes hagan su mejor esfuerzo para resolver la disputa entre ellos. Si las partes no pueden ponerse de acuerdo en una solución, cualquiera de las partes puede plantear una disputa e involucrar a un mediador de Peach.

Plantear una disputa y el resultado de una disputa afectará la reputación del usuario en Peach, como incentivo para "jugar limpio" y no acosar a otros usuarios planteando disputas sin motivo.

Un Comprador puede plantear una disputa por muchas razones, que incluyen, pero no se limitan a:

* **Fideicomiso no liberado por el Vendedor** - el Comprador ha realizado el pago, pero el Vendedor afirma que no ha recibido el pago o que hay problemas con el pago y se niega a liberar el fideicomiso.
* **Vendedor sin respuesta** - el Vendedor no responde a los mensajes del Comprador.
* **Comportamiento inapropiado** - el Vendedor es grosero, abusivo o muestra signos de ser un actor malicioso.

Un Vendedor puede plantear una disputa por muchas razones, que incluyen, pero no se limitan a:

* **Pago no recibido** - El Comprador afirma que se realizó el pago, pero el Vendedor no ha recibido el pago.
* **Monto de pago incorrecto recibido** - el Comprador envió un pago, pero no el monto acordado.
* **Otros errores de pago** - el Comprador envió un pago, pero no con los detalles acordados, en el método de pago correcto o dentro del plazo adecuado.
* **Comprador sin respuesta** - el Comprador no responde a los mensajes del Vendedor.
* **Comportamiento inapropiado** - el Comprador es grosero, abusivo o muestra signos de ser un actor malicioso.

La parte que abre una disputa compartirá su firma digital con Peach, lo que permitirá al mediador descifrar la comunicación entre el Comprador y el Vendedor.

Al utilizar la aplicación Peach, aceptas que, en caso de que se plantee una disputa, Peach tenga acceso a tu conversación y a toda la información requerida, incluidos los detalles de pago del contrato en disputa, para resolver la disputa durante el tiempo que dure la disputa. Aceptas proporcionar cualquier evidencia de pago o prueba de que el pago no se ha recibido correctamente mostrando la descripción general del método de pago coincidente, para el período en el que se afirmó que se realizó el pago.

Peach determinará un ganador de la disputa a su propia discreción, basándose en la evidencia proporcionada por ambas partes. El fideicomiso se liberará a esta parte después de un máximo de 30 días.

Las partes deben responder a las solicitudes de información de Peach de manera oportuna, **como máximo dentro de las 24 horas**. Si una de las partes no responde a una solicitud dentro de este plazo Peach puede decidir en cualquier momento resolver la disputa a favor de la otra parte.

Las partes acuerdan que, excepto en casos de negligencia grave o fraude, **la decisión de Peach es concluyente, final y vinculante** para ambas partes y no cabe apelación contra dicha decisión. Peach no tendrá ninguna responsabilidad con respecto a sus decisiones, ya sea para un Comprador o un Vendedor.

Una vez que se registra una disputa, se almacenará temporalmente un hash de la dirección IP y otros datos mientras la disputa esté abierta. Cuando un mediador considere que el comportamiento de una o ambas partes es un intento de defraudar a la otra parte o muestra un comportamiento no deseado, la disputa podría resultar en la prohibición del usuario infractor. Con este fin, se almacenará un hash de los datos para evitar la posibilidad de que el usuario prohibido cree otra cuenta.

Este proceso para resolver disputas está incorporado en todos los contratos entre compradores y vendedores realizados a través de Peach.

## 10. Tarifas de Peach

Cualquier contrato finalizado con éxito a través de la plataforma de Peach estará sujeto a una tarifa; el 2% del monto total enviado fuera del fideicomiso se enviará a una dirección de bitcoin controlada por Peach. Los fondos restantes se enviarán a la dirección indicada por el Comprador, menos cualquier tarifa de transacción de bitcoin.

## 11. Impuestos

Peach no asume responsabilidad por los impuestos adeudados. Los Compradores y Vendedores son totalmente responsables de determinar qué impuestos se aplican a la transacción y pagarlos.

Peach debe ser reembolsado por cualquier reclamo, pérdida o daño que surja de tu falta de pago de los impuestos correspondientes.

## 12. Suspensión de cuenta

Podemos negar a cualquier usuario el acceso a nuestros servicios por cualquier motivo, incluyendo, pero no limitado a:

* Estás utilizando la plataforma de Peach para estafar a otros usuarios o con cualquier otro propósito ilegal.
* Estás enviando mensajes ofensivos, abusivos, ilegales, difamatorios, indecentes o inapropiados a otros usuarios.
* Cualquier cambio en la ley que afecte adversamente al modelo operativo de Peach o que haga que el servicio sea ilegal.

Si un usuario es suspendido como resultado de perder una disputa planteada por otro usuario, Peach mantendrá referencias codificadas (hashes) de los datos del usuario suspendido. Estos hashes se utilizarán para denegar el acceso a cualquier cuenta que esté utilizando los mismos datos a la aplicación de Peach.

Los datos hash incluyen todos los datos de pago del usuario y su ID de dispositivo. Este hash es una referencia a los datos, pero no a los datos en sí. Permite al sistema detectar a los usuarios que utilizan los mismos datos sin conocer los datos reales.

Después de la suspensión de tu cuenta, tienes derecho a acceder a los datos locales en tu teléfono, pero no puedes utilizar la plataforma de Peach para interactuar con ningún otro usuario.

## 13. Cumplimiento de las leyes

Aunque nuestro sitio web y servicios pueden ser accesibles desde fuera de Suiza, no afirmamos que nuestros servicios cumplan con las leyes de ningún otro país. Todos los usuarios de nuestros servicios que se encuentren fuera de Suiza son los únicos responsables de garantizar el cumplimiento de las leyes locales.

Al utilizar cualquiera de nuestros servicios o productos, el usuario garantiza que dicho uso cumple con todas las leyes y regulaciones aplicables tanto de Suiza como de la jurisdicción en la que se encuentre.

## 14. Riesgos asociados con la interacción con otros usuarios

Las transferencias de Bitcoin son irreversibles. Si un usuario envía Bitcoin a una dirección incorrecta o comete algún error al transferir fondos a través de la red de Bitcoin, ni ellos ni Peach pueden revertir la transacción, y los fondos se perderán. Por lo tanto, **el usuario asume la plena responsabilidad de cualquier transferencia realizada a través de la plataforma de Peach**.

## 15. Exención de garantías

Peach es solo un servicio de intermediación y, en la máxima medida permitida por la ley, no es responsable de las acciones de sus usuarios. Esto incluye, sin limitarse a ello, las representaciones de cualquier usuario con respecto a la transferencia de fondos (Bitcoin o moneda local) o cualquier reclamación de propiedad de los fondos.

En la máxima medida permitida por la ley, Peach no garantiza la calidad o aptitud para un fin específico de sus servicios. Nuestros servicios y productos se proporcionan "tal cual" y "según disponibilidad", y su uso es responsabilidad exclusiva del usuario. Aunque nos esforzamos por mantener nuestros servicios disponibles en todo momento, no realizamos ninguna afirmación sobre la disponibilidad de los servicios.

En la máxima medida permitida por la ley, no ofrecemos garantías sobre la seguridad, confiabilidad, disponibilidad o duración de los datos que almacenamos. Los datos privados de los usuarios están almacenados en sus propios dispositivos, mientras los datos públicos (p.e. ofertas de compra y venta) serán almacenados en los servidores de Peach. El usuario es el único responsable de sus propios datos.

## 16. Integraciones de terceros

Peach puede incorporar, referenciar o proporcionar acceso a servicios de terceros. Peach no es el propietario, operador ni licenciante de estos servicios de terceros, y Peach no será responsable de las consecuencias derivadas del uso de un servicio de terceros.

El uso de cualquier servicio de terceros está sujeto a los términos y condiciones separados emitidos por el proveedor de servicios de terceros correspondiente. Es responsabilidad de cada usuario revisar los términos y políticas de un proveedor de servicios de terceros antes de decidir utilizar dicho servicio.

## 17. Limitación de responsabilidad e indemnización

Indemnizas a Peach y mantienes a Peach indemne de toda pérdida, reclamo, acción, responsabilidad, daño, costos, gastos y sanciones resultantes directa o indirectamente de:

* cualquier acción realizada que no cumpla con estos términos de servicio
* cualquier uso no autorizado de tu cuenta de Peach
* acto u omisión (incluyendo cualquier negligencia, conducta ilegal, conducta intencional o fraude) por tu parte en relación con tu uso de cualquier producto o servicio proporcionado por Peach
* cualquier reclamación de terceros contra nosotros en relación con tu uso de cualquier producto o servicio proporcionado por Peach
* cualquier acción tomada por Peach como resultado de una solicitud realizada por ti, en relación con tu cuenta, transacción o disputa
* cualquier falta de acción o retraso por tu parte en relación con cualquier disputa, incluida la falta de respuesta a una solicitud de información por parte nuestra dentro del plazo establecido en la cláusula 9 (Disputas)
* cualquier incumplimiento por tu parte de cualquier recomendación razonable realizada por Peach
* cualquier acción o inacción de los proveedores de servicios de terceros

## 18. Ley aplicable e idioma

Estos Términos de Servicio se rigen por las leyes de **Neuchâtel, Suiza**. Estos Términos de Servicio pueden ser traducidos a otros idiomas, sin embargo, el idioma oficial de estos términos es el inglés. Las traducciones pueden no representar con precisión la información comunicada en el idioma inglés. La versión en inglés de estos términos tiene prioridad sobre cualquier traducción.

## 19. Cambios en estos términos

Nos reservamos el derecho de actualizar, reemplazar o cambiar cualquier parte de estos Términos de Servicio a nuestra sola discreción, mediante la publicación de actualizaciones y cambios en nuestro sitio web. Si no estás de acuerdo con los cambios, tu único recurso es dejar de utilizar nuestros productos y servicios.

Si bien nos esforzaremos por notificar a nuestros usuarios sobre cualquier cambio, es tu única responsabilidad verificar periódicamente nuestro sitio web en busca de cambios. Tu uso continuado de los servicios después de la publicación de cualquier cambio en estos Términos de Servicio constituye la aceptación de dichos cambios.

## 20. Comprensión total

Estos Términos de Servicio contienen la comprensión completa entre las partes en relación con el tema de estos términos.

## 21. Contacto

Si tienes alguna pregunta, comentario, consultas u otra correspondencia, puedes contactar a Peach por correo electrónico a [$contactEmail$](mailto:$contactEmail$)