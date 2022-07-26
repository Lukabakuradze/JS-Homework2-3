function numbersSum(...arguments) {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        let item = arguments[i] 
        if (item > 0){
            sum = sum + item;
        }
    }
    return sum
}
  let sum = numbersSum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)
  console.log(sum);



















// function ConsoleLogTypeOf(item){
//     console.log(typeof item);
// }

// ConsoleLogTypeOf('lukabakuradze')
// ConsoleLogTypeOf(true)
// ConsoleLogTypeOf(200)

