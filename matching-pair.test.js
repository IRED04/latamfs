const { matchingPair, hasMatchingPair } = require('./matching-pair')

test('matching pair', () => {
    expect(matchingPair([2,3,6,7], 9)).toEqual([2, 7]); // notice 1st pair beginning from left pairs (like bubble sort)
    expect(matchingPair([2,3,6,8], 9)).toEqual([3, 6]);
    expect(matchingPair([1,3,3,7], 9)).toEqual([]);
})

test('has matching pair', () => {
    expect(hasMatchingPair([2,3,6,7], 9)).toBe(true);
    expect(hasMatchingPair([1,3,3,7], 9)).toBe(false);
})