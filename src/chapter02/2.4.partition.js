import * as helpers from './helpers.js';

export const twoPointPartition = (head, x) => {
  // before and after are the two pointers used to create the two list.
  // beforeHead and afterHead are used to save the heads of the two lists.
  // All of these are initialized with the dummy nodes created.
  const beforeHead = helpers.createNode(0);
  let before = beforeHead;
  const afterHead = helpers.createNode(0);
  let after = afterHead;

  while(head.val) {
    // If the origin list node is lesser than the given x,
    // assign it to the before list.
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      // If the original list nodes is greater or equal to the given x,
      // assign it to the after list.
      after.next = head;
      after = after.next;
    }

    // move ahead in the origin list
    head = head.next;
  }

  // Last node of `after` list would also be ending node of the reformed list.
  after.next = null;

  // Once all the nodes are correctly assigned to the two lists,
  // combine them to form a single list which would be returned.
  before.next = afterHead.next;

  return beforeHead.next;
};
