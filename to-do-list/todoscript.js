const taskArray = [];

const inputRef = document.querySelector("input");
const ulRef = document.querySelector("#taskList")
const completedRef = document.querySelector("#completedList")

function addtask(){
    const inputText = inputRef.value;
    if (!taskArray.includes(inputText)) {
    taskArray.push(inputText);

    const li = document.createElement("li")
    li.innerText = inputText;
    ulRef.appendChild(li); 

    const completeButton = document.createElement("button");
    completeButton.innerText = "Completed";
    completeButton.addEventListener('click', () => {
        const completedLi = document.createElement("li");
        completedLi.innerText = inputText; 
        completedRef.appendChild(completedLi);
        ulRef.removeChild(li); 
     })
    li.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener('click', () => {
        ulRef.removeChild(li);
     })
    li.appendChild(deleteButton);
} else {
    alert("This task is already in the list.");
}
}

