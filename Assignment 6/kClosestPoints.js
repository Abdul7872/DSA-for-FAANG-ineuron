//  return the k closest points to the origin.

// method 1
function kClosestPoints(points,k) {
  
  const hashTable = {}; // hash table  distance ==> [ [point] ]

  for(const point of points) {
    const distance = Math.sqrt( point[0]**2 + point[1]**2 );
    hashTable[distance] = hashTable[distance] ? [...hashTable[distance], point] : [point] ; 
  }

  const sortDistance= Object.keys(hashTable).sort((a, b) => a - b );
  const resultPoints =[];
  sortDistance.map(distance =>{
    hashTable[distance].forEach( point => resultPoints.push(point) );
  });

  return resultPoints.slice(0,k);

}

const points = [[1, 3], [-2, 2]];
const k = 1;

// console.log(kClosestPoints(points,k)); // uncomment this for method 1

// method 2
function kClosestPointsMethod2 (points,k) {

  points.sort( (a,b) => (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2) );
  return points.slice(0,k);

}
const method2Points = [[1, 3], [-2, 2], [2,-2]];
const method2K = 2;

console.log(kClosestPointsMethod2(method2Points, method2K));

