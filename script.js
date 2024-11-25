function divide(array, n) {
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (currentSum + array[i] <= n) {
            // If adding the current element doesn't exceed n, add it to the subarray
            currentSubarray.push(array[i]);
            currentSum += array[i];
        } else {
            // Otherwise, push the current subarray and start a new subarray
            result.push(currentSubarray);
            currentSubarray = [array[i]];
            currentSum = array[i];
        }
    }

    // Push the last subarray if any
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
}

function handleDivide() {
    const arrayInput = document.getElementById('arrayInput').value;
    const sumInput = document.getElementById('sumInput').value;

    if (!arrayInput || !sumInput) {
        alert('Please provide both the array and the maximum sum.');
        return;
    }

    const array = arrayInput.split(',').map(Number);
    const n = Number(sumInput);

    if (isNaN(n) || !Array.isArray(array) || array.some(isNaN)) {
        alert('Invalid input. Please ensure the array is a comma-separated list of numbers and n is a valid number.');
        return;
    }

    const result = divide(array, n);
    document.getElementById('result').textContent = JSON.stringify(result, null, 2);
}
