//Array to Linkedlist
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class singlyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    arraytolinkedlist(array1){
        if(array1.length==0){
            console.log("empty array");
        }
        this.head=new Node(array1[0]);
        let current=this.head;

        for(let i=0;i<array1.length;i++){
            current.next=new Node(array1[i]);
            current=current.next;
        }

        this.tail=current.next;
        return this.head;
    }
    printf(){
       let array1=[]
      current= this.head;
      while(current){
        array1.push=current.val;
        current=current.next;

      }
    }
}


const list=new singlyLinkedList();
const array1=[4,5,6,7,8]
console.log(list.arraytolinkedlist(array1));