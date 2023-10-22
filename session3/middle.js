/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// time complexity: O(N)
// var findLength = function(head){
//     let nodes = 0;
//     let thead = head;
//     while(thead!=null){
//         nodes++;
//         thead = thead.next;
//     }
//     return nodes;
// }

// // time complexity: O(N)
// var middleNode = function(head) {
//     // find the length of the linked list
//     let length = findLength(head); // O(N)

//     let middle = Math.floor(length/2); // O(1)

//     while(middle--) head = head.next; // O(N/2) => O(N)

//     return head;
// };

// time complexity: O(N)
// without calculating the length of the linked list
// find the middle node of the linked list
var middleNode = function(head) {
    let slow = fast = head;

    while(fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};