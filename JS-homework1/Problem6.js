var array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

var OddNumberArray = []
var EvenNumberArray = []

for(var index=0; index<array.length; index++){
    var element=array[index];
    if (element % 2 == 0 ){
        EvenNumberArray.push(element)  
    } else {
        OddNumberArray.push(element)
    }

}
console.log(OddNumberArray)
console.log(EvenNumberArray)
