class Node{
    constructor(data){
        this.data=data; //value of the node
        this.next=null; //link to the next node
    }
}

class CircularLinkedList{
    constructor(){
        this.head=null; //starting point of the list is Head

    }

    //append the data with a given data in the list

    append(data){
        const newNode=new Node(data);
        if(this.head===null){
            //if the list is empty the new node points to it self
            this.head=newNode;
            newNode.next=this.head;//circular link to itself
        }
        else{
            let current=this.head;
            while(current.next !=this.head){
                //traverse to the last node
                current=current.next;
            }
            current.next=newNode;
            newNode.next=this.head; //newnode points back to head, makes the circulat linked list


        }
    }

    //delete Data in Linked List

    delete(data){       //20
        if(this.head===null){  //is head is empty? if it is empty it will not delete and return "list id empty"
            console.log("The List is Empty");
            return;
        }
        let current=this.head;
        let previous=null;

        //CASE:1 IF THE NODE TO DELETE IS THE HEAD NODE

        if(current.data===data){
            if(current.next===this.head){
                //if there is only one node in the list
                this.head=null;
            }else{
                //find out the last node to update its next pointer
                while(current.next !==this.head){
                    current=current.next;
                }

                //the last node's next point to second next node
                current.next= this.head.next;
                this.head=this.head.next;
            }
        }

        //CASE:2 TRAVERSE THE LIST TO FIND OUT THE NODE TO DELETE

        do{
            previous=current;
            current=current.next;
            if(current.data===data){
                //found the exact node to delete
                previous.next=current.next
                return;
            }
        }while(current !==this.head)
         
            console.log("Data not Found in the List");
    }
    printList(){
        if(this.head===null){
            console.log("List is Empty");
            return;
        }

        let current=this.head;
        let result=[];
        do{
            result.push(current.data); // adding each node data to result aaray
            current=current.next; //move to the next node
        }while(current !==this.head);
        console.log(result.join('->')); //printing the  list
    }

}

//main method

const list=new CircularLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log("Circular Linked List");
list.printList();

list.delete(20);
console.log("After Deletion:");
list.printList();

//delete head Node

list.delete(10);
console.log("After Deleting Head Node:");
list.printList();

//delete tail node

list.delete(50);
console.log("After Deleting Tail Node:");
list.printList();
 