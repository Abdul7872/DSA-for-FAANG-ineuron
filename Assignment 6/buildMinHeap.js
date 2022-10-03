// min Heap 
const arr = [ 1, 3, 7, 9, 12, 10, 8, 16, 18, 22, 27];

function heapify(arr, n, i){
  const leftChild = 2*i + 1;
  const rightChild = 2*i + 2;
  let smallest = i;
  if(leftChild < n  && arr[leftChild] < arr[i]){
    smallest = leftChild;
  }
  if(rightChild < n  && arr[rightChild] < arr[smallest]){
    smallest = rightChild;
  }
  if(smallest === i) return;
  // else we do swap
  [ arr[i], arr[smallest] ] = [ arr[smallest], arr[i] ]; // swapping using  es6 destructuring
  heapify(arr, n, smallest);
} 

function buildHeap(arr, n=arr.length){
  let startIdx = Math.floor(n/2)-1;  // index of last parent element
  for(let i=startIdx; i>=0; i--){
    heapify(arr,n,i);
  }
  return arr;
} 

console.log(buildHeap(arr));