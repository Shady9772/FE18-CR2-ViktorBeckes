let plans = `[{
    "title" : "Take the dog for a walk",
    "description" : "Every day, 2 times, morning and afternoon",
    
    "priority" : "0",
    "pic" : "Images/walk.jpg"
},{
    "title" : "buy groceries",
    "description" : "Running outta food!",
    
    "priority" : "0",
    "pic" : "Images/groceries.jpg"
},{
    "title" : "Find new job",
    "description" : "Cant keep working as a hitman",
    
    "priority" : "0",
    "pic" : "Images/job.jpg"
},{
    "title" : "Do Code Review 2",
    "description" : "For the future job",
    
    "priority" : "0",
    "pic" : "Images/code.jpg"
},{
    "title" : "Kill Joe",
    "description" : "Next hit",
    
    "priority" : "0",
    "pic" : "Images/murder.jpg"
},{
    "title" : "Hide Body",
    "description" : "Joes pretty heavy, have to cremate him",
    
    "priority" : "0",
    "pic" : "Images/dead.jpg"
},{
    "title" : "Hide Gun",
    "description" : "hide evidence",
    
    "priority" : "0",
    "pic" : "Images/gun.jpg"
},{
    "title" : "Leave The Country",
    "description" : "Run away after becoming a FSDeveloper",
    
    "priority" : "0",
    "pic" : "Images/border.jpg"
},{
    "title" : "Cheat On Wife",
    "description" : "getting rid of her nagging ass",
    
    "priority" : "0",
    "pic" : "Images/cheat.jpg"
}]`;

plans = JSON.parse(plans);

for(let o of plans){
    document.getElementById("result").innerHTML += `
    <div class="add">
    <div class=" border border-dark card">
    <div class="spacer"></div>
    <div class="taskbtn">
    <p class="btn btn-primary">Task</p>
    </div>
    <div class="container">
    <img src="${o.pic}" class=" border border-dark card-img-top cardpic" alt="${o.title}">
    </div>
    <div class="card-body">
     <h5 class="card-title text-center">${o.title}</h5>
     <p class="text-center">${o.description}</p>
     <hr>
    <div class="propertylevel">
        <p class="priority fs-4">Priority Level: <span class="btn btn-success priorityBtn">${o.priority}</span</p>
        <div>
        </div>
    </div>
     <p class="fs-5 deadline">DeadLine: 11.02.2023 18:00pm</p>
     <hr>
     <div class="text-center">
     <p class="btn btn-danger delete">Delete</p>
     <p class="btn btn-success">Done</p>
     </div>
    </div>
    </div>
    </div>`;
}

let btns = document.getElementsByClassName("priorityBtn");

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        plans[i].priority++;
        document.getElementsByClassName("priorityBtn")[i].innerHTML = plans[i].priority;
        if (plans[i].priority < 2){
            console.log("Green");   
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-warning");
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-danger");
            document.getElementsByClassName("priorityBtn")[i].classList.add("btn-success");
        }else if (plans[i].priority < 4) {
            console.log("yellow"); 
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-success");
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-danger");
            document.getElementsByClassName("priorityBtn")[i].classList.add("btn-warning");
        }else if (plans[i].priority < 6) {
            console.log("red"); 
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-success");
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-warning");
             document.getElementsByClassName("priorityBtn")[i].classList.add("btn-danger");
             document.getElementsByClassName("card")[i].style.color = "red";
        }else if (plans[i].priority >= 6) {
            console.log("warrning"); 
            document.getElementsByClassName("card")[i].style.backgroundColor = "red";
            document.getElementsByClassName("card")[i].style.color = "black";
        }
    })
}
