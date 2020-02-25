let button = document.querySelector("button");

function buttonClick(){
    alert("This is an alert!");
    button.removeEventListener("click", buttonClick);
}

button.addEventListener("click", buttonClick)