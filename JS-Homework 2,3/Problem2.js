
function sum(...arguments){
   let numbersSum = 0;
    for(let item of arguments){
        numbersSum = numbersSum +item;
    }
    return (numbersSum)
} 

 let result = sum (10, 50, 6, 7, 8, 11, 6, 3, 9)
 console.log(result);

