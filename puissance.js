const prompt=require("prompt-sync")();
let base, exposant, acc ;


for( let i=1 ; i<=exposant ;i++){
    base=+prompt("entrer la base");
    exposant=+prompt("entrer l'exposant");
    acc=acc*base;
    console.log(base)
}