function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    function fee (naik,turun,rute){
        var index = [];
        for (var i = 0; i < rute.length; i++){
            if (rute[i] === naik || rute[i] === turun){
                index.push(i);
            }
        }
        return Math.abs(index[0]-index[1])*2000;
    }
    var outputArray = [];
    for (var i = 0; i < arrPenumpang.length; i++){
        var out = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: fee(arrPenumpang[i][1],arrPenumpang[i][2],rute)
        }
        outputArray.push(out);
    }
    return outputArray;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]