---
keywords:
  - Bidhaa
  - P2P
  - mwongozo
  - programu
  - javascript
  - bitcoin
tags:
  - Bidhaa
  - P2P
  - Mwongozo
previewImage: /img/blog/under-the-hood/peachmechanic2.png
---

# Peach Bitcoin Chini ya Hoods: mtazamo wa kiufundi kwa nini ni ubadilishaji wa P2P salama zaidi


#######


Aaaaah Bitcoin — aina hii nzuri ya pesa inayofanikiwa kutokana na vipengele vyake vya msingi.  
Sote tunapenda, lakini tunatambua pia kwamba kuna hatari zinazohusiana na uhuru wa binafsi: ukishiriki seed zako, unaweza kupoteza kila kitu.  
Ukituma kwa anwani isiyo sahihi, hutapata tena.

Hivyo basi, kutoa programu zinazohusiana na Bitcoin kama open-source ni muhimu sana — App ya Peach inapatikana kwenye GitHub kwa kila mtu ambaye anataka kuangalia!

Kwa hakika, kuwa open-source haimaanishi kila mtu atasoma kwa makini na kuelewa kanuni na mbinu.  
Ndiyo maana ninaandika makala hii: ili **kuonyesha jinsi Peach ilivyo salama** na hatua zilizofanywa kufanikisha hilo.

## Hatua 1: Kutengeneza Akaunti Isiyo na KYC kwenye Peach

Ili kuwa wazi kabisa: Seed yako ya Bitcoin **ndiyo Akaunti yako ya Peach**.

Ili kutumia Peach, unahitaji kutengeneza akaunti, ambayo inahusisha kushiriki Public Key ya akaunti yako na kuthibitisha umiliki wako.

Ili kufanya hivyo:

*  1 - pata Tarehe na Muda wa sasa (kwa millisekunde) kama maandishi  
*  2 - tumia Private Key yako kuunda saini ya maandishi hayo  
*  3 - tuma Public Key, tarehe/muda wa sasa na saini  

Pia unahitaji kuunda `uniqueId` itakayosaidia kuzuia watumiaji wengine kujifanya wewe.  
Hii ni muhimu kwa mfano ikiwa unapoteza seed zako lakini unataka kudumisha akaunti hiyo hiyo.  
Lakini tusiingilie undani sana hapa.

#######

Hapa kuna nambari ya JavaScript kufanya hili:

#######

Hongera! Umeunda akaunti kwenye Peach!  
Server imehakiki kwamba kwa wakati huu wewe ndiye mmiliki wa Bitcoin Key-Pair inayolingana na Public Key uliyoituma.

## Hatua 2: Kutuma Public PGP Key yako

Kutakuwa na usimbaji wa data mwingi… na pia ufunguaji wa data.  
Bitcoin Keys zinaweza tu kusimba kwa njia moja, kwa hivyo tunahitaji PGP Keys kwa usimbaji wa njia mbili.  
Hii ni muhimu kwa usimbaji na ufunguaji wa data za akaunti za benki, ujumbe wa chat, n.k.

Kutuma Public PGP Key ni sawa na kutuma Public Bitcoin Key, lakini kuna hatua ya ziada:  
kusaini Public PGP Key kwa Bitcoin Private Key, ili kuthibitisha kuwa mtumiaji ndiye mmiliki wa Bitcoin na PGP Keys zote.

#######

Kwa wakati huu, Peach ina Public Keys zote zako za Bitcoin na PGP!  
Hii itakuwa muhimu sana kwa biashara kwenye Peach.

## Hatua Zifuatazo

Kuanzia sasa, mwongozo utaonyesha pande zote mbili: upande wa Mnunuzi na upande wa Muuzaji.

Hatua ni:

*   3.S Muuzaji anaunda Ofa ya Uuzaji  
*   4.S Muuzaji anatoza Peach Escrow  
*   5.B Mnunuzi anatoa Trade Request kwenye Ofa ya Uuzaji  
*   5.S Muuzaji anakubali Trade Request ya Mnunuzi  
*   6.B Mnunuzi anatangaza kuwa Malipo ya Fiat yamefanywa  
*   6.S Muuzaji anathibitisha kupokea Malipo  

## Hatua 3.S: Muuzaji anaunda Ofa ya Uuzaji

Kuunda Ofa ya Uuzaji ni sawa na kutangaza kuwa uko tayari kuuza kiasi fulani cha Bitcoin.  
Lakini si hivyo tu: Muuzaji lazima akubali kitu kwa malipo.  

Tofauti ya Ofa ya Uuzaji:

* kiasi cha Bitcoin cha kuuza  
* Sarafu zinazokubalika na Muuzaji  
* Mbinu za Malipo zinazokubalika na Muuzaji (pesa taslimu, Uhamisho wa Benki, Revolut, nk.)  
* Premium (bei ya juu ya Bitcoin kulingana na thamani ya soko)  

Iwapo kila kitu kitakwenda vizuri, Mnunuzi atavutiwa na ofa na kutoa Trade Request.  
Wakati huo, lazima achague **sarafu moja na njia ya malipo moja**.  
Kadri Muuzaji anavyoonyesha chaguzi nyingi, ndivyo uwezekano wa kuvutia Mnunuzi unavyoongezeka.

#######

Kwenye nambari, Muuzaji anatangaza kuuza 21,000 Sats (0.00021 Bitcoin) kwa premium ya 1%.  
Anataka kupokea Euro kupitia akaunti yake ya Wise.  
Haitoi ID ya akaunti yake ya Wise, bali hash tu.  
Peach haitajua maelezo ya Malipo yake, ili kudumisha usiri.  
Pia, anatoa **Anwani ya Kurudisha** kwa kesi ya kurudishiwa fedha.

## Hatua 4.S: Muuzaji anatoza Peach Escrow

Baada ya ombi la API la Peach kuunda Ofa ya Uuzaji, Muuzaji anapata ID ya Ofa:

#######

Hifadhi thamani hii.  
Oferta imetengenezwa, lakini bado si ya umma: hakuna Mnunuzi anayeweza kuingiliana nayo.  
Kwanza, Muuzaji lazima atoze Escrow.

Escrow ni kama Hazina inayohitaji idhini ya Muuzaji na Peach.  
Bitcoin inaingizwa kwenye Hazina na inabaki salama hadi mwisho wa Biashara.  
Kwa kuwa inahitaji idhini ya Muuzaji, na Escrow ni Script kwenye Bitcoin Blockchain (anwani ya P2WSH), Peach inahitaji Public Key ya Muuzaji kuunda Escrow hii.

Kwa wakati huu, Muuzaji anatoa Public Key anayotaka kutumia kwa Escrow.  
Peach huchagua Public Key yake yenyewe na kuunda anwani.

#######

Kwenye nambari, Muuzaji anatoa Key Pair mpya kwa kutumia ID ya Ofa ya Uuzaji.  
Hii ni njia salama na inayoweza kurudiwa.

Baada ya kutuma Public Key, API ya Peach inarudisha anwani ambapo Muuzaji anatakiwa kutuma 21,000 Sats.  
Lakini huna haja ya kuamini tu: unaweza kuthibitisha.

Tuthibitishe!

API ya Peach pia inarudisha Public Key iliyotumika kwa Escrow hii, ambayo inaturuhusu kuunda anwani tena kwa kutumia Bitcoin Script.

#######

Script ya Escrow:

* inahitaji saini ya Peach kila wakati  
* na zaidi:
  * inahitaji saini ya Muuzaji  
  * au kwamba block 4320 zimechimbwa tangu Bitcoin itumwe kwenye anwani hiyo  

Kwa nini 4320 block?  
Hiyo ni takriban siku 30 za block (1 block kila dakika 10 kwa wastani).  
Baada ya mwezi, Peach inaweza kutoa saini peke yake ikiwa Muuzaji hatashirikiana au atapoteza key zake.

Peach ina sifa safi ya kushughulikia fedha za Muuzaji.

Baada ya kujenga script, unaweza kuthibitisha anwani ya P2WSH inayoundwa na kuona kuwa ni ile ile API ya Peach iliyorudisha.

#######

Nzuri! Sasa fanya muamala wa Bitcoin kwa anwani hiyo na subiri Escrow itajulikana kama imefadhiliwa.

#######

Baada ya block moja, Ofa ya Uuzaji inakuwa ya umma na Wanunuzi wanaweza kuanza kuingiliana nayo.


## Hatua 5.B: Mnunuzi anatoa Trade Request kwenye Ofa ya Uuzaji

Sasa ni wakati wa Mnunuzi kuchukua hatua!

Kwanza, angalia Ofa zote za Uuzaji zilizopo:

#######

Kwa urahisi, Mnunuzi atavutiwa na Ofa ya kwanza iliyopo.

#######

Mnunuzi anataka kutoa Trade Request, kumjulisha Muuzaji kuwa yuko tayari kufanya Biashara chini ya masharti yake.  
Inaonekana rahisi, lakini hili ndilo hatua **ngumu zaidi** ya mchakato mzima.

Mnunuzi lazima atume:

* Njia ya Malipo inayopendekezwa (moja kati ya zile zinazokubaliwa na Muuzaji)  
* Sarafu inayopendekezwa (kama ilivyotajwa hapo juu)  
* Key Simetrici (kwa mawasiliano ya moja kwa moja kati ya Mnunuzi na Muuzaji) iliyosimbwa  
* Saini ya Key Simetrici  
* Data za Malipo zilizofichwa kwa kutumia Key Simetrici  
* Saini ya Data za Malipo  
* Anwani ya Kutoa (Release Address): ambapo Mnunuzi anataka kupokea Bitcoin iliyonunuliwa  
* Saini ya Ujumlishaji wa Anwani ya Kutoa: uthibitisho kwamba Mnunuzi ndiye mmiliki, ukitumia BIP-322  
* Ada ya juu ya kuchimba: kiasi gani Mnunuzi yuko tayari kutoa kwa malipo ya Miners  

Ni mengi, sivyo?  
Lakini ndiyo maana Peach ni salama sana!  
Tufanye hatua kwa hatua.

### Njia ya Malipo na Sarafu inayopendekezwa

Hii ni rahisi zaidi:

#######

### Key Simetrici

Key Simetrici itatumika na **AES256 Usimbaji wa Mbili-Njia**: unaweza kusimba ujumbe na kisha kuufungua kwa kutumia key ile ile.

#######

Tengeneza namba nasibu:

#######

Hautatumia key hii waziwazi!  
Lazima isimbwe kwa njia ambayo Mnunuzi na Muuzaji pekee wanaweza kuufungua, kwa kutumia Public PGP Keys zao.

#######

Ili Muuzaji ajue kuwa Key Simetrici imetengenezwa na Mnunuzi, lazima pia aisaini:

#######

### Data za Malipo

Hizi ndizo taarifa muhimu zaidi: IBAN, username ya Revolut, kila kitu kinachotambua chanzo cha malipo ya Fiat.  
Mnunuzi anazisimba na Key Simetrici ili Muuzaji aweze kuzipata baadaye.

#######

### Kuweka Anwani ya Kutoa na kuthibitisha umiliki

Lazima uamue wapi Bitcoin ya Biashara itatumwa.  
Kuunda anwani ni rahisi; kuthibitisha umiliki ni changamoto.  
Hufanywa kwa sababu za kisheria na kama tahadhari ya ziada.  
Tuna tumia **BIP-322**: saini ujumbe kwa Private Key yako ya Bitcoin, uthibitishwe kwa Anwani.

#######

### Ada ya juu ya kuchimba

Mnunuzi anaweza kuamua kiasi cha juu kinachokubalika cha ada ya miners kwa muamala.

### Kutoa Trade Request

Sasa kila kitu kimeandaliwa, na Mnunuzi anatuma Trade Request.

#######

Sasa ni zamu ya Muuzaji kukubali.

## Hatua 5.S: Muuzaji anakubali Trade Request

Muuzaji anakagua orodha ya Trade Requests zilizopokelewa:

#######

Kama Muuzaji anakubali Trade Request, lazima ashiriki Data zake za Malipo na Mnunuzi, ili Mnunuzi ajue wapi Fiat itatumwa.

Kwa kuwa Key Simetrici tayari imetumwa na Mnunuzi, Muuzaji anaweza kuifungua na kuitumia kusimba Data zake za Malipo.

#######

Na hiyo ni yote! Sasa Muuzaji anaweza kukubali Trade Request na Biashara rasmi inaanza.

#######

Ikiwa kuelewa mchakato mzima ni mgumu, hapa kuna picha ya kuelezea:

#######

## Hatua 6.B: Mnunuzi anatangaza Malipo yametolewa

Mnunuzi anaweza kuangalia kama ana Mikataba (Trades zilizokubaliwa na Muuzaji) kwa kutumia endpoint ya `contract summaries`:

#######

Kama Mkataba una hali ya **“paymentRequired”**, basi ni zamu ya Mnunuzi kufanya malipo ya Fiat.

Ili kufanya hivyo, afungua Data za Malipo za Muuzaji kwa Key Simetrici ya wakati Trade Request ilitolewa.  
Kama hakuwa ameihifadhi, anaweza kutumia Private PGP Key yake.

#######

Hii inapaswa kufanywa nje ya Peach: Mnunuzi anafungua App ya Benki na kufanya Uhamisho wa Fiat.

Bitcoin tayari ipo kwenye Escrow, inasimamiwa na Peach na Muuzaji.  
Unaweza pia kuangalia Anwani ya Escrow kwenye data za Mkataba na kutumia Blockchain Explorer.

Baada ya malipo kufanywa, Mnunuzi anatangaza kuwa Malipo yametolewa:

#######

Hii ilikuwa Hatua ya mwisho ya Mnunuzi.  
Sasa Muuzaji lazima athibitishe kupokea Fiat na kutoa Bitcoin kwenye Anwani ya Mnunuzi.

## Hatua 6.S: Muuzaji anathibitisha kupokea Malipo

Vivyo hivyo, Muuzaji anakagua Mikataba iliyopangiwa kwake.

#######

Majibu ya API yanajumuisha **PSBT** (Partially Signed Bitcoin Transaction)  
ambayo ni muamala wa Bitcoin kutoka Escrow hadi Anwani ya Mnunuzi.  
Saini ya Peach tayari ipo, inahitaji saini ya Muuzaji tu.

#######

Sasa Muuzaji anaweza kumalizia Muamala, kwa kuwasilisha saini zote mbili na Escrow Bitcoin Script.  
Tunaanza na njia ya MultiSig ya script (njia ya pili) na kuingiza `OP_FALSE` kwenye stack ili kuathiri IF statement kwa usahihi.

#######

Hatua ya mwisho: tuma Muamala uliokamilika kwenye API ya Peach:

#######

Basi wapenzi, hivi ndivyo tunavyofanya biashara kwenye Peach kwa **usalama na faragha ya hali ya juu!**
