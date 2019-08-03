function manualSort(arr){
    
    function manualBooleanChecker(arrTrueFalse){
        for (var i = 0; i < arrTrueFalse.length; i++){
            // console.log(arrTrueFalse[i]);
            if(arrTrueFalse[i] === false){
                return false
            }   
        }
        return true;
    }

    for (var j = 0; j < 1; j){
        // console.log(j);
        for (var i = 0; i < arr.length; i++){
            if (arr[i] > arr[i+1]){
                arr.splice(i,2,arr[i+1],arr[i]);
            }
            // console.log(arr);
        }
        var storeBox = []
        for (var i = 0; i < arr.length-1; i++){
            if((arr[i] > arr[i+1])){
                storeBox.push(false);
            }else{
                storeBox.push(true);
            }
        }
        if (manualBooleanChecker(storeBox) === true){
                return arr;
        }
    }   
}
console.log(manualSort([10,8,3,7,200,98,1,4,5,2,1,1,89,66,53,71]));
console.log(manualSort(['wolves','cat','ant','tiger','zebra','panda']));