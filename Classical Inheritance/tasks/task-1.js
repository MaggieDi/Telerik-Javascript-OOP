
function solve() {
	var Person = (function () {

		function validNAme(value){
			var pattern = /^[a-z]{3,20}$/gi;
			return pattern.test(value);
		}

		function validAge(value){
			 var age = parseInt(value);
			 return age >= 0 && age <= 150;
		}

		function Person(firstname,lastname,age) {
			this.firstname = firstname;
			this.lastname = lastname;
			this.age = age;
		}

		Object.defineProperty(Person.prototype,'firstname',{
			get:function(){
				return this._firstname;
			},
			set: function(value){
				if (!validNAme(value)) {
					throw new Error('Invalid');
			}

				this._firstname = value;
			

			}
		});
		Object.defineProperty(Person.prototype,'lastname',{
			get:function(){
				return this._lastname;
			},
			set: function(value){
				if (!validNAme(value)) {
					throw new Error('Invalid');
				}

				this._lastname = value;
			

			}
		});
		Object.defineProperty(Person.prototype,'age',{
			get:function(){
				return this._age;
			},
			set: function(value){
				if (!validAge(value)) {
					throw new Error('Invalid');
				}

				this._age = value;
			

			}
		});
		Object.defineProperty(Person.prototype,'fullname',{
			get:function(){
				return this._firstname + ' ' + this._lastname;
			},
			set: function(value){
				var names = value.split(' ');
				this.firstname = names[0];
				this.lastname = names[1];
			}
		});
		Person.prototype.introduce = function(){
			return 'Hello! My name is ' + this.fullname + ' and I am ' + this.age +'-years-old';
			};	

		return Person;
	
	} ());
	
	
	return Person;
}
module.exports = solve;