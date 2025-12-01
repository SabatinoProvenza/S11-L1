// 1) Quali sono i tipi primitivi principali in TypeScript?

// string,number,boolean,null,any,never ecc..

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const nome: string= "Sabatino"
const età:number= 27
const studingTs:boolean= true

// 3) Tipizza il parametro della seguente funzione:
 // const greet = (name) => [ return "Ciao" + name)
const greet = (name: string) => {
  return "Ciao " + name;
};

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {return a + b }

const sum = (a:number,b:number) :number => {
  return a + b
}

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const prezzoIvato = (prezzo:number) :number => {
return prezzo * 1.22
}

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concatString = (a:string,b:string) :number =>{
  return (a + b).length
}

// 7) Cos'è un Type Union e come si scrive?

// Un Type Union è un tipo che permette a una variabile di contenere più tipi possibili
let bho: string | number;

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let bho2: number| null| undefined

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type GiornoSettimana =
   "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica";


// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]

const numbers:number[] = [1,2,3]
const numbers2:Array<number> = [1,2,3]

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const tupla :[string,string,string,number,number] = ["str","ing","a",1,2]

// 12) Qual è la differenza tra type e interface?

// type è più flessibile mentre interface è più per gli oggetti

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface utente {
  firstname:string
  lastname:string
  age:number
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface Utente2 {
  email: string;       
  telefono?: string;   
}


// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

type Studente = {
  nome: string;
  voto: number;
};

const studenti: Studente[] = [
  { nome: "Marco", voto: 28 },
  { nome: "Luca", voto: 30 },
  { nome: "Giulia", voto: 25 }
];


// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  marca: string;
  modello: string;
  anno: number;
}

interface Auto extends Veicolo {
  porte: number;
  alimentazione: "benzina" | "diesel" | "elettrico" | "ibrido";
}


// 17) Crea un oggetto che implementi l'interfaccia Auto.

const miaAuto: Auto = {
  marca: "Opel",
  modello: "Corsa",
  anno: 2021,
  porte: 5,
  alimentazione: "benzina"
};


// 18) Cosa sono i Generics in TypeScript?

// servono per dare un valore generico ad un tipo, creando così funzioni, tipi o classi riutilizzabili che funzionano con tipi diversi

// 19) È possibile avere più tipi generici in un'interfaccia?

//si

// 20) Crea un interfaccia generica per una richiesta API 

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
