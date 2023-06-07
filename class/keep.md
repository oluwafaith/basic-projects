function reverseCapitalize(str) {
	return str.split('').reverse().join('').toUpperCase()
}
console.log(reverseCapitalize("abc"))

function invertArray(arr) {
  let res = []
	for(let i = 0 ; i < arr.length; i++){
    res[i] = arr[i] * -1
     //  res.push(arr[i] * -1)
  }
  return res
}
console.log(invertArray([1, 2, 3, 4, 5]))