function findAuthorById(authors, id) { // create a function that takes in two parameters, authors and id
  return authors.find(author => id ===author.id); // return and utilize the .find method for author callback that matches id
}

function findBookById(books, id) { // create a funtion that takes in two parameters, books and id
  return books.find(book => id === book.id); // same as above, return and utilize the .find method for books that match id 
}

function partitionBooksByBorrowedStatus(books) { // create a function that takes in a parameter, books
  const returned = books.filter(book => book.borrows[0].returned); // assign new array of books with the .filter method that are returned
  const missing = books.filter(book => !book.borrows[0].returned); // assign new array of books with the .filter method are missing 
    return [missing, returned] // return both new variables
}

function getBorrowersForBook(book, accounts) { // create a function that takes in two parameters, book and accounts
  let borrowLog = []; // assign a new variable to an empty array
  let borrow = book.borrows; // assign borrowed books to a new variable for simplicity 
borrow.forEach((borrow) => { // implement .forEach to borrow in order to callback each element in array
accounts.forEach((account) => { // same as above, implement .forEach to find and call each element within the array
    if(account.id === borrow.id) { // if the id matches along with amount and borrow matching, add or push account to empty array
account.returned = borrow.returned;
  borrowLog.push(account);
              
			}
		});
	});
  return borrowLog.slice(0, 10); // return new variable but slice to have the 10 borrowers*** Did not understand what to do for the longest time.
  
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
