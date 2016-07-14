//Write a function that sums an array of numbers:
//Numbers must be always of type Number
//Throws Error if the parameter is not passed (undefined)
//Throws if any of the elements is not convertible to Number

function sum(arr){

	try{
		if (arr===undefined) {
			throw new Error('The array cannot be undefined.');
		}
		 if (!(arr.length)) {
			 return null;
		} 
		return arr.reduce(function(s,n){
			n = +n;
			if(isNaN(n)){
				throw new Error('Only numbers can be summed.');
			}
			return s + n;
		},0);
	} catch(error){
		console.log(error.message);
	}
}

module.exports = sum;