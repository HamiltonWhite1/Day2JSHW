// element.addEventListener('action', callback_func)

// target the unordered list
let todoListElement = document.getElementById('todoList')

// function that creates event listeners
const createEvents = ( el ) => {
    // add mouseenter event listener
    el.addEventListener('mouseenter', (e) => {
        e.target.classList.add('active')
    })
    // add mouseleave event listener
    el.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('active')
    })

    // add click event listener
    el.addEventListener( 'click', () => {
        el.classList.remove('active')
        el.classList.toggle('disabled')
        if (el.style.textDecoration === 'line-through'){
            el.style.textDecoration = 'none'
        } else {
            el.style.textDecoration = 'line-through'
        }
    } )
}

let input = document.getElementById( 'todoInputField' );
let form = document.getElementById( 'todoForm' );

form.addEventListener( 'submit', ( e ) => {
    // prevent page refresh
    e.preventDefault();

    // create new dom element using JavaScript
    let li = document.createElement('li')
    let stuff = document.createElement('li')

    // add the nevessary classes to the list element
    li.classList.add('list-group-item')

    // set the intter text of the list element to the input field's value
    li.innerText = input.value

    // stick all of our events to the list item
    createEvents( li );

    // add the item into the unordered list
    todoListElement.appendChild(li);

    // clear the todo input field text
    input.value = '';
} )

let button = document.getElementById('button-delete');

button.addEventListener('click', () => {
    todoListElement.innerHTML = '';

})