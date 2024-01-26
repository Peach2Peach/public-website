# Perguntas frequentes sobre privacidade

:::details Que informações o Peach coleta de mim?

Nós nos esforçamos para armazenar a quantidade absolutamente mínima de dados sobre nossos usuários que pudermos. Como uma visão geral rápida, aqui está o que temos em nossos servidores:

- Um hash\* do seu ID de aplicativo exclusivo (AdID)
- Um hash dos seus dados de pagamento
- Suas conversas criptografadas
- Os dados das negociações para garantir que os usuários anônimos não excedam o limite de negociação (quais métodos de pagamento estão sendo usados, quantias de compra e venda)
- Endereços usados para enviar para o depósito em garantia e para enviar do depósito em garantia
- Dados de uso (Firebase e Google Analytics), **apenas se você concordou com isso**

Para uma análise completa, consulte nossa [política de privacidade](/privacy-policy/).

\* Um hash é algum dado que foi tornada irreconhecível, semelhante à sua criptografia. Os mesmos dados sempre levarão ao mesmo hash. Isso significa que não sabemos o que são os dados, mas conseguiremos identificar se os mesmos dados forem usados duas vezes.
:::

:::details Quem pode ver meus dados de pagamento?

Apenas o seu parceiro de negociação pode ver seus dados de pagamento; eles são enviados pelos servidores do Peach, mas são totalmente criptografados de ponta a ponta (como na maioria dos aplicativos de chat) para que não possamos ver o que são.

Quando você inicia uma disputa, seus dados de pagamento e o histórico do seu chat ficarão visíveis para o mediador do Peach designado e para o seu parceiro de negociação.
:::

:::details Como verificar o APK?

Siga estas etapas para verificar se o APK que você baixou é o APK real do Peach:

- Baixe o APK que você deseja instalar no site, juntamente com a assinatura e o manifesto (tudo pode ser encontrado em https://peachbitcoin.com/apk)

- Baixe a chave PGP do Peach em https://keys.openpgp.org/vks/v1/by-fingerprint/48339A19645E2E53488E0E5479E1B270FACD1BD2 (também pode ser encontrada em nosso site)

- Gere a soma de verificação do arquivo APK que você baixou e compare-a com a soma de verificação no manifesto.

```
sha256sum app-prod-arm64-v8a-release.apk
```

(substitua app-prod-arm64-v8a-release.apk pelo nome do seu arquivo). Deve ser o mesmo que no manifesto. Caso contrário, entre em contato conosco e certifique-se de que você não instala esse aplicativo em seu dispositivo. Neste exemplo, você deve ver a seguinte saída:
```
$ sha256sum app-prod-arm64-v8a-release.apk

802450713cb2183e7904ad58813effabf007d518d4467461c3928625e453942c  app-prod-arm64-v8a-release.apk
```
Se compararmos com o que está no manifesto-peach.txt, veremos que é o mesmo.

- Adicione a chave Peach à sua chave
```
gpg --import PGP-peach.asc
```
(assegure-se de substituir PGP-peach.asc pelo nome correto do arquivo, geralmente será 48339A19645E2E53488E0E5479E1B270FACD1BD2.asc)

- Verifique as assinaturas que você baixou anteriormente com o seguinte comando:
```
gpg --verify manifest-peach.sig manifest-peach.txt
``` 
Na saída, você deve ver a seguinte linha:
```
gpg: Boa assinatura de "hello@peachbitcoin.com <hello@peachbitcoin.com>" [desconhecido]
```
:::

:::details O Taproot é suportado?

- Sim, você pode enviar para endereços Taproot pela carteira Peach.
- Você também pode receber diretamente do custodiante para seu endereço Taproot externo.
:::

:::details Como posso me conectar ao meu próprio nó?

Conectar ao seu nó melhora a privacidade, uma vez que todas as transações são retransmitidas para a rede Bitcoin por meio do seu próprio nó, em vez do nó da Peach.

A Peach atualmente não suporta o Tor, portanto, você precisa usar um IPv4 para se conectar ao seu nó. Se ele não estiver aberto para a internet, você só poderá se conectar pela rede local ou por meio de uma VPN privada.

Consulte o nosso [tutorial em vídeo](https://www.youtube.com/watch?v=xtvq2i3mIYg) para aprender como se conectar ao seu próprio nó.

Se estiver usando o Umbrel, você pode usar umbrel.{número da porta} em vez do IP do seu nó.

:::

:::details O que é controle de moedas?

A carteira Peach suporta o controle de moedas ou a gestão de moedas. O objetivo do controle de moedas é manter suas moedas separadas, se desejar, para gerenciar a privacidade.

Assista ao nosso vídeo explicando o controle de moedas em detalhes: [How to do coin control using the Peach Wallet](https://www.youtube.com/watch?v=zWwIekSv3U8)

:::