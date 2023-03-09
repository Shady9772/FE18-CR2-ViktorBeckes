let plans = `[{ 
    "title" : "Take the dog for a walk",
    "about" : "Every day, 2 times, morning and afternoon",
    "priority" : "0",
    "picture" : "Images/walk.jpg"
},{
    "title" : "buy groceries",
    "about" : "Running outta food!",
    "priority" : "0",
    "picture" : "Images/groceries.jpg"
},{
    "title" : "Find new job",
    "about" : "Cant keep working as a hitman",
    "priority" : "0",
    "picture" : "Images/job.jpg"
},{
    "title" : "Do Code Review 2",
    "about" : "For the future job",
    "priority" : "0",
    "picture" : "Images/code.jpg"
},{
    "title" : "Pay Bills",
    "about" : "electricity and phone bill",
    "priority" : "0",
    "picture" : "Images/bills.jpg"
},{
    "title" : "Make Portfolio",
    "about" : "future job hunt",
    "priority" : "0",
    "picture" : "Images/portfolio.jpg"
},{
    "title" : "Check on parents",
    "about" : "make sure they okay",
    "priority" : "0",
    "picture" : "Images/parents.jpg"
},{
    "title" : "Book Holiday",
    "about" : "make sure to book holidays",
    "priority" : "0",
    "picture" : "Images/holiday.jpg"
},{
    "title" : "Book a flight",
    "about" : "book a plane for the holiday",
    "priority" : "0",
    "picture" : "Images/plane.jpg"
}]`;

plans = JSON.parse(plans); //converts the PLANS in to a JSON file

for(let o of plans){ //makes a loop that ceartes the cards remplate with bootsstrap
    document.getElementById("result").innerHTML += `
    <div>
      <div class="shadow-lg border border-dark p-3 mb-5 card">
            <div class="spacer"></div>
            <div class="taskbtn">
                <p class="btn btn-primary">Task</p>
                <i class="pull-right fa fa-bookmark"></i>
                <i class="pull-right fa fa-ellipsis-v"></i>
    </div>
    <div class="container">
    <img src="${o.picture}" class=" border border-dark card-img-top cardpic" alt="${o.title}">
    </div>
    <div class="card-body">
     <h5 class="card-title text-center">${o.title}</h5>
     <p class="text-center">${o.about}</p>
     <hr>
    <div class="propertylevel">
        <p class="priority fs-4"><i class="fa fa-exclamation-circle"></i> Priority Level: <span class="btn btn-success priorityBtn">${o.priority}</span</p>
        <div>
        </div>
    </div>
    <p class="fs-5 deadline"><i class="fa fa-calendar"></i> DeadLine: 11.02.2023 18:00pm</p>
    <hr>
    <div class="text-center">
    <p class="btn btn-danger delete">Delete</p>
    <p class="btn btn-success">Done</p>
    </div>
    </div>
    </div>
    </div>
    </div>`;
}

let btns = document.getElementsByClassName("priorityBtn"); //button for importance 
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){ //loop with of statments that increases the number in the button and changes colors
        plans[i].priority++;
        document.getElementsByClassName("priorityBtn")[i].innerHTML = plans[i].priority;
        if (plans[i].priority < 2){
            console.log("Green");   //if the importance button is less than 2 turns green
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-warning"); 
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-danger");
            document.getElementsByClassName("priorityBtn")[i].classList.add("btn-success");
        }else if (plans[i].priority < 4) {   //if the importance button is less than 4 turns yellow
            console.log("yellow"); 
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-success");
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-danger");
            document.getElementsByClassName("priorityBtn")[i].classList.add("btn-warning");
        }else if (plans[i].priority < 6) { //if the importance button is less than 6 turns red
            console.log("red"); 
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-success");
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-warning");
             document.getElementsByClassName("priorityBtn")[i].classList.add("btn-danger");
             document.getElementsByClassName("card")[i].style.color = "red";
        }else if (plans[i].priority >= 6) { //if the importance button is 6 or bigger makes the whole card red
            console.log("warrning"); 
            document.getElementsByClassName("card")[i].style.backgroundColor = "red";
            document.getElementsByClassName("card")[i].style.color = "black";
        }
    })
}
