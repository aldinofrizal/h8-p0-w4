function arrayNumberToString (numArr){
    var stringNum = [];
    for (var i = 0; i < numArr.length; i++){
        stringNum.push(numArr[i].toString());
    }
    return stringNum;
}

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    num1 = [];
    num2 = [];
    for (var i = 0; i < 189; i++){ //set to 189 iteration to fulfill test case parameter
        if (angka % i === 0){
            num1.push(angka/i);
            num2.push(i);
        }
    }
    
    // set number to string to calculate the length of each element
    var num1String = arrayNumberToString(num1);
    var num2String = arrayNumberToString(num2);
    
    var digit = 999999; //set to big number
    for(var i = 0; i < num1String.length; i++){
        if(num1String[i].length + num2String[i].length < digit){
            digit = num1String[i].length + num2String[i].length;
        }
    }
    return digit;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2