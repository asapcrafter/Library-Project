let myLibrary = [];
const container = document.querySelector('.container')



function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet')
addBookToLibrary(theHobbit);
const theHungerGames = new Book('The Hunger Games', 'Jenny')
addBookToLibrary(theHungerGames);

document.body.onload = displayLibrary();

function displayLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        currentBook = myLibrary[i].title;
        div = document.createElement("div");
        div.setAttribute('class', 'card');
        div.innerHTML = `${currentBook}`;
        container.appendChild(div);
    }
}

