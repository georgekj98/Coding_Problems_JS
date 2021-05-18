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

    
}