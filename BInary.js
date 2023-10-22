function binarySearch(array, target) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    const middleElement = array[middleIndex];

    if (middleElement === target) {
      return middleIndex;
    } else if (middleElement < target) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}

// Example usage:

const array = [1, 3, 5, 7, 9];
const target = 7;

const index = binarySearch(array, target);

if (index !== -1) {
  console.log(`The target element is at index ${index}.`);
} else {
  console.log('The target element is not found.');
}
