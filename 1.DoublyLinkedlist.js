
//Node Class with Previous and Next Value to Store the Address
class Node{
    constructor(data){
        this.data=data;
        this.next=null; //points to next node
        this.prev=null; //points to previous Node
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null; //list is empty
        this.tail=null; //list is empty
    }
    //insertion of data
    append(data){
        const newNode= new Node(data);
        //if the list is empty , the new node is head and tail
        if(this.head===null){
            this.head=this.tail=newNode;
        }else{
            //if the list is not empty add the node to the end
            this.tail.next=newNode //tail's next points to the new node
            newNode.prev=this.tail //newnode's prev point to current tail
            this.tail=newNode; //updated thetail to the new node
        }

    }

    //delete
    delete(data){
        if(this.head===null){
            console.log("List is Empty");
            return;
        }

        let current=this.head;
        //case:1 Deleting the head node
        if(current.data===data){
            if(current.next){
                this.head=current.next;
                this.head.prev=null; //new head 's previous value must be null
            }else{
                //if there is only one node in the list
                this.head=this.tail=null;
            }
            return;
        }

        //case:2 Traverse and Find the node
        while(current!==null && current.data!==data){
            current=current.next;
        }

        if(current===null){
            console.log("data not Found in the List");
            return;
        }

        //case:3 deleting a middle or last node
        if(current.next){
            current.next.prev=current.prev; //updated the next node's  prev pointer
        }else{
            //if  it is the last node, update the tail
            this.tail=current.prev;
        }

        if(current.prev){
            current.prev.next=current.next; // updated the  previous node's next pointer
        }
    }

    //printing Forward
    printListForward(){
        let current= this.head;
        let result=[];

        while(current !=null){
            result.push(current.data);
            current=current.next;
        }
        console.log(result.join('->'));

    }

    //printing Backward
    printListBackward(){
        let current= this.tail;
        let result=[];

        while(current !=null){
            result.push(current.data);
            current=current.prev;
        }
        console.log(result.join('->'));

    }
}

const doubleList=new DoublyLinkedList();
doubleList.append(10);
doubleList.append(20);
doubleList.append(30);
doubleList.append(40);
doubleList.append(50);

console.log("List in Forward: ");
doubleList.printListForward();  //output===>>> 10->20->30->40
console.log("List in Backward: ");
doubleList.printListBackward();  //output===>>> 10<-20<-30<-40

//delete the data from the list

doubleList.delete(10); 
console.log("List after Deleting Head, List in Forward:");
doubleList.printListForward();

doubleList.delete(40); 
console.log("List after Deleting tail, List in Forward:");
doubleList.printListForward();

doubleList.delete(30); 
console.log("List after Deleting Middle Node, List in Forward:");
doubleList.printListForward();