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

for(let val of plans){
    document.getElementById("result").innerHTML += `
    <div>
    <div class="card" style="width: 18rem;">
    <img src="${val.pic}" class="card-img-top" alt="${val.title}">
    <div class="card-body">
     <h5 class="card-title">${val.title}</h5>
     <p>${val.description}</p>
     <hr>
     <p class="priority">Priority Level:</p>
     <p class="btn btn-primary priorityBtn">${val.priority}</p>
     <p>Dead Line:</p>
     <hr>
     <p class="btn btn-danger likeBtn">Delete</p>
     <p class="btn btn-success showMore">Done</p>
    </div>
    </div>
    </div>`;
}

let btns = document.getElementsByClassName("priorityBtn");

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        plans[i].priority++;
        document.getElementsByClassName("priorityBtn")[i].innerHTML = plans[i].priority;
    })
}


