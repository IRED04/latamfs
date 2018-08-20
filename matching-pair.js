const matchingPair = (numbers = [], sum) => {
    // procedural way
    for (let i = 0; i < numbers.length; i++)
        for (let j = i + 1; j < numbers.length; j++)
            if (numbers[i] + numbers[j] === sum)
                return [numbers[i], numbers[j]]
    
    return []
}

const hasMatchingPair = (numbers, sum) => matchingPair(numbers, sum).length !== 0

module.exports = {
    matchingPair,
    hasMatchingPair
};