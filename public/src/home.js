const lengthInput = (helper) => helper.length; // utilized helper function for getTotalBooksCount and getTotalAccountsCount

const getTotalBooksCount = (books) => lengthInput(books); // used helper functions to extract length variable from helper

const getTotalAccountsCount = (accounts) => lengthInput(accounts); // same as above, used helper function to implement length for accounts


function getBooksBorrowedCount(books) { // create a function that takes in a parameter, books
  let booksBorrowed = books.reduce((acc, book) => { // use the .reduce method to add the found accumulated books that were borrowed, return accumulated books, 0
    return (acc + (!book.borrows[0].returned));
  }, 0);
  return booksBorrowed; // return new variable
}

function getMostCommonGenres(books) { // create a function that takes in one parameter, book
const genreCounter = books.reduce((total, book) => { // initialize a variable that takes in objects extract from the .reduce method
  const searchedValue = total.find(key => book.genre === key.name); // implement .find method to retrieve objects within array and initialize new variable 
  if (searchedValue) { // use if statement to add count 
    searchedValue.count++; 
  } else {
    total.push({ name: book.genre, count: 1 }); // or else add or push objects 
  }
  const sortedList = total.sort((bookA, bookB) =>  // assign variable after sorted value to total
    bookA.count < bookB.count ? 1 : -1 // if book genre count is less than other, return list
    ) 
return sortedList;
}, []);
const [first, second, third, fourth ,fifth] = genreCounter
  return [first, second, third, fourth ,fifth];
}

function getMostPopularBooks(books) {
  const popularBooks = books.map(book => {
    return { name: book.title, count: book.borrows.length };
  });
  const sortedList = popularBooks.sort((bookOne, bookTwo) =>
  bookOne.count < bookTwo.count ? 1 : -1
  );
  [first, second, third, fourth, fifth] = sortedList;
  const result = [first, second, third, fourth, fifth];

  return result;
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = books.reduce((total, book) => {
    const findValue = total.find(key => book.authorId === key.name);
    if (findValue) {
      findValue.count += book.borrows.length; 
    } else {
      total.push({ name: book.authorId, count: book.borrows.length });
    }
    const sortedList = total.sort((bookOne, bookTwo) => 
    bookOne.count < bookTwo.count ? 1 : -1 
    ); 
     return sortedList;
}, []);
for (const key of popularAuthors) {
  let authorName = authors.find(author => author.id === key.name);
  key.name = `${authorName.name.first} ${authorName.name.last}`;
}
const [first, second, third, fourth, fifth] = popularAuthors;
 const result = [first, second, third, fourth, fifth];
 return result;
} 



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
