const myLibrary = [];
const tbody     = document.querySelector('tbody');
const newBook   = document.querySelector('button');
const bookForm  = document.querySelector('.bookForm');
const dialog    = document.querySelector('dialog');


function Book(title, author, pages, status) {
    this.title  = title,
    this.author = author,
    this.pages  = pages,
    this.status = status;    
}

Book.prototype.bookInfo = function() {
    return `${this.title} by author ${this.author}, has ${this.pages}, ${this.status}`
}

Book.prototype.changeStatus = function(status) {
    return this.status = status;
}

Book.prototype.addBook = function(title, author, pages, status) {
    myLibrary.push(new Book(title, author, pages, status));
}

Book.prototype.deletBook = function() {
    const index = myLibrary.indexOf(this);
    myLibrary.splice(index, 1);
}


function createDeletBtn(tr, index) {
    let deletBtn = document.createElement('button');
    deletBtn.innerText = 'Delet';

    deletBtn.addEventListener('click', () => {
        let book = myLibrary[index];
        book.deletBook();
        tr.remove();
    });

    return deletBtn;
}


function createReadStatusBtn(tr, index, status) {
    let readStatusBtn = document.createElement('button');
    readStatusBtn.innerText = 'Edit';

    readStatusBtn.addEventListener('click', () => {
        let bookToChange = tr.dataset.index = index;
        changeReadStatus(bookToChange, status);
        alert("aa");
    });

    return readStatusBtn;
}


function changeReadStatus(book, status) {
    book.bookStatus = status;
    displayBook();
}


function displayBook() {
    tbody.innerHTML = '';
    
    myLibrary.forEach((book, index) => {
        let tr = document.createElement('tr');

        ['title', 'author', 'pages', 'status'].forEach(key => {
            let td = document.createElement('td');

            td.innerText = book[key];
            tr.appendChild(td);
        });

        let td = document.createElement('td');

        td.appendChild(createReadStatusBtn(tr, index));
        td.appendChild(createDeletBtn(tr, index));
        tr.appendChild(td);


        tr.dataset.index = index
        
        tbody.appendChild(tr);
    }); 
}


newBook.addEventListener('click', () => { dialog.showModal(); });

bookForm.addEventListener('submit', event => {

    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    addBookToLibrary(title, author, pages, status);

    bookForm.reset();
    dialog.close();
});



let lordOfTheRings  = new Book('Lord of The Rings', 'J.R.R. Tolkien', 295, 'Reading');
let lightingThief   = new Book('Percy Jackson and the Lighting Thief', 'Rick Riordan', 100, 'Read');

myLibrary[0] = lordOfTheRings;
myLibrary[1] = lightingThief;

displayBook();