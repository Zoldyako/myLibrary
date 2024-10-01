const tbody = document.querySelector('tbody');
const myLibrary = [];


function Book(title, author, pages, read) {
    this.title  = title,
    this.author = author,
    this.pages  = pages,
    this.read   = read;    
}

Book.prototype.bookInfo = function () {
    return `${this.title} by author ${this.author}, has ${this.pages}, ${this.read}`
}

function addBookToLibrary() {}


function displayBook() {
    myLibrary.forEach((myLibrary) => {
        let tr = document.createElement('tr');
        let title = document.createElement('td'),
            author = document.createElement('td'), 
            pages = document.createElement('td'), 
            read = document.createElement('td');

        title.innerText = myLibrary.title;
        author.innerText = myLibrary.author;
        pages.innerText = myLibrary.pages;
        read.innerText  = myLibrary.read;

        tr.append(title, author, pages, read);
        tbody.appendChild(tr);
    }); 
}


let lordOfTheRings  = new Book('Lord of The Rings', 'J.R.R. Tolkien', 295, 'Reading');
let lightingThief   = new Book('Percy Jackson and the Lighting Thief', 'Rick Riordan', 100, 'Read');

myLibrary[0] = lordOfTheRings;
myLibrary[1] = lightingThief;


displayBook();

