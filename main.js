
var date = moment();
console.log(date);
var currenday = $("#currentDay");
currenday.text(date);

var todoList = document.querySelector("#todo-list");


 var todos = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
//

// init();
renderTodos();
function renderTodos() {
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        var li = document.createElement("li");
        li.setAttribute("data-index", i);
        li.textContent = todo;
        todoList.appendChild(li);
        //create a button;
        var button = document.createElement("button");
        button.textContent = "save";
        button.setAttribute("id", i+9);
        button.setAttribute("class", "save");

        li.appendChild(button);

        
        //create input field;
         var storageItem = localStorage.getItem(todos[i]);
        var inText = document.createElement("INPUT");
        inText.setAttribute("type", "text");
        inText.setAttribute("data-time", i+9);
        inText.setAttribute("class","myText");
        inText.id=(i+9);
        inText.value = storageItem;
        // var input = inputs;
        // console.log(inputs);
        console.log(storageItem);
        li.appendChild(inText);


        
        

    }

}




///***********for save button */

var saveBtn = document.querySelectorAll(".save");
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function (event) {
        event.preventDefault();
        
        var elementId = this.getAttribute("id");
        var x = '[data-time="' + elementId +'"]';
        var inputDiv = document.querySelector(x);
        var inputText = inputDiv.value;
        console.log(inputText);
        // console.log(elementId);
        
        
        // Set local storage as: 
        // time: todo
         localStorage.setItem(elementId, inputText);
        // Add the inputText to localStorage, along with the time in the timeblock
    });
}

