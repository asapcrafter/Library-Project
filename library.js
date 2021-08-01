var myLibrary = [];
const container = document.querySelector('.container')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    };
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};

Book.prototype.toggleRead = function(div) {
    if (this.read == '' || this.read == null) {
        this.read = 'Not read';
    } else if (this.read == 'Not read') {
        this.read = "Read"
    } else {
        this.read = "Not read"
    }
}


const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet')
addBookToLibrary(theHobbit);
const theHungerGames = new Book('The Hunger Games', 'Jenny')
addBookToLibrary(theHungerGames);

//Generate HTML "book cards" from myLibrary
document.body.onload = displayLibrary();

function displayLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        var div = document.createElement("div");
            div.setAttribute('class', 'card');
            div.setAttribute('data', `myLibrary[${i}]`)
            div.innerHTML = `${myLibrary[i].title}`;
            container.appendChild(div);
            createDeleteButton(div);
            createReadButton(div, i);
    };
};

function createDeleteButton(div) {
    var btn = document.createElement("BUTTON");
        btn.setAttribute('class', 'delete-book')
        btn.innerHTML = "Remove book";
        div.appendChild(btn);
        btn.onclick = () => div.remove();
}

function createReadButton(div, i) {
    var btn = document.createElement("BUTTON");
        btn.setAttribute('class', 'read-book')
        btn.innerHTML = "Toggle read";
        div.appendChild(btn);
        btn.onclick = () => myLibrary[i].toggleRead(div)
}

//Script for pop-up with button
document.querySelector('#new-book').onclick = () => togglePopup();
document.querySelector('#close-popup').onclick = () => togglePopup();

function togglePopup() {
    let div = document.querySelector('.popup')
    if (div.style.display == 'flex') {
        div.style.display = 'none';
    } else {
        div.style.display = 'flex';
    };
};

//Submit prompt event to add new book to library
var form = document.querySelector("#form")

form.onclick = () => submitForm(event);

function submitForm(event) {
    event.preventDefault();
    author = document.getElementById('author').value
    title = document.getElementById('title').value
    pages = document.getElementById('pages').value
    read = document.getElementById('read').value
    if (author == '' || title == '') {
        console.log("Pls feiill");
        return;
    }
    var book = new Book(author, title, pages, read)
    addBookToLibrary(book);
    resetLibrary();
    displayLibrary();
};

function resetLibrary() {
    document.querySelectorAll('.card').forEach(e => e.remove());
};







// addBookCard(book);
// function addBookCard(book) {
//     div = document.createElement("div");
//         div.setAttribute('class', 'card');
//         div.innerHTML = `${book.title}`;
//         container.appendChild(div);
// }