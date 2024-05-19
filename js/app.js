// CODE EXPLAINED channel

// select elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//variables

let LIST = []
    , id = 0;

// show todays date

const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);


// add to do function 
function addToDo(toDo, id, done, trash) {

    if (trash) { return; }
    
    const DONE = done ? CHECK : UNCHECK; 
    const LINE = done ? LINE_THROUGH : "";
    
    const item = `<li class="item">
                <i class="co fa ${DONE}" job="complete id="${id}"></i>
                <p class="text ${LINE}">${toDo}</p>
                <i class="de fa fa-trash-o" job="delete" id="${id}"></i>
            </li>`
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}

// add an item to the list user the enter key 
document.addEventListener("keyup",function(even){
    if (event.keyCode == 13) {
        const toDo = input.value;

        // if the input isn't empty 
        if (toDo) {
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id : id,
                done: false,
                trash : false 
            });

            id++; 

            input.value = "";
        }
    }
});

// complete to do 
function completeToDO(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true; 
}


