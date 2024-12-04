function swap(items,leftIndex,rightIndex){

    var temp= items[leftIndex];
    items[leftIndex]=items[rightIndex];
    items[rightIndex]=temp;
}

function partition(items,left,right){
    var pivot= items[Math.floor((right+left) /2 )];  //middle element

    i= left; //left pointer
    j= right; //right pointer

    while(i <= j){
        while(items[i] < pivot){
            i++;
        }
        while(items[j] > pivot){
            j--;
        }
        if(i<=j){
            swap(items,i,j); ///we need to create methods to swap
            i++;
            j--;
        }
    }
    return i;
}


function quickSort(items,left,right){

    var index;
    if(items.length > 1){
        index= partition(items,left,right); 
        //method we will prepared for subarray

        if(left < index -1){
            //more elements on the left side of the pivote
            quickSort(items,left,index -1);
        }

        if(index < right){
            //more elements on the right side of the pivote
            quickSort(items,index,right);
        }
    }
    return items;
}




var items=[28,16,46,38,50,89,83,30];

var sortedArray=quickSort(items,0,items.length-1);

console.log(sortedArray);