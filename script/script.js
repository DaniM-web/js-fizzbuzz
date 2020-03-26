/*Fizz Buzz test:
 Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.*/



//inizio del ciclo che mi permette di stampare i numeri da 1 a 100

for (var i = 1; i <= 100; i++) {
  // creo una variabile a cui assegno il valore i
  var numero = i;

  //condizione in cui stampare numeri o frase

  // se è multiplo di 3 o di 5
  if ( (numero % 3 == 0) && (numero % 5 == 0) ) {
  numero = "FizzBuzz";
  //se è multiplo di 3
  }else if (numero % 3 == 0) {
    numero = "Fizz";
    //se è multiplo di 5
  }else if (numero % 5 == 0) {
    numero = "Buzz";
  }
  //stampo in console il valore che numero assume alla fine del ciclo
  console.log(numero);
}
