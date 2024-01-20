// Navbar Menu
const nav = document.querySelector('.nav-items');
const menuBtn = document.querySelector('.menuBtn');
const menuIcon = document.querySelector('#menuIcon');

menuBtn.addEventListener('click',(e) => {
        const visbility = nav.getAttribute("data-visible");
        if (visbility === 'false') {
                nav.setAttribute("data-visible", "true");
                menuIcon.classList.add('fa-times');
                menuIcon.classList.remove('fa-bars');
        } else if(visbility === "true"){
                nav.setAttribute("data-visible", "false");
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-times');
        }
});







//      todo list
var todoText = document.getElementById("todoText");
const submitButton = document.querySelector(".Submit");
const todoContainer = document.getElementById("todoBox")

submitButton.addEventListener("click",function(){
        if(todoText.value === ""){
                alert("Please enter a todo");
        }else if(todoText.value !== ""){
        let li = document.createElement("li");
        li.textContent = todoText.value;
        todoContainer.append(li);
        const removebtn = document.createElement("span");
        removebtn.innerHTML = "\u00d7";
        removebtn.className = "removebtn";
        
        li.append(removebtn);
        
}
todoText.value = "";
saveChanges();
});


todoContainer.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
                saveChanges();
        }else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove(this.parentNode);
                saveChanges();
        }
},false);

function saveChanges(){
       localStorage.setItem("saveChanges", todoContainer.innerHTML);
}
function showChanges(){
        todoContainer.innerHTML = localStorage.getItem("saveChanges");
}

showChanges();