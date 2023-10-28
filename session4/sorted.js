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
var deleteDuplicates = function(head) {
    let thead = head;

    while(thead != null && thead.next != null){
        if(thead.val == thead.next.val){
            thead.next = thead.next.next;
        } else {
            thead = thead.next;
        }
    }

    return head;
};