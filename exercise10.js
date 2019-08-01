function calculateAge(birthYear){
    if (birthYear === undefined || birthYear > new Date().getFullYear()){
        return 'Invalid Birth Year';
    }else {
        return new Date().getFullYear() - birthYear;
    }
}
function changeMe(arr) {
    // you can only write your code here!
    for (var i = 0; i < arr.length; i++){
        var data = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: calculateAge(arr[i][3])
        };
        console.log(i+1 + '. ' + data.firstName + ' ' + data.lastName + ': ');
        console.log(data);
      
    }
    
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""