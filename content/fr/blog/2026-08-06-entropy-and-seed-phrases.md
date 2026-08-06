---
keywords:
  - entropie Bitcoin
  - phrase de récupération
  - liste de mots BIP39
  - comment sont générées les seed phrases
  - sécurité auto-conservation Bitcoin
  - génération de nombres aléatoires wallet
tags:
  - Education
  - Security
previewImage: /img/blog/entropy-and-seed-phrases/cover.jpg
description: |
  Un guide peachy sur ce qu'est vraiment l'entropie, comment fonctionnent les seed phrases, d'où vient réellement le hasard, et à quel point vos 12 mots sont sûrs.
---

# Un guide peachy sur l'entropie, les seed phrases et comment rester en sécurité

<img src="/img/blog/entropy-and-seed-phrases/hero.jpg" alt="Une pêche de dessin animé en salopette bleue court dans un désert de montres molles, de cartes à jouer, de calculatrices et de formules mathématiques flottantes, poursuivie par un dinosaure" style="display:block; margin: 0 auto 2rem; width: 100%; max-width: 520px;">

*Transparence : cet article a été écrit sans IA. L'image de couverture, elle, a bien été faite par IA.*

## Qu'est-ce que l'entropie ?

Pour commencer : l'entropie est une mesure du chaos.

Le but n'est pas de dire qu'une chose a X quantité d'entropie, mais de pouvoir comparer 2 choses et dire que l'une a plus d'entropie que l'autre.

Par exemple :

- un œuf cassé a plus d'entropie qu'un œuf parfait
- une chambre en désordre a plus d'entropie qu'une chambre rangée

Et les propriétés intéressantes de l'entropie sont :

- il est plus facile d'augmenter l'entropie (créer du chaos) que de l'inverser (créer de l'ordre)
- le monde vit dans une tendance constante à l'augmentation de l'entropie

C'est pourquoi il est plus facile de trouver quelque chose dans une pièce rangée que dans une pièce en désordre, et pourquoi la pièce devient plus désordonnée avec le temps et qu'il faut dépenser de l'énergie pour la nettoyer.

La plupart des choses dans nos vies bénéficient d'une faible entropie. L'auto-conservation du Bitcoin bénéficie d'une entropie élevée. Mais on peut dire que l'entropie est subjective. Si je connais ma seed phrase, l'entropie de mon wallet est très faible. Elle n'est élevée que pour tous les autres. Si je révèle à tout le monde 1 de mes mots, je réduis l'entropie pour eux, mais elle reste assez élevée.

## Qu'est-ce qu'une seed phrase ?

<img src="/img/blog/entropy-and-seed-phrases/seed-sprouts.jpg" alt="Cinq pousses à des stades de croissance croissants sortant d'une terre sombre" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(une graine qui devient une plante — la même idée que derrière la « graine » de seed phrase)*

D'abord : pourquoi l'appeler une graine (seed) ? Dans les ordinateurs, le hasard vient de quelque part. Si nous fournissons une graine, le hasard poussera à partir d'elle, toujours de la même manière.

Une seed phrase est une convention pour mémoriser un nombre entre 0 et 340282366920938463463374607431768211455. Oui, c'est un grand nombre, et 12 mots anglais vous aident à mémoriser votre nombre bien à vous là-dedans.

L'astuce, c'est que ce nombre pourrait s'écrire en binaire (quelque chose comme 01110010101… mais très long). La communauté Bitcoin a donc décidé de créer une liste de mots anglais et d'associer à chacun une séquence de 11 bits.

Par exemple :

```
abandon = 00000000000
zoo     = 11111111111
olympic = 10011010010
laptop  = 01111101000
```

2 choses intéressantes :

- il existe des listes de mots pour l'anglais, le portugais, le chinois, le coréen, le français, l'espagnol, l'italien et le tchèque ;
- pour être sûr que les gens ne se trompent pas en saisissant leur propre seed phrase, il existe un système qui vous signale que vous avez saisi une « mauvaise » seed, pour que vous ne puissiez pas vous tromper sur un de vos mots, ouvrir un wallet vide et paniquer.

## 12 mots, est-ce suffisant ?

La quantité de nombres représentables avec les 12 mots est immense, et c'est considéré comme sûr. Si vous voulez vous aider à retenir les 12 mots et que vous les écrivez sur un papier dans un ordre aléatoire chez vous, c'est encore relativement sûr : il faudra à quelqu'un un temps trèèèès long pour essayer toutes les combinaisons de ces 12 mots.

Bien sûr, plus de mots signifie plus d'espace, donc plus difficile à deviner. Mais parfois, assez, c'est assez.

12 mots seuls demanderaient à un ordinateur rapide environ 10²² années — à peu près mille milliards de fois l'âge de l'univers — pour vérifier tous ces nombres et « voler » tous les wallets Bitcoin à 12 mots. Si vous réunissez toute la puissance de minage de Bitcoin et que vous la redirigez vers le fait de deviner les seeds, il lui faudrait encore environ 11 milliards d'années. Et c'est une estimation généreuse : les puces de minage ne savent faire que du SHA-256, alors que vérifier une seule seed phrase représente des milliers de fois plus de travail qu'un simple hash.

Pour moi, c'est viable. Mais ajouter un mot supplémentaire augmente le temps beaucouuuup plus. À vous de voir !

## Comment ces seeds sont-elles générées ?

<img src="/img/blog/entropy-and-seed-phrases/randomness-comic.jpg" alt="Bande dessinée : lors d'une visite de la comptabilité, on présente le générateur de nombres aléatoires, un troll qui répète neuf, neuf, neuf, neuf. Vous êtes sûr que c'est aléatoire ? C'est ça le problème avec le hasard : on ne peut jamais en être sûr." style="display:block; margin: 0 auto 2rem; width: 100%;">

*(Dilbert, de Scott Adams — © 2001 United Feature Syndicate, Inc.)*

Aléatoirement. Cependant, le hasard est une illusion : rien n'est vraiment aléatoire.

Vous vous souvenez, à l'école, quand le professeur voulait qu'un élève au hasard vienne au tableau ? Ils ne choisissaient jamais l'élève n°1, mais l'élève n°7 était toujours choisi « au hasard ».

Les ordinateurs ne peuvent rien produire d'aléatoire. Mais ils peuvent générer du pseudo-aléatoire. Par exemple, ils peuvent utiliser les valeurs de température du système sur les 30 dernières minutes, plus la lumière qui entre par la webcam, plus la vitesse de connexion, plus le comportement souris/clavier, etc., comme sources de hasard. L'objectif est d'obtenir du hasard à partir de sources pratiquement impossibles à contrôler.

Un exemple célèbre est le hasard de Cloudflare utilisant des lampes à lave. Ils possèdent énormément de lampes à lave, une webcam les filme en permanence, et les motifs imprévisibles des bulles de lave servent de source de hasard.

<img src="/img/blog/entropy-and-seed-phrases/lava-lamps.jpg" alt="Un mur de dizaines de lampes à lave colorées disposées sur des étagères dans le hall d'un bureau" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(le mur de lampes à lave de Cloudflare à San Francisco, filmé 24h/24 comme source de hasard)*

## Alors pourquoi certaines seeds ont-elles été découvertes ?

Concernant l'incident Coldcard, il y avait une erreur dans le code qui utilisait une mauvaise source de hasard. Une fois que les hackers ont remarqué que le hasard n'était qu'une combinaison de facteurs simples, cela a réduit les possibilités et c'est devenu une affaire de recherche parmi ces candidats.

Encore une fois : l'entropie est subjective. Dès que quelqu'un a un « indice », l'entropie baisse. Un autre indice, et l'entropie baisse encore plus.

Exemple : imaginez que j'ai une bibliothèque très haute, remplie de livres. Je vous dis qu'il y a un billet de 5 euros caché dans un des livres. Ce sera très difficile à trouver. Mais vous regardez autour de vous et vous remarquez que je n'ai pas d'échelle pour grimper jusqu'aux endroits très hauts de l'étagère. Vous en déduisez donc que le billet de 5 euros doit être dans les livres accessibles sans échelle. Vous concentrez vos efforts sur les bons candidats et vous devenez 5 euros plus riche 🙂

## Comment Peach génère-t-il les seeds pour le Peach Wallet ?

Peach est une application mobile, elle a donc accès à la source pseudo-aléatoire sécurisée du téléphone. Pour le dire simplement : elle s'appuie sur le hasard du téléphone mobile, celui-là même qui est utilisé pour beaucoup d'autres aspects de sécurité du téléphone.

Mais comment le téléphone obtient-il ce hasard ? Il crée un pot de hasard avec des valeurs physiques :

- le temps de démarrage de toutes les applis/services du téléphone + combien de temps le démarrage a pris (au millionième de milliseconde près)
- le bruit électrique dans les circuits : hautement imprévisible et très sensible à la température
- la façon dont votre téléphone est « touché » : le timing des pressions, l'emplacement exact des pressions, leur durée, etc.
- les valeurs de l'accéléromètre : à quel point votre téléphone a été secoué, l'inclinaison actuelle, les coordonnées géographiques actuelles et passées (altitude comprise)
- beaucoup d'autres choses (ex : intensité lumineuse sur la ou les caméras, son du microphone, etc.)
- un peu du pot de hasard précédent, d'avant l'extinction et le rallumage du téléphone

Autrement dit : votre téléphone serait déjà piraté si cette source d'entropie était mauvaise.

## Conclusion : suis-je en sécurité ?

Certains lancent des dés pour générer leurs seeds, ce qui est effectivement une bonne source d'entropie (sauf si vous avez des dés pipés, et que quelqu'un a accès à ces dés pipés. Brûlez-les après usage, qui sait !?). D'autres « font confiance » aux sources numériques de hasard en lisant le code utilisé pour les générer, mais tout le monde n'est pas ingénieur. Vous pouvez demander à une IA d'évaluer si un logiciel donné est bon pour générer des seeds, mais à ce moment-là vous faites confiance à l'IA.

Les hardware wallets ne rendent pas votre seed plus difficile à deviner, ils diminuent seulement le risque que des hackers accèdent à un fichier contenant les seeds.

Bitcoin, c'est difficile, être propriétaire de son propre argent, c'est difficile, mais ça en vaut la peine. Faites vos propres recherches, ne suivez pas les modes, et tout ira bien.

Une chose que je recommande : développer la technique du Palais de la Mémoire, pour garder votre seed phrase dans votre tête.

<img src="/img/blog/entropy-and-seed-phrases/memory-palace.jpg" alt="Pochette d'album représentant un immense bâtiment en béton en forme de tête, debout dans un désert sous un soleil pâle" style="display:block; margin: 0 auto 2rem; width: 100%;">

*(la pochette de l'album de musique « Memory Palace », du groupe « Intervals »)*

Happy peaching 🍑

---

## Notes finales

Si vous voulez en savoir plus sur les fonctionnalités de Peach, ou lire nos autres articles, vous pouvez les retrouver ici !

[Vous avez besoin d'un hardware wallet](https://peachbitcoin.com/fr/blog/you-need-a-hw/)
[Comment restaurer votre wallet Peach à partir d'une seed phrase](https://peachbitcoin.com/fr/blog/how-to-restore-peach-wallet/)
[Comment acheter du Bitcoin P2P avec Peach](https://peachbitcoin.com/fr/buy-bitcoin-no-id/)
[Qu'est-ce que GroupHug et comment ça vous fait économiser des frais ?](https://peachbitcoin.com/fr/blog/group-hug/)
[Pourquoi le P2P ? Les bases](https://peachbitcoin.com/fr/blog/why-p2p-chapter-1/)
[Les arnaques par triangulation sur les marchés P2P](https://peachbitcoin.com/fr/blog/triangulation-scams/)

Si vous voulez en savoir plus sur nous, consultez nos réseaux sociaux, ou [contactez-nous](mailto:hello@peachbitcoin.com) (utilisez notre [clé PGP](https://keys.openpgp.org/search?q=hello%40peachbitcoin.com) si possible), nous serons ravis de vous lire !

[Telegram](https://t.me/+vhBVLv6zoLgyYjlk), [Discord](https://discord.gg/ypeHz3SW54), [Twitter](https://twitter.com/peachbitcoin), [Instagram](https://instagram.com/peachbitcoin)

Continuez à propager le mot Peach, qui sait quand vous trouverez le match de votre vie !
