import chai from 'chai';
import * as funcs from '../../src/chapter02/2.7.intersection.js';
import * as helpers from '../../src/chapter02/helpers.js';

const { expect } = chai;

const generateList = length => {
  let list = helpers.createLinkedList();
  for (let i = length; i > 0; i--) {
    helpers.pushSingle(list, 100 + Math.random() * 999999);
  }
  return list;
};

for (let key in funcs) {
  let func = funcs[key];

  describe(`chapter02-2.7 ${key}`, () => {
    it('correctly identifies first node when both lists are the same', () => {
      let list = generateList(10);
      expect(func(list.head, list.head)).to.equal(list.head);
    });

    [
      {
        len1: 1,
        len2: 1,
        lenCommon: 1
      },
      {
        len1: 3,
        len2: 3,
        lenCommon: 3
      },
      {
        len1: 2,
        len2: 7,
        lenCommon: 2
      },
      {
        len1: 14,
        len2: 2,
        lenCommon: 1
      },
      {
        len1: 6,
        len2: 4,
        lenCommon: 11
      }
    ].forEach(context => {
      let one = generateList(context.len1);
      let two = generateList(context.len2);
      let common = generateList(context.lenCommon);
      it(`returns null with list1: ${context.len1} & list2: ${context.len2} that do not intersect`, () => {
        expect(func(one.head, two.head)).to.be.null;
      });

      it(`return correct node with list1: ${context.len1} & list2: ${context.len2} that intersect`, () => {
        one.tail.next = two.tail.next = common.head;
        expect(func(one.head, two.head)).to.equal(common.head);
      });
    });
  });
}