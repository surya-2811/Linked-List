function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    let min = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}
// Merge Sorted Array
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let array = [];
  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }
  while (i <= arr1.length - 1) {
    array.push(arr1[i]);
    i++;
  }
  while (j <= arr2.length - 1) {
    array.push(arr2[j]);
    j++;
  }
  return array;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(quickSort([8, 5, 34, 542, -62, 0, 1]), "Quick Sort");

console.log(mergeSort([8, 5, 34, 542, -62, 0, 1]), "Merge Sort");

console.log(merge([3, 6, 8, 9], [2, 4, 6, 8, 19], "Merge"));

console.log(selectionSort([8, 5, 34, 542, -62, 0, 1]), "Selection Sort");

console.log(selectionSort([8, 5, 34, 542, -62, 0, 1]), "Selection Sort");

console.log(bubbleSort([8, 5, 34, 542, -62, 0, 1]), "Bubble Sort");
console.log(insertionSort([8, 5, 34, 542, -62, 0, 1]), "insetion Sort");

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function pivot(array, left, right) {
  let pivotIndex = right; // Choose the rightmost element as pivot
  let pivotValue = array[pivotIndex];
  let swapIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, swapIndex);
      swapIndex++;
    }
  }
  swap(array, swapIndex, pivotIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
