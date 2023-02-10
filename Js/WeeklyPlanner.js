let plans = `[{
    "title" : "Take the dog for a walk",
    "description" : "Every day, 2 times, morning and afternoon",
    
    "priority" : "0",
    "pic" : "Images/pl.jpg"
},{
    "title" : "buy groceries",
    "description" : "Running outta food!",
    
    "priority" : "0",
    "pic" : "Images/pl.jpg"
},{
    "title" : "Find new job",
    "description" : "Cant keep working as a hitman",
    
    "priority" : "0",
    "pic" : "Images/pl.jpg"
},{
    "title" : "Do Code Review 2",
    "description" : "For the future job",
    
    "priority" : "0",
    "pic" : "Images/pl.jpg"
},{
    "title" : "Kill Joe",
    "description" : "Next hit",
    
    "priority" : "0",
    "pic" : "Images/pl.jpg"
},{
    "title" : "Hide Body",
    "description" : "Joes pretty heavy, have to cremate him",
    
    "priority" : "0",
    "pic" : "Images/pl.jpg"
},{
    "title" : "Hide Gun",
    "description" : "hide evidence",
    
    "priority" : "0",
    "pic" : "Images/pl.jpg"
},{
    "title" : "Leave The Country",
    "description" : "Run away after becoming a FSDeveloper",
    
    "priority" : "0",
    "pic" : "Images/pl.jpg"
},{
    "title" : "Cheat On Wife",
    "description" : "getting rid of her nagging ass",
    
    "priority" : "0",
    "pic" : "Images/pl.jpg"
}]`;

plans = JSON.parse(plans);

for(let x of plans){
    document.getElementById("result").innerHTML += `
    <div>
    <div class=" border border-dark card" style="width: 25rem;">
    <div>
    <p class="btn btn-primary">Task</p>
    </div>
    <img src="${x.pic}" class="container border border-dark card-img-top" alt="${x.title}">

    <div class="card-body">
     <h5 class="card-title text-center">${x.title}</h5>
     <p class="text-center">${x.description}</p>
     <hr>
    <div class="propertylevel">
        <p class="priority fs-4">Priority Level:<span class="btn btn-primary priorityBtn">${x.priority}</span</p>
        <div>
        </div>
    </div>
     <p class="fs-5">DeadLine: 11.02.2023 18:00pm</p>
     <hr>
     <div class="text-center">
     <p class="btn btn-danger">Delete</p>
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
            document.getElementsByClassName("priorityBtn")[i].style.backgroundColor = "green";
        }else if (plans[i].priority < 4) {
            console.log("yellow"); 
            document.getElementsByClassName("priorityBtn")[i].style.backgroundColor = "yellow";
            document.getElementsByClassName("priorityBtn")[i].style.color = "black";
        }else if (plans[i].priority < 6) {
            console.log("red"); 
            document.getElementsByClassName("priorityBtn")[i].style.backgroundColor = "red";
        }else if (plans[i].priority >= 6) {
            console.log("warrning"); 
            document.getElementsByClassName("card")[i].style.backgroundColor = "red";
        }
    })
}






