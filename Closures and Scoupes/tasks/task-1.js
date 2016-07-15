function solve() {
	var library = (function () {
	var categories = [],
		books =[];	
		function addBook(bookToAdd){
			if(bookToAdd.title.length<2 || bookToAdd.title.length>100){
				throw new Error('Title must be between 2 and 100 characters!');
			}
			if(bookToAdd.category.length<2 || bookToAdd.category.length>100){
				throw new Error('Title must be between 2 and 100 characters!');
			}
			if(bookToAdd.author==''){
				throw new Error('Author name is missing');
			}
			if (bookToAdd.isbn.toString().length!=10 && bookToAdd.isbn.toString().length!=13 ) {
				throw new Error('ISBN must be with 10 ot 13 digits');
			}

			for(var prop in books){
				if(books[prop].title==bookToAdd.title){
					throw new Error('This title already exists!');
				}
				if(books[prop].isbn==bookToAdd.isbn){
					throw new Error('This isbn already exists!');	
				}
			}
			var book = { 
				title:bookToAdd.title,
				author:bookToAdd.author,
				isbn:bookToAdd.isbn,
				ID : books.length+1,
				category:bookToAdd.category === undefined ?'unNamed': bookToAdd.category
			};
			books.push(book);
			
			return book;
		}

		function listBooks(obj) {
			var temp = [];
			if(!(obj === undefined) ){
				for(var prop in books){
					if(obj.hasOwnProperty('author') && books[prop].author == obj.author){
						temp.push(books[prop]);
					} 
					if(obj.hasOwnProperty('category') && books[prop].category == obj.category){
						temp.push(books[prop]);
					}
				}

				return temp;
			}

			return books;
		}

		function listCategories() {
			for(var prop in books){
				if(categories.indexOf(books[prop].category)<0){
					categories.push(books[prop].category);
				}
			} 

			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	})();
	return library;
}
module.exports = solve;
