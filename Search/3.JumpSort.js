

function JumpSort(arr,target){
    const n=arr.length;
    //calculate the jump size
    let jump=Math.floor(Math.sqrt(n));
    let prev=0;

    //jumping through the blocks
    while(arr[Math.min(jump,n)-1]<target){
        prev=jump;
        jump +=Math.floor(Math.sqrt(n));
        if(prev>=n){
            return -1; //element not found
        }
    }

    //Linear Search
    while(arr[prev]<target){
        prev++;
        if(prev === Math.min(jump,n)){
            return -1 ; //Element not Found
        }
    }

    //check if the  element is found
    if(arr[prev] === target){
        return prev;
    }

    return -1; //element not found

}


const arr=[3,11,23,34,48,57,72,86,92];
const target=100; //key 

const  index= JumpSort(arr,target);

if(index !== -1){
    console.log(`Element Found at Index ${index}`);
}else{
    console.log(`Element Not Found`);
}