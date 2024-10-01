const tbody = document.querySelector('tbody');
const newBook = document.querySelector('button');
const myLibrary = [];


let lordOfTheRings  = new Book('Lord of The Rings', 'J.R.R. Tolkien', 295, 'Reading');
let lightingThief   = new Book('Percy Jackson and the Lighting Thief', 'Rick Riordan', 100, 'Read');

myLibrary[0] = lordOfTheRings;
myLibrary[1] = lightingThief;


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
    
    //  Iterates myLibrary array items
    //  Note to my self: Good to name the element parameter in context
    //  Here we are interating in an array of books so it is good to call the element 'book' :)
    myLibrary.forEach(book => {

        // Creates a 'tr' element for the current book
        let tr = document.createElement('tr');

        // After recreating the "God I wished there was an easier way to do this" meme 
        // by asigning each 'td' manually I asked ChatGPT if *there was a easier/cleaner way to do this* 
        // well turns out I'm dummer than the AI and there was a better way to do this
        // I'll use this method in the future (if I don't forget :P)

        ['title', 'author', 'pages', 'read'].forEach(key => {
            let td = document.createElement('td');

            td.innerText = book[key];
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    }); 
}



displayBook();

