//pure recursion 
function findodd(arry){
   let newarry=[];
   if(arry.length===0){
      return newarry;
   }
   if(arry[0]%2!==0){
      newarry.push(arry[0]);
   }

   newarry=newarry.concat(findodd(arry.slice(1)));
   return newarry;
}

console.log(findodd([1,2,3,4,5]))



//Fibnacci using recursive
function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
 let a=fibonacci(5);
 console.log(a);


//Sum using recursive
function sum(num){
    if(num===1)return 1

    return num+ sum(num-1)
}

console.log(sum(6))