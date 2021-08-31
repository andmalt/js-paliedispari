
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

