const myLibrary = [];
const tbody     = document.querySelector('tbody');
const newBook   = document.querySelector('button');
const bookForm  = document.querySelector('.bookForm');
const dialogNewBook = document.querySelector('.newBook'); // Diálogo para novo livro
const dialogEditStatus = document.querySelector('.edit'); // Diálogo para editar status
const editForm = document.querySelector('#editForm'); // Formulário de edição de status
let currentEditIndex = null; // Para armazenar o índice do livro sendo editado

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
    this.status = status;
}


function addBook(title, author, pages, status) {
    myLibrary.push(new Book(title, author, pages, status));
    displayBooks();
}


function deletBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}


function createDeletBtn(index) {
    let deletBtn = document.createElement('button');
    deletBtn.innerText = 'Delete';

    deletBtn.addEventListener('click', () => {
        deletBook(index);
    });

    return deletBtn;
}


function createReadStatusBtn(index) {
    let readStatusBtn = document.createElement('button');
    readStatusBtn.innerText = 'Edit Status';

    readStatusBtn.addEventListener('click', () => {
        currentEditIndex = index; // Armazena o índice do livro a ser editado
        openEditStatusDialog(index); // Abre o diálogo de edição
    });

    return readStatusBtn;
}

function openEditStatusDialog(index) {
    const book = myLibrary[index];
    // Selecionar o status atual no diálogo de edição
    document.querySelector(`input[name="editStatus"][value="${book.status}"]`).checked = true;
    dialogEditStatus.showModal();
}

function displayBooks() {
    tbody.innerHTML = '';
    
    myLibrary.forEach((book, index) => {
        let tr = document.createElement('tr');

        ['title', 'author', 'pages', 'status'].forEach(key => {
            let td = document.createElement('td');
            td.innerText = book[key];
            tr.appendChild(td);
        });

        let td = document.createElement('td');
        td.appendChild(createReadStatusBtn(index));
        td.appendChild(createDeletBtn(index));
        tr.appendChild(td);

        tbody.appendChild(tr);
    }); 
}

// Para adicionar novos livros
newBook.addEventListener('click', () => { 
    dialogNewBook.showModal(); 
});

bookForm.addEventListener('submit', event => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    addBook(title, author, pages, status);

    bookForm.reset();
    dialogNewBook.close();
});

// Formulário para editar o status de leitura do livro
editForm.addEventListener('submit', event => {
    event.preventDefault();

    const newStatus = document.querySelector('input[name="editStatus"]:checked').value;
    
    if (currentEditIndex !== null) {
        myLibrary[currentEditIndex].changeStatus(newStatus); // Atualiza o status do livro
        displayBooks(); // Recarrega a tabela com o novo status
    }

    dialogEditStatus.close(); // Fecha o diálogo após a atualização
});

// Livros pré-existentes
let lordOfTheRings  = new Book('Lord of The Rings', 'J.R.R. Tolkien', 295, 'Reading');
let lightingThief   = new Book('Percy Jackson and the Lighting Thief', 'Rick Riordan', 100, 'Read');

myLibrary[0] = lordOfTheRings;
myLibrary[1] = lightingThief;

displayBooks();
