class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insert_at_pos(nodeTi, pos){
        if( pos === 0){
            nodeTi.next = this.head;
            this.head = nodeTi;
            return;
        }
        else{
            let ctr = 0;
            let ptr = this.head;
            while(ptr != null && ctr < pos-1){
                ptr = ptr.next;
                ctr++;
            }
            nodeTi.next = ptr.next;
            ptr.next = nodeTi;
        }
    }
    display(){
        let node = this.head;
        while( node.next){
            console.log(node.value);
            node = node.next;
        }
    }
    remove_nth_from_end(n){
        let ctr = -1;
        let fast = this.head;
        let slow = this.head;

        while( ctr < n && fast != null){
            fast = fast.next;
            ctr+=1;
        }
        if(fast == null){
            this.head = this.head.next;
            return;
        }
        while( fast.next ){
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
    }
}

function main(){
    let ar = [10,9,8,7,6, 5, 4, 3, 2, 1];
    let LL = new LinkedList();
    for(let i = 0; i <= ar.length; i++){
        let node = new Node(ar[i],null);
        LL.insert_at_pos(node, i);
    }
    LL.remove_nth_from_end(10);
    // console.log(LL);
    LL.display();

    
}

main();


