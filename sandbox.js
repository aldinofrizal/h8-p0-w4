var classbox = [ 'foxes', 'wolves' ];
var name = [ [ 'Dimitri' ], [ 'Alexei', 'Anastasia' ] ];
var score =[ [ 90 ], [ 85, 78 ] ];

var obj ={
}
var arrMini = [];
var arrBig = [];
for(var i = 0; i < name.length; i++){
    for(var j =0; j < name[i].length; j++){
        obj['name'] = name[i][j],
        obj['score'] = score[i][j]
        arrMini.push(obj)
        obj = {}
    }
    arrBig.push(arrMini);
    arrMini = [];
    // console.log(arrMini)
}
// console.log(arrBig)
var out = {

}
for(var i = 0; i < classbox.length; i++){
    out[classbox[i]] = arrBig[i];
}
console.log(out);


 // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }