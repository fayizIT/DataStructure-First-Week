function unique(ar){
    for(i=0;i<ar.length;i++){
        if(ar.indexOf(ar[i])===ar.lastIndexOf(ar[i])){
           return  ar[i];
        }
    }
    return null;

}
let ar=[1,3,5,23,57,22,1,3];
console.log(unique(ar));


//print non duplicate element
let array=[14,5,31,2,51,2,6]

for(let i=0;i<array.length;i++){
    flag=0;
    for(let j=0;j<array.length;j++)
    {
        if(i!==j && array[i]===array[j])
        {
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(array[i]);
    }
}
