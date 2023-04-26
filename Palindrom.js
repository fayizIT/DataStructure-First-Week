//palindrom using string
let str="MALAYALAM"

for(let i=0;i<str.length;i++){
    flag=0;
    if(str[i]!=str[str.length-1-i]){
        flag=1;
        break;
    }
}
        
            if(flag==0){
                console.log("PALINDROM");
            }
            else{
                console.log("NOT PALINDROM");
            }