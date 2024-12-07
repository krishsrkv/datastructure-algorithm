

function linearSearch(arr,key){
    for(let i=0; i< arr.length; i++){
        if(arr[i]=== key){
            return i;
        }
    }
    return "Array Out of Index";

}

let array= [5,8,0,1,9,3];

console.log("Found AT Index: ",linearSearch(array,3));