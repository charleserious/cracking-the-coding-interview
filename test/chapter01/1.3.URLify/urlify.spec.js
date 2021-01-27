import chai from 'chai';
import * as funcs from '../../../src/chapter01/1.3.URLify/urlify.js';
const { expect } = chai;

for (let key in funcs) {
    const func = funcs[key];
    describe(`chapter01-1.3 ${key}`, function () {
        it('works with null/undefined as input', function () {
            expect(func(undefined)).to.be.undefined;
            expect(func(null)).to.be.null;
        });

        it('works with an empty array as input', function () {
            expect(func([])).to.eql([]);
        });

        [
            'nospaces',
            ' ',
            '   ',
            ' firstSpace',
            'lastSpace ',
            '  surroundedBySpaces  ',
            'middle  spaces',
            ' l o t s  o f  s p a c e s ',
            'https://www.google.com',
            'https://www.google.com/search?q=something really really funny'
        ].forEach(arg => {
            it(`returns true for unique string: '${arg}'`, function () {
                let expected = arg.replace(/ /g, '%20').split('');
                expect(func(arg.split(''))).to.eql(expected);
            });
        });
    });
}