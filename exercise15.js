function highestScore (students) {
  // Code disini
    var classStoreBox = []
    for(var i = 0; i < students.length; i++){
        classStoreBox.push(students[i].class);
    }
    manualSort(classStoreBox);
    for(var i = 0; i < classStoreBox.length-1; i++){
        if(classStoreBox[i] === classStoreBox[i+1]){
            classStoreBox.splice(i+1,1);
        }
    }
    var nameStoreBox = []
    var bigNameStoreBox = []
    for(var i = 0; i < classStoreBox.length; i++){
        for(var j = 0; j < students.length; j++){
            if(students[j].class === classStoreBox[i]){
                nameStoreBox.push(students[j].name);    
            }
        }
        bigNameStoreBox.push(nameStoreBox);
        nameStoreBox =[]
    }

    var scoreStoreBox = []
    var bigScoreStoreBox = []
    for(var i = 0; i < bigNameStoreBox.length; i++){
        for (var j = 0; j < bigNameStoreBox[i].length; j++){
            for (var k = 0; k < students.length; k++){
                if(bigNameStoreBox[i][j] === students[k].name){
                    scoreStoreBox.push(students[k].score);
                }
            }   
        }
        bigScoreStoreBox.push(scoreStoreBox);
        scoreStoreBox = []
    }

    for(var i = 0; i < bigScoreStoreBox.length; i++){
        for (var j = 0; j < bigScoreStoreBox[i].length-1; j++){
            if(bigScoreStoreBox[i][j] > bigScoreStoreBox[i][j+1]){
                bigScoreStoreBox[i].splice(j+1,1);
                bigNameStoreBox[i].splice(j+1,1);
            }
        }
    }
    // bigNameStoreBox.join()
    // bigScoreStoreBox.join()
    // return bigScoreStoreBox;
    var obj = {

    }
    for(var i = 0; i < classStoreBox.length; i++){
        obj[classStoreBox[i]] = { 
                                    name : bigNameStoreBox[i][0],
                                    score : bigScoreStoreBox[i][0]
                                }      
    }

    return obj
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


console.log(highestScore([])); //{}


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