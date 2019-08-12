// mean function from week3 exercise9
function cariMean(arr) {
    // you can only write your code here!
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i]; 
    }
    var mean = sum/arr.length;
    return mean;
}


function cariModus(arr) {
    // you can only write your code here!
    
    // create empty array to store value of array same value for each element
    var sumElement = [];
    for (var i = 0; i < arr.length; i++){
        sumElement.push(0);
    }
    // console.log(sumElement);
    //store value if there is a same element in input array
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            if (arr[i] === arr[j]){
                sumElement[i]++;
            }
        }
    }
    // console.log(sumElement);
    // find the biggest and the foremost sumElement
    // console.log(sumElement);
    var pivot = 0;
    var pivotIndex = 0;
    var storeIndex = 0;
    for (var i = arr.length-1; i >= 0; i--){
        // console.log('itearsi: '+i+' ,sumElemen[i-1]: ' + sumElement[i-1]+ ' ,sumElemen[i]: '+sumElement[i]);
        // console.log('iterasi ' + i)
        if(pivot <= sumElement[i]){
            pivot = sumElement[i];
            pivotIndex = i;
            // console.log('pivot: ' + sumElement[i] + ' indexPivot : ' + pivotIndex);
        }
    }
    
    // check if mean of sumElement is same with each element, if yes return to -1
    for (var i = 0; i < arr.length; i++){
        // console.log('sumElement mean: ' + cariMean(sumElement) + ' ,sumElement[i]: ' + sumElement[i]);
        if(cariMean(sumElement) !== sumElement[i]){
            return arr[pivotIndex];
        }else{
            //continue iteration
        }
    }
    return -1


}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4 
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1