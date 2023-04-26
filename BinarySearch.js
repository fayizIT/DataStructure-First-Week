function binarySearch(arr,target){

    let firstIndex =0;
    let lastIndex =arr.length-1;
   
   
    while(firstIndex <=lastIndex){
        let middleIndex = Math.floor((firstIndex+lastIndex)/2);
 
        if(arr[middleIndex]===target){
            return middleIndex;
        }
   
        if(target<arr[middleIndex]){
            lastIndex=middleIndex-1;
        }else{
            firstIndex=middleIndex+1;
        }
    }
 return null;
 }
 
 
 console.log(binarySearch([-5,3,5,6,7,8],7));