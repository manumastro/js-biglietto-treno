/* 
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
1. Chiedere i chilometri da percorrere
2. Chiedere l'età 
3. Calcolare il prezzo (0.21€/Km)
4. Applicare sconto 20% in caso di passeggero minorenne
*/

const numKm = parseFloat(prompt('Quanti chilometri vuoi percorrere?'));
if(isNaN(numKm)){
  alert('inserire un numero');
}

const age = parseInt((prompt('Quanti anni hai?')));

const prezzoNonScontato = 0.21 * numKm;

console.log("prezzo non scontato", prezzoNonScontato);

let prezzoMinorenni, prezzoOver65, prezzoTotale, prezzoDueDecimali;

if(isNaN(age)){
  alert('Inserire un numero');
}
else if(age < 18){
  prezzoMinorenni = ((prezzoNonScontato / 100) * 80);
  prezzoTotale = prezzoMinorenni;
  prezzoDueDecimali = prezzoTotale.toFixed(2);
}
else if(age > 64){
  prezzoOver65 = ((prezzoNonScontato / 100) * 60);
  prezzoTotale = prezzoOver65;
  prezzoDueDecimali = prezzoTotale.toFixed(2)
}
else{
  prezzoTotale = prezzoNonScontato;
  prezzoDueDecimali = prezzoTotale.toFixed(2);
}

document.getElementById("prezzo_output").innerHTML = 'Il prezzo totale del biglietto è: ' + prezzoDueDecimali + '€';

console.log("prezzo totale", prezzoTotale);