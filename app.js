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
// Book.prototype.toggleRead = function () {
//   this.read = !this.read;
// };

function addBookToLibrary(i) {
  // do stuff here
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let checkRead = document.querySelector('#checkRead').checked
    ? 'read 😃'
    : 'not read yet 😢';

  let newBook = new Book(title, author, pages, checkRead);
  myLibrary.push(newBook);
  displayBooks(); // Need to display the books that has been pushed to the library
}

form.addEventListener('submit', function (event, index) {
  event.preventDefault();
  addBookToLibrary(index);
});

// rendering books/ displaying books
function displayBooks() {
  const libraryDiv = document.querySelector('#library');

  libraryDiv.innerHTML = ``; // to erase the previous div items
  for (let i = 0; i < myLibrary.length; i++) {
    const newBookDiv = document.createElement('div');
    newBookDiv.setAttribute('id', `${i}`);
    newBookDiv.setAttribute('data-index', `${i}`);
    newBookDiv.innerHTML = `       
       <div class="card-header">
          <h3 class="title">${myLibrary[i].title}</h3>
          <h5 class="author">Author:${myLibrary[i].author}</h5>
      </div>
      <div class="card-body">
          <p>Pages:${myLibrary[i].pages}</p>
          <p class="read-status">${myLibrary[i].read}</p>
      </div>
    <button id="change-id" class="delete-button change-read-status">Change Read Status</button>
   <div class="delete-icon-div"><span class="material-symbols-outlined delete-icon"> delete</span></div>`;

    libraryDiv.appendChild(newBookDiv);
  }
}

//to delete the card

document.querySelector('#library').addEventListener('click', deleteCard);
function deleteCard(event) {
  if (event.target.classList.contains('delete-icon')) {
    let index = event.target.parentElement.parentElement.id;
    myLibrary.splice(index, 1); // to remove from the myLibrary array
    displayBooks();
    console.log(`THe index is ${index}`);

    // event.target.parentElement.parentElement.remove(); //Double parent element because we have inserted div inside the delete icon
    //Or i could've also used display books function becuase the book is deleted from the myLibrary array.
  }
}

//change the read status

document
  .querySelector('#library')
  .addEventListener('click', changingReadStatusFunction);
function changingReadStatusFunction(e) {
  if (e.target.classList.contains('change-read-status')) {
    // const cardBody = e.target.closest('.card-body');
    const cardBody = e.target.previousElementSibling;
    // alert(cardBody);
    // console.log(cardBody);
    const readStatusParagraph = cardBody.querySelector('.read-status');
    const text = readStatusParagraph.innerText;
    let index = e.target.parentElement.id;

    if (text.length < 12) {
      // means the current text is read 😃, so need to change to not read yet
      // readStatusParagraph.innerText = 'not read yet 😢'; // change in the div
      myLibrary[index].read = 'not read yet 😢'; // change in the library array
      displayBooks();
    } else {
      // readStatusParagraph.innerText = 'read 😃';
      myLibrary[index].read = 'read 😃';
      displayBooks();
    }

    // alert(index);
    console.log(myLibrary, index);
  }

  //   let status = e.target.closest('.read-status');
  //   console.log(status);
}
