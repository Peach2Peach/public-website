# FAQ sul rilascio dell'Escrow

:::details Che cos'è GroupHug?
GroupHug è semplicemente il termine che abbiamo dato all’azione di raggruppare transazioni di diversi utenti per evitare commissioni separate per ciascuno di loro. Per una spiegazione più dettagliata, consulta il nostro [post sul blog](/it/blog/group-hug).
:::

:::details Se ho una sola offerta di acquisto in corso, verrà rilasciata immediatamente?

No, il pagamento verrà aggiunto a una coda, in attesa di essere rilasciato. Il pagamento sarà effettuato quando abbastanza utenti partecipano al batch. Il numero di partecipanti necessari è visibile nelle informazioni sui pagamenti in sospeso. Puoi accedere a questa vista tramite i dettagli della transazione.  
Lì puoi vedere quanti slot del batch attuale sono occupati. Nelle informazioni puoi anche vedere un ETA che indica il tempo massimo di attesa se gli slot non si riempiono prima.
:::

:::details Come funziona se ho più offerte di acquisto contemporaneamente?

Come già detto, i tuoi pagamenti verranno aggiunti alla coda per essere raggruppati con altri partecipanti.
:::

:::details C'è un limite di partecipanti che possono unirsi al batch?

No, i batch possono anche superare il numero massimo di partecipanti. Non è un limite rigido, ma una soglia. Significa che, una volta raggiunto il minimo, prendiamo semplicemente tutti i PSBT e li raggruppiamo per creare la transazione e ridurre le commissioni pagate da ciascun partecipante.
:::
