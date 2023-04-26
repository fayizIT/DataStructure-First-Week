function linearsearch(arry,val){
   for(var i=0;i<arry.length;i++){
      if(arry[i]===val)return i;
   }
   return -1;

}
console.log(linearsearch([44,242,53,2,53,632,643,133],513));