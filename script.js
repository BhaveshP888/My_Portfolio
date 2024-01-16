var todoText = document.getElementById("todoText");
const submitButton = document.querySelector(".Submit");
const todoContainer = document.getElementById("todoBox")

submitButton.addEventListener("click",function(){
        if(todoText.value === ""){
                alert("Please enter a todo");
        }else if(todoText.value !== ""){
        let li = document.createElement("li");
        li.textContent = todoText.value;
        li.setAttribute("contenteditable", "true");
        todoContainer.append(li);
        const removebtn = document.createElement("span");
        removebtn.innerHTML = "\u00d7";
        removebtn.className = "removebtn";
        
        li.append(removebtn);
        
}
todoText.value = "";
});


todoContainer.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
        }else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove(this.parentNode);
        }
},false);

