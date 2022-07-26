var array = [32, 10, 'hello', null, 'hello2', 50 ];

for (var i=0; i<array.length; i++){
    var element = array[i]
    if (element % 5 == 0 && typeof element == 'number') {
        console.log(element)
    }
}

