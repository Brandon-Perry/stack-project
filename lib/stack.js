// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value,next) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.storage = new Array()
        this.top = null
        this.length = 0
    }

    pop() {
        return this.storage.pop()
    }

    push(ele) {
        let new_node;
        if (this.length > 0) {
            new_node = new Node(ele,this.top)
        }
        else {
            new_node = new Node(ele,null)
        }
        this.storage.push(new_node)
        this.top = new_node
        this.length++
        return this.length
    }

    size() {
        return this.length
    }

    peek() {
        return this.next
    }
}

exports.Node = Node;
exports.Stack = Stack;
