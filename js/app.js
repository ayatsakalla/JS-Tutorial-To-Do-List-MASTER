// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";


function addToDo(toDo, id, done, trash) {

    if (trash) {return; }
    
    const DONE = done ? CHECK : UNCHECK; 
    const LINE = done ? LINE_THROUGH : "";
    
    const text = `<li class="item">
                <i class="co fa ${DONE} complete" job="complete"></i>
                <p class="text ${LINE}">${toDo}</p>
                <i class="de fa fa-trash-o" job="delete"></i>
            </li>`
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}

document.addEventListener("keyup",function(event){
    if (event.keyCode == 13) {
        const toDo = input.value;
        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push (
                {
                    name: toDo,
                    id:  id,
                    done: false,
                    trash: false
                }
            )




            input.value = "";
            id++;
        }
    }
})

