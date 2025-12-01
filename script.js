// 1) Quali sono i tipi primitivi principali in TypeScript?
// string,number,boolean,null,any,never ecc..
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var nome = "Sabatino";
var età = 27;
var studingTs = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => [ return "Ciao" + name)
var greet = function (name) {
    return "Ciao " + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {return a + b }
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var prezzoIvato = function (prezzo) {
    return prezzo * 1.22;
};
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatString = function (a, b) {
    return (a + b).length;
};
// 7) Cos'è un Type Union e come si scrive?
// Un Type Union è un tipo che permette a una variabile di contenere più tipi possibili
var bho;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var bho2;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla = ["str", "ing", "a", 1, 2];
var studenti = [
    { nome: "Marco", voto: 28 },
    { nome: "Luca", voto: 30 },
    { nome: "Giulia", voto: 25 }
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var miaAuto = {
    marca: "Opel",
    modello: "Corsa",
    anno: 2021,
    porte: 5,
    alimentazione: "benzina"
};
