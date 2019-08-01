function checkAB(num) {
    // you can only write your code here!
    var selisihAb = [];
    var selisihBa = [];
    for (var i = 0; i < num.length; i++){
        for (var j = 0; j < num.length; j++){
            if(num[i] === 'a' && num[j] === 'b'){
                selisihAb.push(Math.abs(i-j));
            }
        }
    }
    console.log(selisihAb);
    console.log(selisihBa);
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false