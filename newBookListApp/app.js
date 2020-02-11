// Book Class: Respresent a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI TASKS

class UI {
  static displayBooks() {
      const books = Store.getBooks();
      books.forEach((book) => {
      UI.addBookToList(book);
    });
  }
  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
    list.appendChild(row);
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    //Vanish in 3 Sec
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2500);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
}
// Storage Class: Handle Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1)
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

//Event : Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : Add a Book
document.querySelector('#book-form').addEventListener('submit', e => {
  // Prevent actual Submit
  e.preventDefault();
  // Get Form Values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validation
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill the all the Form Details', 'danger');
  } else {
    // Instatiate book
    const book = new Book(title, author, isbn);
    // console.info(book);

    // Add Book to List
    UI.addBookToList(book);
    UI.clearFields();

    // Add Book to Store
    Store.addBook(book);
    

    //Show Alert on Add
    UI.showAlert('The Book Added', 'success');
  }
});
// Event : Remove A Book
document.querySelector('#book-list').addEventListener('click', e => {
  // console.info(e.target);
  UI.deleteBook(e.target);
  // Remove book from store 
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
  // Remove Message of the Book
  UI.showAlert('Book Removed form the LIST', 'info');
});
