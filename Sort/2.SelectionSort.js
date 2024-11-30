
function swap(arr,xp,yp){
    var temp=arr[xp];
    arr[xp]=arr[yp];
    arr[yp]=temp;
    
}

function selectionSort(arr,n){

var i,j,min_idx;

//one by one move towards unsorted sub-array
for(i=0;i<n-1;i++){
    //find the minimum element in unsorted array
    min_idx=i;
    for(j=i+1;j<n;j++)
        if(arr[j]<arr[min_idx]) 
            min_idx=j;

            //swap the found minimum element with first element
            swap(arr,min_idx,i);
            console.log(`Step: ${i+1}:[${arr.join(",")}]`);
            
}

}

function printarray(arr,size){
var i;
for(i=0; i<size;i++)
    console.log(arr[i]+" ");
console.log(" "); 
}


//var arr=[20,12,10,15,2];

var arr=[-64,25,1.2,22.5,11];
var n=5;

console.log("Sorted Array: ");
selectionSort(arr,n);


//printarray(arr,n);