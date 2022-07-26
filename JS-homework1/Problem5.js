var names = [ [2, -3, 5, 10] , [25, -24, -11, 100] , [-6, -7, 10] ]


for(var i=0; i<names.length; i++){
    var tmp = names[i]
    for(var j=0; j<tmp.length; j++){
        var number = tmp[j]; 
        if (number > 0) {
            console.log(number);
        }
        
    }
}