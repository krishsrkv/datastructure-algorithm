class Node {
    constructor(data) {
        this.data = data;  // Value of the node
        this.next = null;  // Pointer to the next node
        this.prev = null;  // Pointer to the previous node
    }
}

class DoublyCircularLinkedList {
    constructor() {
        this.head = null;  // Starting point of the list
    }

    // Append a new node with data to the list
    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            // If the list is empty, the new node points to itself
            this.head = newNode;
            newNode.next = this.head;
            newNode.prev = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                // Traverse to the last node
                current = current.next;
            }
            // Insert the new node at the end
            current.next = newNode;
            newNode.prev = current;  // Set the previous pointer of the new node
            newNode.next = this.head;  // Set the next pointer of the new node to the head
            this.head.prev = newNode;  // Set the previous pointer of the head to the new node
        }
    }

    // Delete a node with the specified data
    delete(data) {
        if (this.head === null) {
            console.log("The List is Empty");
            return;
        }

        let current = this.head;
        
        // Case 1: Deleting the head node
        if (current.data === data) {
            if (current.next === this.head) {
                // If there is only one node in the list
                this.head = null;
            } else {
                // Update the last node to point to the new head
                this.head.prev.next = this.head.next;
                this.head.next.prev = this.head.prev;
                this.head = this.head.next;
            }
            return;
        }

        // Case 2: Traversing to find the node to delete
        do {
            current = current.next;
            if (current.data === data) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
                return;
            }
        } while (current !== this.head);

        console.log("Data not Found in the List");
    }

    // Print the entire list
    printList() {
        if (this.head === null) {
            console.log("List is Empty");
            return;
        }

        let current = this.head;
        let result = [];
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(' <-> ')); // Printing the list with <-> to indicate doubly linked
    }
}

// Main method to test the doubly circular linked list

const list = new DoublyCircularLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log("Doubly Circular Linked List");
list.printList();

list.delete(20);
console.log("After Deleting 20:");
list.printList();

// Delete head node
list.delete(10);
console.log("After Deleting Head Node:");
list.printList();

// Delete tail node
list.delete(50);
console.log("After Deleting Tail Node:");
list.printList();
