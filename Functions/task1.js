//Write a function that sums an array of numbers:
//Numbers must be always of type Number
//Throws Error if the parameter is not passed (undefined)
//Throws if any of the elements is not convertible to Number

function sumNum(arr){
	if (arr===undefined) {
		throw new Error('The array cannot be undefined.');
	} else if (!(arr.length)) {
		 return null;
	} else{
		var i,
	 	 	l,
	     	num=Number(arr[0]);
		for(i=1,l=arr.length;i<l;i+=1){
	 		num=num + Number(arr[i]);	
	 	}
	 	if(isNaN(num)){
			throw new Error('Only number can be summed.');
	 	} else{
	 	console.log('Sum of number in this array is: ' + num + '.');
	 	}
	}

}
var array = [3.5,18,102,6.2,54,0];

sumNum(array);
