const todoText = document.querySelector('.input-todo')
const listContainer =document.querySelector('.todo-container')
const add = document.querySelector('.addTask')
const toggle = document.querySelector('.moon')
const body = document.querySelector('body')
const infoContainer  = document.querySelector('.todo-info')
const inputText  = document.querySelector('.input-text')
const container = document.querySelector('.container')
const itemCounter = document.querySelector('.item-counter')

let itemleft = 0;



//ADDING EVENTLISTENERS TO THE BUTTON
add.addEventListener('click', addTodo)

//CREATING THE FUNCTION
function addTodo(){
    if(todoText.value =='') {
        alert('write todo')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML= todoText.value
        listContainer.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML= '\u00d7'
        li.appendChild(span)
        itemleft++;

    }

    todoText.value= '';
    updateItem();
}

listContainer.addEventListener('click', function(event){
    if (event.target.tagName === 'LI'){
        event.target.classList.toggle('checked')
        itemleft--;
        updateItem();
    }

    else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        updateItem();
    }

}, false)

//CREATING ANOTHER FUNCTION TO UPDATE THE UI
function updateItem() {
    const itemCount =  listContainer.getElementsByTagName('li').length;
    const itemLeft =  itemleft;
    itemCounter.textContent = `${itemLeft} item${itemLeft !== 1 ? 's' : ''} `;
}

//ADDING EVENTLISTENERS TO THE MOON TO CHANGE THE THEME
const toggleImage = () => {
    if(toggle.src.match('images/icon-moon.svg')) {
        toggle.src = 'images/icon-sun.svg'
        body.style.backgroundColor='hsl(235, 21%, 11%)'
        listContainer.style.backgroundColor='hsl(235, 24%, 19%)'
        infoContainer.style.backgroundColor='hsl(235, 24%, 19%)'
        inputText.style.backgroundColor='hsl(235, 24%, 19%)'
        todoText.style.backgroundColor='hsl(235, 21%, 11%)'
        todoText.style.color='white'

        // Change background image based on viewport width
        if (window.innerWidth < 375) {
        container.style.backgroundImage = "url('images/bg-mobile-dark.jpg')";
      } else {
        container.style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
      }
    }
    else{
        toggle.src = 'images/icon-moon.svg'
        body.style.backgroundColor='white'
        listContainer.style.backgroundColor='white'
        infoContainer.style.backgroundColor='white'
        todoText.style.backgroundColor='white'
        todoText.style.color='black'
        

            // Change background image based on viewport width
        if (window.innerWidth < 375) {
            container.style.backgroundImage = "url('images/bg-mobile-light.jpg')";
        } else {
            container.style.backgroundImage = "url('images/bg-desktop-light.jpg')";
        }
    }
}


