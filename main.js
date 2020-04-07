
var date = moment();
console.log(date);
var currenday = $("#currentDay");
currenday.text(date);

var todoList = document.querySelector("#todo-list");

//array is created for time block
var todos = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
//

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
        button.setAttribute("id", i + 9);
        button.setAttribute("class", "save");

        li.appendChild(button);


        //create input field;
        var storageItem = localStorage.getItem(todos[i]);
        var inText = document.createElement("INPUT");
        inText.setAttribute("type", "text");
        inText.setAttribute("data-time", i + 9);
        inText.setAttribute("class", "myText");
        inText.id = (i + 9 + "t");
        inText.value = storageItem;//
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
        var x = '[data-time="' + elementId + '"]';
        var inputDiv = document.querySelector(x);
        var inputText = inputDiv.value;
        console.log(inputText);
        // console.log(elementId);


//setting local storage
        localStorage.setItem(elementId, inputText);
        // Add the inputText to localStorage, along with the time in the timeblock
    });
}




// for 9am
if ((new Date().getHours()) === 9) {
    // console.log(new Date());

    document.getElement('9t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 9) {

    document.getElementById('9t').style.backgroundColor = "#d3d3d3";
    // document.getElementById("9t").disabled = true;
} else {

    document.getElementById('9t').style.backgroundColor = "#77dd77";

}


if ((new Date().getHours()) === 10) {


    document.getElement('10t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 10) {

    document.getElementById('10t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('10t').style.backgroundColor = "#77dd77";


}



if ((new Date().getHours()) === 11) {


    document.getElement('11t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 11) {

    document.getElementById('11t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('11t').style.backgroundColor = "#77dd77";

}




if ((new Date().getHours()) === 12) {


    document.getElement('12t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 12) {

    document.getElementById('12t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('12t').style.backgroundColor = "#77dd77";

}






if ((new Date().getHours()) === 13) {


    document.getElement('13t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 13) {

    document.getElementById('13t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('13t').style.backgroundColor = "#77dd77";
}


if ((new Date().getHours()) === 14) {


    document.getElement('14t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 14) {

    document.getElementById('14t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('14t').style.backgroundColor = "#77dd77";
}



if ((new Date().getHours()) === 15) {


    document.getElement('15t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 15) {

    document.getElementById('15t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('15t').style.backgroundColor = "#77dd77";
}




if ((new Date().getHours()) === 16) {


    document.getElement('16t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 16) {

    document.getElementById('16t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('16t').style.backgroundColor = "#77dd77";
}


if ((new Date().getHours()) === 17) {


    document.getElement('17t').style.backgroundColor = " #ff6961";

} else if ((new Date().getHours()) > 17) {

    document.getElementById('17t').style.backgroundColor = "#d3d3d3";

} else {

    document.getElementById('17t').style.backgroundColor = "#77dd77";
}
