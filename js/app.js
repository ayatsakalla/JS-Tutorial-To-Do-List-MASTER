// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const input = document.getElementById("input");


function addToDo(toDo) {
    const list = document.getElementById("list");
    const text = `<li class="item">
                <i class="co fa fa-circle-thin" job="complete"></i>
                <p class="text">${toDo}</p>
                <i class="de fa fa-trash-o" job="delete"></i>
            </li>`
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}


