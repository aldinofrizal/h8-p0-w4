function ubahHuruf(kata) {
    // you can only write your code here!
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var kataBaru = '';
    for (var i =0; i < kata.length; i++){
        for (var j =0; j < alphabet.length; j++){
            if (kata[i] === alphabet[alphabet.length-1] && alphabet[j] === 'z'){
                kataBaru += alphabet[0];
            }else if (kata[i] === alphabet[j]){
                kataBaru += alphabet[j+1];
            }
        }
    }
    return kataBaru;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wowz')); // xpxa
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  console.log(ubahHuruf('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')); // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa