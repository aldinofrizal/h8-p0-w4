function arrayNumberToString (numArr){
    var stringNum = [];
    for (var i = 0; i < numArr.length; i++){
        stringNum.push(numArr[i].toString());
    }
    return stringNum;
}

console.log(arrayNumberToString([1,2,3,4,6,8,12]));