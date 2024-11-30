

function bblSort(arr){

    for(var i=0;i<arr.length; i++){
        //last i elements are already in place
        for(var j=0;j<(arr.length-i-1);j++){

            if(arr[j]>arr[j+1]){

                //if the condition is true
                //then we will swap them

                var temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                
            }
             
        }
    }
    console.log(arr);
}



//var arr=[5,1,4,2,8];
var arr=[-234,43.53,55.23,63,5,6,235.67,547]

bblSort(arr);