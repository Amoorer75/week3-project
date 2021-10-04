//Problem1
let num1 = [1,2,3,4,5,6,7,8,9,10]

function counter(count){

    for (i = 0;i < count.length; i++){
        return count[i]
    }
}
console.log(num1)
//Problem2
let i = 3

while (i < 103){
     i++
    //console.log(i)

    if (i % 2 !== 0)
    console.log(i)

}
//Problem3
const sum = [1, 2, 3, 4, 5, 6].reduce(addSum,0); // with initial value to avoid when the array is empty

function addSum(accumulator, a) {
    return accumulator + a;
}

console.log(sum);
//Problem4
//let x = 9 

//while (x >= 1){
   // x--
   //return x
        
//}
//console,log(x)

//Problem5
function factorial(n){
    let fact = [];
    
    for (i = 0; i <= n; i++){

        if (n % i === 0){
           

            fact.push(i);
            
            
            
        }
    }
    console.log(fact)
}
console.log(factorial(30)); 

//Problem6
function factors(n1){
    
let sum1 = 0;

    for (i = 1; i <= n1; i++){
        //console.log(i)
        
        sum1 += i 

    }
console.log(sum1)

}
console.log(factors(30))

//Problem7
function letterChange(name){
    let newWord;

    for (i = 1; i <= name.length; i = i + 2){

       if (name[i] !== "Z"){

       }

        console.log(name[i])
       
    }
  
 

}
console.log(letterChange("tyrannosaurus"))

  




