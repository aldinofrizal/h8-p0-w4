var value = [90,85]
var cost = [500,5000]
var name = ['a','b']
var objAr = [];

for (var i = 0; i < 2; i++){
    var obj = {
        [name[i]] : {
                    value: value[i],
                    cost: cost[i]
                }    
    }
    objAr.push(obj);
    console.log(obj);
}

console.log(objAr);