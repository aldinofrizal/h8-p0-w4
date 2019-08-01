function angkaPrima(angka) {
    // you can only write your code here!
    // iteration start from 2 to check prima condition, because number will give infinity if divided by 0, and will give 0 if number mod
    for (var i = 2; i < angka; i++){ 
        if (angka % i === 0){
            return false;
        }
    }
    return true;
}
  
  // TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false