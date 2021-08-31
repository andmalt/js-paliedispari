
// chiedere all'utente una parola

let parola = poli(prompt("Inserire una parola"));

// Creo una funzione per capire se la parola inserita è palindroma

function poli(palindroma) {
    // Step 1. Use the split() method to return a new array
    var splitString = palindroma.split(""); 

 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse();

 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join("");

    if(joinArray === palindroma){
        return true
    }
    return false
}
 
if(parola === true){
    alert("La parola è palindroma")
}else{
    alert("La parola non è palindroma !!! ritenta")
}

console.log(parola);


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var bottonPair = document.getElementById("but-pari");
var bottonDispair = document.getElementById("but-dispari");

bottonPair.addEventListener('click',
    function(){
        let numeroScelto = parseInt(prompt("Inserisci numero da 1 a 5"));

        // controllo se il numero scelto è tra 1 e 5
        if((numeroScelto>0) && (numeroScelto<6)){

            // creo numero randomico del computer
            function numberRandom(min , max) {  
                return Math.floor(Math.random() * (max - min) + 1);
            }

            let pcNumber = numberRandom(1 , 5); 
            console.log("PC-Number: "+pcNumber);
            // sommiamo i numeri
            let somma = pcNumber + numeroScelto;
            console.log("Somma: "+somma);
            // funzione pari o dispari
            function Pari(sommaFunction){
                let pariFunction = sommaFunction % 2;
                if(pariFunction == 0){
                    return true;
                }
                return false;
            }

            if(Pari(somma)){
                alert("Complimenti è pari hai vinto");
            }else{
                alert("Mi dispiace è dispari ritenta!!!");
            }
            
        }else{
            alert("Inserisci numero valido!!!")
        }
    }
);

bottonDispair.addEventListener('click',
    function(){
        let numeroScelto = parseInt(prompt("Inserisci numero da 1 a 5"));

        // controllo se il numero scelto è tra 1 e 5
        if((numeroScelto>0) && (numeroScelto<6)){

            // creo numero randomico del computer
            function numberRandom(min , max) {  
                return Math.floor(Math.random() * (max - min) + 1);
            }

            let pcNumber = numberRandom(1 , 5); 
            console.log("PC-Number: "+pcNumber);
            // sommiamo i numeri
            let somma = pcNumber + numeroScelto;
            console.log("Somma: "+somma);
            // funzione pari o dispari
            function Pari(sommaFunction){
                let pariFunction = sommaFunction % 2;
                if(pariFunction == 0){
                    return true;
                }
                return false;
            }

            if(Pari(somma)){
                alert("Mi dispiace è Pari ritenta!!!");
            }else{
                alert("Complimenti è dispari hai vinto!");
            }
            
        }else{
            alert("Inserisci numero valido!!!")
        }
    }
);

