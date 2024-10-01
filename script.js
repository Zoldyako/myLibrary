const tbody = document.querySelector('tbody');
const newBook = document.querySelector('button');
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


function addBookToLibrary(title, author, pages, read) {

    myLibrary.push(new Book(title, author, pages, read));
    displayBook();
}


function displayBook() {
    tbody.innerHTML = '';
    
    myLibrary.forEach(book => {
        let tr = document.createElement('tr');

        ['title', 'author', 'pages', 'read'].forEach(key => {
            let td = document.createElement('td');

            td.innerText = book[key];
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    }); 
}


newBook.addEventListener('mousedown', () => { 
    addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, 'Unread'); 
});


let lordOfTheRings  = new Book('Lord of The Rings', 'J.R.R. Tolkien', 295, 'Reading');
let lightingThief   = new Book('Percy Jackson and the Lighting Thief', 'Rick Riordan', 100, 'Read');

myLibrary[0] = lordOfTheRings;
myLibrary[1] = lightingThief;


displayBook();