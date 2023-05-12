//console.log('check')
const form = document.querySelector('.addForm');
const addBookBtn = document.querySelector('.addBookBtn');

// toggle book add form
addBookBtn.addEventListener('click', toggleForm);
function toggleForm() {
  document.querySelector('.fieldset').classList.toggle('hide');
}

//prevent default for submit
// form.addEventListener('submit', submitThis);
// function submitThis(event) {
//   event.preventDefault();
// }

//The code
let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let checkRead = document.querySelector('#checkRead').value;

  let newBook = new Book(title, author, pages, checkRead);
  myLibrary.push(newBook);
  displayBooks(); // Need to display the books that has been pushed to the library
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  addBookToLibrary();
});

// rendering books/ displaying books
function displayBooks() {
  const libraryDiv = document.querySelector('#library');

  libraryDiv.innerHTML = ``; // to erase the previous div items
  for (let i = 0; i < myLibrary.length; i++) {
    const newBookDiv = document.createElement('div');
    newBookDiv.innerHTML = `<h3>${myLibrary[i].title}</h3>
    <p>${myLibrary[i].author}</p>
    <p>${myLibrary[i].pages}</p>`;

    libraryDiv.appendChild(newBookDiv);
  }
}
