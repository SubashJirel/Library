const form = document.querySelector('.addForm');
const addBook = document.querySelector('.addBook');

// toggle book add form
addBook.addEventListener('click', toggleForm);
function toggleForm() {
  document.querySelector('.fieldset').classList.toggle('hide');
}

//prevent default for submit
form.addEventListener('submit', submitThis);
function submitThis(event) {
  event.preventDefault();
}
