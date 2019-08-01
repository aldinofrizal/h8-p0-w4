function changeMe(arr) {
    // you can only write your code here!
    function calculateAge(birthYear){
        if (birthYear === undefined || birthYear > new Date().getFullYear()){
            return 'Invalid Birth Year';
        }else {
            return new Date().getFullYear() - birthYear;
        }
    }
    function person(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = calculateAge(age);
    }
    var database = [];
    for (var i = 0; i < arr.length; i++){
        new person (arr[i][0],arr[i][1],arr[i][2],arr[i][3]);
        database.push(person);
        console.log(person);
    };
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
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