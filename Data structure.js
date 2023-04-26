class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at the beginning
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert at the end
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2);

ll.printListData();

ll.clearList();

ll.printListData();


//time complesity o(n)
function sum(n){
  let total=0
  for(let i=0;i<=n;i++){
    total+=i;
  }
  return total;
}

console.log(sum(100));

//time complesity o(1)
function hello(n){
  return n*(n+1)/2
}

console.log(hello(100));



function printpair(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
      console.log(i,j)
    }
  }
}
console.log(printpair(6));


 function similar(array){
  if(array.length==0) return 0
  var i=0;
  for(var j=i;j<array.length;j++){
    if(arr[i] !==arr[j]){
      i++;
      arr[i] =arr[j]
    }
  }
  return i+1;
 }
 
 similar([1,2,2,3,3,4,5,6,7])
