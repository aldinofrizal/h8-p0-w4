function cariMedian(arr) {
    // you can only write your code here!
    var indexMedian = 0;
    var median = 0;
    if(arr.length % 2 === 1){
        indexMedian = Math.ceil(arr.length/2)-1;
        median = arr[indexMedian];
    }else{
        indexMedian = arr.length/2-1;
        median = (arr[indexMedian] + arr[indexMedian+1])/2;
    }
    return median;
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5