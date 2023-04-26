function findthreelargest(arry){
    arry.sort(function (a,b){
        return(b-a);
        
    })
    return arry.slice(0,3)
}

let arry=[4,63,25,632,543,454];
let a= findthreelargest(arry);
console.log(a);