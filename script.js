const myLibrary = [];
const tbody     = document.querySelector('tbody');
const newBook   = document.querySelector('button');
const bookForm  = document.querySelector('.bookForm');
const dialog    = document.querySelector('dialog');


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
    displayBook()
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


newBook.addEventListener('mousedown', () => { dialog.show(); });

bookForm.addEventListener('submit', event => {

    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('input[name="read"]:checked').value;

    addBookToLibrary(title, author, pages, read);

    bookForm.reset();
    dialog.close();
});



let lordOfTheRings  = new Book('Lord of The Rings', 'J.R.R. Tolkien', 295, 'Reading');
let lightingThief   = new Book('Percy Jackson and the Lighting Thief', 'Rick Riordan', 100, 'Read');

myLibrary[0] = lordOfTheRings;
myLibrary[1] = lightingThief;

displayBook();