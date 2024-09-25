let listContainer = document.querySelector(".list-container");
let input = document.querySelector("#input");
let addButton = document.querySelector("#Add-btn");

addButton.addEventListener("click", () => {
    if (input.value === "") {
        alert("Enter Your Task");
    }
    else {
        let task = document.createElement("li");
        task.textContent = input.value;
        listContainer.append(task);

        let remove = document.createElement("span");
        remove.textContent = "\u00d7";
        task.append(remove);
    }
    input.value = "";
    saveData();
})

document.body.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (input.value === "") {
            alert("Enter Your Task");
        }
        else {
            let task = document.createElement("li");
            task.textContent = input.value;
            listContainer.append(task);
    
            let remove = document.createElement("span");
            remove.textContent = "\u00d7";
            task.append(remove);
        }
        input.value = "";
        saveData();
    }
});

listContainer.addEventListener("click", (element) => {
    if (element.target.tagName == "LI") {
        element.target.classList.toggle("checked");
        saveData();
    }
    else if (element.target.tagName == "SPAN") {
        element.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("tasks",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("tasks");
}

showData();