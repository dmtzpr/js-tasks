class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    add(data) {
        if (!this.head) {
            this.head = new Node(data, null);
        } else {
            let lastNode = null;
            let node = this.head;

            while (node.next) {
                node = node.next;
            }

            node.next = new Node(data);
        }

        this.length++;
    }

    remove(index) {
        if (index === 0) {
            if (this.head) {
                this.head = this.head.next;
            } else {
                console.log('Linked list is empty!');
            }
        } else {
            if (index > this.length) {
                console.log('Too match');
            } else {
                let previousNode = this.head,
                    searchedNode = null;

                for (let i = 0; i < index - 1; i++) {
                    previousNode = previousNode.next;
                }

                searchedNode = previousNode.next;

                console.log('searched node is: ' + searchedNode.data);

                if (searchedNode.next) {
                    previousNode.next = searchedNode.next;
                } else {
                    previousNode.next = null;
                }
                this.length--;
            }
        }
    }

    showAll() {
        if (!this.head) {
            console.log('Linked list is empty!');
        } else {
            let nextNode = this.head;
            while (nextNode) {
                console.log(nextNode.data);
                nextNode = nextNode.next;
            }
        }
    }

    getLength() {
        return this.length;
    }
}

let ll = new LinkedList();

ll.add('Dima');
ll.add('Zaprutsky');
ll.add(27);
//ll.add('RX-7');
ll.showAll();
//ll.remove(0);
// ll.showAll();
// ll.remove(40);

ll.remove(1);
ll.showAll();
