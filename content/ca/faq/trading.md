# Preguntes freqüents sobre el comerç

:::details Com puc estar segur d'obtenir els bitcoins / els diners?

En fer una oferta de venda, el venedor envia els bitcoins a una adreça que està controlada per ell i Peach: els bitcoins només es poden moure d'aquí si tant ell com Peach hi donen el seu consentiment. Això garanteix que:

- El venedor no pot moure els bitcoins (de tornada) per si mateix.
- Peach no pot robar els bitcoins.
- L'acheteur no rep els bitcoins fins que es realitza el pagament.
- El venedor pot recuperar els bitcoins si l'acheteur no respon.

Si la transacció no es resol de manera normal, aquesta adreça passa automàticament sota el control complet de Peach després d'aproximadament 30 dies (per ser precisos: quan s'han minat 4320 blocs de bitcoins). Això garanteix que:

- L'acheteur pot recuperar els bitcoins si pot demostrar que ha fet el pagament i el venedor no respon.
- Els bitcoins no queden bloquejats si passa alguna cosa al venedor.

Aquesta és la part més important per assegurar la vostra transacció. A més a més, tenim el nostre elaborat sistema de reputació, que us ajuda a identificar les persones que han utilitzat Peach de manera fiable durant molt de temps.
:::

:::details Per què hi ha un límit de compra?

La regulació suïssa estableix que una persona només pot comprar fins a 1000CHF de bitcoins al dia, sense proporcionar la seva identificació al venedor. Com que preferim evitar la presó, impossem aquest límit a l'aplicació.

Totes les vostres dades de pagament es conserven al vostre telèfon, de manera que no podem veure-les. El que podem veure és un hash\* de la vostra identificació del telèfon i les vostres dades de pagament. Això ens permet bloquejar qualsevol transacció que superi el límit personal.

\* Un hash és una mena de dades que s'han fet irreconeixibles, similar a xifrar-les. Les mateixes dades sempre donen lloc al mateix hash. Això vol dir que no sabem quines són les dades, però podrem veure si s'utilitzen les mateixes dades dues vegades.
:::

:::details Hi ha alguna manera de comprar / vendre més enllà del límit de compra?

Si sou un comprador o venedor de gran volum, envieu-nos un correu electrònic a [$contactEmail$](mailto:$contactEmail$)!
:::

:::details Quines són les tarifes pel comerç a Peach?

Peach cobra un 2% del volum de negoci en tarifes a l'acheteur. Quan feu una transacció a Peach, esteu realitzant operacions a la xarxa de bitcoins, el que comportarà tarifes de transacció. Podeu veure sempre l'estructura completa de tarifes al final de la vostra transacció, que podria ser semblant a això:

![Desglossament del Comerç](/img/faq/trading/TradeBreakdowns.png)
:::

:::details Com puc cancel·lar una oferta o una transacció?

Podeu cancel·lar les vostres ofertes i transaccions fent clic a la X vermella a la part superior de la pantalla, sempre que estigui disponible:

![Cancel·lar Transacció](/img/faq/trading/cancel.png)

Això dit, això sovint té conseqüències. Abans d'emparellar-vos amb algú, podeu cancel·lar en qualsevol moment. Després de l'emparellament, la vostra reputació es veurà afectada negativament. A més a més, com a venedor, haureu de demanar permís a l'acheteur per cancel·lar la transacció. Potser ja ha fet el pagament!
:::

:::details Per què he rebut menys sats dels que pensava que comprava?

Peach cobra un 2% de tarifes de negoci a l'acheteur, la qual cosa significa que rebràs menys sats que la quantitat de la transacció. A més a més, haureu de pagar les tarifes de la xarxa de bitcoins. La vostra transacció podria ser semblant a això, per exemple:

![Desglossament de Compra](/img/faq/trading/TradeBreakdownBuy.png)
:::

:::details I si no vull utilitzar la cartera Peach pel pagament / el reembossament?

És clar, sou lliures d'utilitzar la vostra pròpia cartera si ho voleu. No obstant això, us recomanem encaridament utilitzar la cartera Peach, ja que és de molt lluny la manera més senzilla de fer una transacció. Després podeu enviar els fons a qualsevol altra cartera.

Si voleu afegir la vostra pròpia cartera, podeu desactivar "pagament a la cartera Peach" i després establir una adreça de pagament personalitzada:

![Desactiva la Cartera](/img/faq/trading/disablewallet.png)

En fer una transacció, haureu de signar un missatge que indiqui que teniu el control d'aquesta cartera, d'acord amb la regulació suïssa.

Aviat treballarem en el suport xpub, però de moment haureu de canviar manualment aquesta adreça si no voleu tornar-la a utilitzar.
:::

:::details Com es calcula el preu del Bitcoin a Peach?

El preu del BTC que mostrem a Peach és una agregació del preu del BTC a les borses centralitzades.
:::

:::details Què passa amb el preu de les monedes amb una inflació alta com Argentina, Veneçuela, etc.?

Les monedes amb una inflació alta pateixen una alta volatilitat, de manera que el preu que trobeu en diferents borses pot ser diferent. Peach dóna el preu segons una agregació del preu del BTC de diferents fonts.
:::

:::details Com augmentar una transacció que està bloquejada a causa de les baixes tarifes de mineria?
Depèn del tipus de transaccions del que estiguem parlant. A continuació, es mostra una llista de totes les transaccions que es poden realitzar a Peach i les seves solucions per augmentar les tarifes:

1. Transacció per finançar l'escrow per publicar una oferta de venda
- Si heu finançat l'escrow des de la cartera Peach, podeu RBF (Replace-By-Fee) la transacció i augmentar les tarifes.
- Si heu finançat l'escrow des d'una cartera externa, haureu de comprovar si la cartera admet RBF (Replace-By-Fee) per augmentar les tarifes de la xarxa.

2. Transacció de l'alliberament de l'escrow (compra de Bitcoin)
- Si la vostra adreça de recepció és de la cartera Peach, podeu retirar la quantitat total a una altra cartera vostra amb tarifes més altes (Configuració > Tarifes de la xarxa) - tècnica CPFP
- Si la vostra adreça de recepció és d'una cartera externa, també podeu utilitzar la tècnica CPFP si la vostra cartera la suporta

3. Enviar una transacció des de la cartera Peach a una altra cartera
- RBF (Replace-By-Fee) des de la cartera Peach en els detalls de la vostra transacció!
:::

:::details Què és GroupHug?
GroupHug és simplement el terme que hem donat a l'acció de combinar transaccions d'usuaris diferents per evitar les tarifes per a cadascun d'ells. Per a una explicació més detallada, consulteu el nostre [post al blog](https://peachbitcoin.com/blog/group-hug).
:::

:::details Si tinc una única oferta de compra en curs, s'alliberarà immediatament?

No, el vostre pagament s'afegirà a una cua, esperant a ser pagat. El pagament es farà quan suficients usuaris participin en el lot. El nombre de participants necessaris es pot veure a la informació de pagament pendent. Podeu accedir a aquesta vista a través dels detalls de la transacció. Allà podeu veure quantes ranures del lot actual estan ocupades. A la informació també podeu veure una ETA que us indicarà el temps màxim d'espera si les ranures no es compleixen abans.
:::

:::details Com funciona, si tinc diverses ofertes de compra en curs?

Exactament com s'ha mencionat anteriorment, els vostres pagaments s'afegiran a la cua a l'espera d'ésser agrupats amb altres participants.
:::

:::details Hi ha un límit de participants que poden participar en l'agrupació?

No, els lots també poden superar el nombre màxim de participants. No és un tall, sinó un llindar. Això vol dir que, un cop s'hagi assolit el mínim, simplement prenem totes les psbts i les agrupem per fer la transacció, i reduïm les tarifes que paga cada participant.
:::

:::details Com signar una adreça externa?
Seguiu aquests passos per signar l'adreça de recepció quan compreu bitcoins a una cartera externa:

_Nota: Els dos primers passos són útils si **sempre** voleu rebre els fons a adreces externes. Si només voleu fer-ho una vegada o, de tant en tant, utilitzar la cartera Peach, comenceu a partir del tercer pas._

1. Anar a la configuració
   - desactiveu la cartera Peach
   - aneu a l'adreça de pagament

2. Pegar la nova adreça de recepció

3. Seguiu el procés per publicar la vostra oferta de compra i, abans de publicar-la, assegureu-vos que trieu rebre-la a l'adreça de la vostra cartera externa (feu clic a la icona de la cartera petita de la part superior a la dreta a la pantalla de resum de l'oferta).

4. Un cop hàgiu confirmat la vostra oferta de compra, apareixerà el missatge per signar la vostra adreça. Copieu-lo i torneu a la vostra cartera.

5. Cerqueu l'opció "signar/verificar" * i enganxeu-hi:
   - la vostra adreça de recepció
   - el missatge de Peach

6. Feu clic a signar i apareixerà la signatura. Copieu-la.

7. Enganxeu la signatura a la cartera Peach i feu clic a confirmar.

8. La vostra oferta està publicada.

_*Nota legal: no totes les carteres admeten l'opció de signar/verificar la vostra adreça._ 
Peach recomana utilitzar Blue Wallet, Sparrow o Samourai Wallet. Altres opcions inclouen Ledger i Trezor (carteres de maquinari), Bitcoin Core i la cartera Electrum.

També podeu trobar un tutorial pas a pas sobre com signar un missatge amb Blue Wallet al nostre compte de Youtube: [https://youtu.be/d3STuVfFWfQ](https://youtu.be/d3STuVfFWfQ)

:::

:::details Com utilitzar CPFP per accelerar transaccions bloquejades?
Seguiu els passos que hi ha en aquest vídeo: [https://www.youtube.com/watch?v=24OtQkL0CxU](https://www.youtube.com/watch?v=24OtQkL0CxU) per accelerar transaccions bloquejades utilitzant CPFP a l'aplicació Peach.
:::
