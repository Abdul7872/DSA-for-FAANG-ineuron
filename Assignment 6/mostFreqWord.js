//  return the k most frequent words in lexicographical (dictionary) order.

function kMostFrequentWords(arr,k) {
  const hashTable = {}; // hash table for frequent words
  for(const ele of arr){
    hashTable[ele] = hashTable[ele] + 1 || 1;
  }
  
  const sorted = Object.keys(hashTable).sort((a, b) => { 
    if (hashTable[b] === hashTable[a]) { // if both are equal, then sort by lexicographical
      return a.toLowerCase().localeCompare(b.toLowerCase()) ;
    }
    return hashTable[b] - hashTable[a] ;
  })
  return sorted.slice(0,k);
}

const arr =  ['priya','Priya', 'Priya', 'bhatia', 'akshay', 'arpit', 'priya', 'arpit'];
const k = 3;
console.log(kMostFrequentWords(arr,k));