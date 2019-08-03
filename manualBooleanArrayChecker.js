function manualBooleanChecker(arrTrueFalse){
    for (var i = 0; i < arrTrueFalse.length; i++){
        // console.log(arrTrueFalse[i]);
        if(arrTrueFalse[i] === false){
            return false
        }   
    }
    return true;
}
