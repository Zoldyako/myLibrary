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


Book.prototype.bookStatus = function (status) {
    return this.read = status;
}


function addBookToLibrary(title, author, pages, read) {
    
    myLibrary.push(new Book(title, author, pages, read));
    displayBook()
}


function changeReadStatus(book, status) {
    book.bookStatus = status;
    displayBook();
}


function createDeletBtn (tr, index) {
    let deletBtn = document.createElement('button');
    deletBtn.innerText = 'Delet';

    deletBtn.addEventListener('click', () => {
        let bookToDelete = tr.dataset.index = index;
        myLibrary.splice(bookToDelete, 1);
        tr.remove();
    });

    return deletBtn;
}


function createReadStatusBtn(tr, index) {
    let readStatusBtn = document.createElement('button');
    readStatusBtn.innerText = 'Edit';

    readStatusBtn.addEventListener('click', () => {
        
    });

    return readStatusBtn;
}


function displayBook() {
    tbody.innerHTML = '';
    
    myLibrary.forEach((book, index) => {
        let tr = document.createElement('tr');

        ['title', 'author', 'pages', 'read'].forEach(key => {
            let td = document.createElement('td');

            td.innerText = book[key];
            tr.appendChild(td);
        });

        let td = document.createElement('td');

        td.appendChild(createReadStatusBtn(tr, index));
        td.appendChild(createDeletBtn(tr));
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