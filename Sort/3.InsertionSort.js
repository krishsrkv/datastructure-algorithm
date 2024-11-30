

function insertionSort(arr,n){

    let i,key,j;
    for(i=1;i<n;i++){

        key=arr[i];
        j=i-1;

        /* move the elements of arr[0,1,,,,,i-1] that are
         greater than key, to one position ahead of their current position */

         while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
         }

         arr[j+1]=key;
         console.log(`Step: ${i} : [${arr.join(",")}]`);

    }
}


//driver code:

let arr= [12,11,13,5,6];
let n=5;

insertionSort(arr,n);