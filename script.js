let button = document.querySelector("button");
let link = document.getElementById("myFavWebsite");

function buttonClick() {
  alert("This is an alert!");
  button.removeEventListener("click", buttonClick);
}

button.addEventListener("click", buttonClick);
link.addEventListener("click", event =>{
    event.preventDefault();
    alert("No youtube for lazy people!");
});