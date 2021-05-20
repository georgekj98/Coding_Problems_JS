class Node{
    constructor(value, next, prev){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class double_LL{

    constructor(){
        this.head = null;
        this.tail = null;
    }

    contains_Node_With_Value(value){
        let node = this.head;
        while( node != null && node.value !== value)
            node = node.next;
        
        return( node != null);
    }

    remove(node){
        if( node === this.head)
            this.head = this.head.next;
        if( node === this.tail)
            this.tail = this.tail.prev;
        
        this.removeNodeBindings(node);
    }

    removeNodeBindings(node){
        if( node.prev != null)
            node.prev.next = node.next;
        if( node.next != null)
            node.next.prev = node.prev;
        
        node.prev = null;
        node.next = null;
    }

    removeNodesWithValue(value){
        node = this.head;
        while( node != null){
            node_remove = node;
            node = node.next;

            if( node.value === value)
                this.remove(node_remove);
        }
    }

    insertBefore(node, nodeToInsert){
        if(nodeToInsert === this.head && nodeToInsert === this.tail)
            return;
        
        this.remove(nodeToInsert);
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node;

        if(node.prev == null)
            this.head = nodeToInsert;
        else
            node.prev.next = nodeToInsert;
        
        node.prev = nodeToInsert;
    }

    insertAfter(node, nodeTi){
        if(node === this.head && nodeTi === this.tail)
            return;
        this.remove(nodeTi);
        nodeTi.prev = node;
        nodeTi.next = node.next;

        if( node.next != null)
            node.next.prev = nodeTi;
        else
            this.tail = nodeTi;
        
        node.next = nodeTi;
    }

    setHead(node){
        if(this.head == null){
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertBefore(this.head, node);
    }
    setTail(node){
        if( this.tail == null){
            this.setHead(node);
            return;
        }
        this.insertAfter(this.tail, node);
    }
    insertAtPos( nodeTi, pos){
        if( pos === 1 ){
            this.setHead(nodeTi);
            return;
        }
        let node = this.head;
        let ctr = 1;
        while(node != null && ctr !== pos){
            node = node.next;
            ctr+=1;
        }
        if( node != null )
            this.insertBefore(node, nodeTi);
        else
            this.setTail(nodeTi);
    }

    display(){
        let node = this.head;
        while( node.next){
            console.log(node.value);
            node = node.next;
        }
    }
}

function main(){
    let ar = [ 5, 4, 3, 2, 1];
    let LL = new double_LL();
    for(let i = 0; i <= ar.length; i++){
        let node = new Node(ar[i],null);
        LL.insertAtPos(node, i+1);
    }

    // console.log(LL);
    LL.display();

    
}

main();