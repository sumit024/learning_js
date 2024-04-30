const arr =[10,20,30,40,50]
const arr2 = new Array(1,2,3,4)

//console.log(arr);
//console.log(arr2);

// array methods
//console.log(arr);
//arr.push(7)
//arr.pop()
//arr.shift()
//arr.unshift(9)
//console.log(arr);

// slice and splice//////
// slice, splice

console.log('Original array',arr);

const slicedArr= arr.slice(1,3);
console.log('after slicing array',slicedArr);
console.log('array after slice',arr);

const splicedArr= arr.splice(1,3);
console.log('after splicing array',splicedArr);
console.log('array after splice',arr);


// slice excludes the end and splice includes the end
// splice modifies the original array , slice does not.