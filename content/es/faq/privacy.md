# Privacidad FAQ

:::details ¿Qué información recopila Peach de mí?

Nos esforzamos por almacenar la cantidad mínima absoluta de datos de nuestros usuarios. Como resumen rápido, esto es lo que tenemos en nuestros servidores:

- Un hash* del ID de tu teléfono
- Un hash de tus datos de pago
- Tus chats cifrados
- Los datos de tus transacciones (qué tipo de método de pago estás usando, cuánto estás comprando, etc.)
- Datos de uso, si diste tu aprobación

Para un desglose completo, consulte nuestra [política de privacidad](/es/privacy-policy/).

\* Un hash es una operación para que los datos se hagan irreconocibles, similar a la encriptación. Los mismos datos siempre conducirán al mismo hash. Esto significa que no sabemos cuáles son los datos, pero podremos detectar si se usan los mismos datos dos veces.
:::

<!--
:::details ¿Qué información se envía cuando comparto datos de uso?
Dar una lista
:::
-->

:::details ¿Quién puede ver mis detalles de pago?

Solo tu contraparte puede ver tus detalles de pago; se envían a través de los servidores de Peach, pero están completamente cifrados de extremo a extremo (como con la mayoría de las aplicaciones de chat) para que no podamos ver de qué se trata.

Cuando inicies una disputa, el mediador asignado de Peach podrá ver los detalles de pago y el historial de chat tuyo y de tu contraparte.
:::

:::details ¿Cómo verificar el APK?

Siga estos pasos para verificar que el APK que descargó es el APK real de Peach:

- Descargue el APK que desea instalar desde el sitio web, así como la firma y el manifiesto (todo se puede encontrar en https://peachbitcoin.com/apk)

- Descargue la clave PGP de Peach https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2 (también se puede encontrar en nuestro sitio web)

- Genere el hash del archivo APK que ha descargado y comparelos con el hash en el manifiesto.
```
sha256sum app-prod-arm64-v8a-release.apk
```
(sustituya app-prod-arm64-v8a-release.apk por el nombre de su archivo). Debería ser el mismo que en el manifiesto. De lo contrario, contáctenos y asegúrese de no instalar esa aplicación en su dispositivo. En este ejemplo, debería ver la siguiente salida:
```
$ sha256sum app-prod-arm64-v8a-release.apk
802450713cb2183e7904ad58813effabf007d518d4467461c3928625e453942c  app-prod-arm64-v8a-release.apk
```
Si lo comparamos con el que se encuentra en manifest-peach.txt, podemos ver que es el mismo.

- Agregue la clave de Peach a su llavero
```
gpg --import PGP-peach.asc
```
(asegúrese de sustituir PGP-peach.asc por el nombre de archivo correcto, por lo general será 48339A19645E2E53488E0E5479E1B270FACD1BD2.asc)

- Verifica las firmas que descargaste previamente con el siguiente comando:
```
gpg --verify manifest-peach.sig manifest-peach.txt
```
En la salida deberías ver la siguiente línea:
```
gpg: Good signature from "hello@peachbitcoin.com <hello@peachbitcoin.com>" [unknown]
```
:::

:::details ¿Cómo firmar una dirección externa?
Sigue estos pasos para firmar la dirección de recepción cuando compras Bitcoin a una billetera externa:

_Nota: los primeros 2 pasos son útiles si **siempre** quieres recibir tus fondos en direcciones externas. Si solo quieres hacerlo una vez, o quieres usar la billetera de Peach a veces, comienza desde el paso 3._

1. Ve a Configuración
  - desactiva la billetera de Peach
  - ve a dirección de pago

2. Pega la nueva dirección de recepción

3. Sigue el proceso para publicar tu oferta de compra y, antes de publicarla, asegúrate de elegir recibir en la dirección de tu billetera externa (haz clic en el icono de billetera pequeña en la esquina superior derecha de la pantalla de resumen de la oferta).

4. Una vez que confirmes tu oferta de compra, aparecerá el mensaje para firmar tu dirección. Cópialo y vuelve a tu billetera.

5. Busca la opción "firmar/verificar"* y pega:
  - tu dirección de recepción
  - el mensaje de Peach

6. Haz clic en firmar y aparecerá la firma. Cópiala.

7. Pega la firma en la billetera de Peach y haz clic en confirmar.

8. Tu oferta se publicará.

_*Aviso: no todas las billeteras admiten la opción de firmar/verificar tu dirección. Peach recomienda usar Blue Wallet, Sparrow o Samourai, ya que todas ofrecen la opción de firmar/verificar._
:::

:::details ¿Se admite Taproot?

- Es posible enviar sats a Peach desde una dirección de Taproot y retirar fondos de la billetera de Peach a una dirección de Taproot.
- NO es posible establecer una dirección de Taproot como dirección de pago directo (no es posible firmar un mensaje con una dirección de Taproot).

:::


