const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

toDoForm.addEventListener("submit", makeToDo);
let toDos = [];
const localToDos = JSON.parse(localStorage.getItem("toDos"));
if(localToDos !== null){
    localToDos.forEach(paintToDo);
    toDos = localToDos;
    saveToDos();
}

function makeToDo(event){
    event.preventDefault();
    const newToDo = {
        text: toDoInput.value,
        id: Date.now(),
    };
    toDoInput.value = "";
    paintToDo(newToDo);
    toDos.push(newToDo);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(newToDo){
    const liTag = document.createElement("li");
    liTag.id = newToDo.id;
    const toDoText = document.createElement("span");
    toDoText.innerText = newToDo.text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", delToDo);

    liTag.appendChild(toDoText);
    liTag.appendChild(delBtn);
    toDoList.appendChild(liTag);
}

function delToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => {
        return toDo.id !== parseInt(li.id);
    })
    li.remove();
    saveToDos();
}

