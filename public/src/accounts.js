function findAccountById(accounts, id) { //create a function that takes in two parameters, accounts and id
  let idFinder = accounts.find((account) => account.id === id); //assign variable after initializing .find method to find matching id
    return idFinder;  // return variable 
}

function sortAccountsByLastName(accounts) { // create a function that takes in a parameter, account
  return accounts.sort((nameOne, nameTwo) => (nameOne.name.last > nameTwo.name.last) ? 1 : -1) // initialize and return a higher order function that callsback sort statement
}

function getTotalNumberOfBorrows(account, books) { //create a function that takes in two parameters, account and books 
  let placeholder = 0; // assign placeholder variable to 0 so that we add total number of borrowers 
  const info = account.id; // assign id to a new variable for simplicity 
books.forEach(books => books.borrows.forEach((borrowed) => (info === borrowed.id) && placeholder++)) // implemented .forEach to loop and extract ids then add new total to placeholder
    return placeholder // return new variable 
}

function getBooksPossessedByAccount(account, books, authors) { // create a function that takes in three parameters
  const accountDetails = account.id;  // assign id to a new placeholder for simplicity
  let possessedBooks = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === accountDetails); // implement .filter method to find which books are held
  let bookInfo = possessedBooks.map((info) => ({ ...info, author: authors.find((author) => author.id === info.authorId) //utilize the .map method to hold books in corresponding order to retrieve details of the book along with authors
  }));
    return bookInfo; // return new variable 
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
