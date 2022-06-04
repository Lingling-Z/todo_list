const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// function to create an html template for new list items 
// and append it to the list
const addToList = (addContent) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${addContent}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `
    list.innerHTML += html;
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const addContent = addForm.add.value.trim();
    if(addContent) {         // if the content is not empty
    addToList(addContent);
    addForm.reset();  // clears the content after user hits enter
    }
})

// delete todo
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filterTodos = (userInput) => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.includes(userInput))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.includes(userInput))
        .forEach(todo => todo.classList.remove('filtered'));
};

// search todos
search.addEventListener('keyup', ()=>{
    const userInput = search.value.trim();
    filterTodos(userInput);
})