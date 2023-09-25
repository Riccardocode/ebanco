

function displayGoals(option) {
    let goalReached = 0;
  goalSection.innerHTML = "";

  for (goal of goalsArray) {
    if(option === 'all' || option === goal.riched){
          const newGoal = goalTemplate.cloneNode(true);
      newGoal.querySelector("h3").innerText = goal.name;
      newGoal.querySelector(".current-money").innerText = "$" + goal.current;
      newGoal.querySelector(".goal-money").innerText = "$" + goal.goal;
      newGoal.querySelector("progress").max = goal.goal;
      newGoal.querySelector("progress").value = goal.current;
      newGoal.style.backgroundImage = `url(${goal.picture})`;
      //To complete the card and create the filters
      goalSection.append(newGoal);
    }
    goal.riched ? goalReached++ :"";
    console.log(goalReached);
    
  }
  allCount.innerText = goalsArray.length;
  newCount.innerText =  goalsArray.length - goalReached;
  reachedCount.innerText = goalReached;
}

// get the reference to the goal section
const goalSection = document.querySelector("#goalsSelection");

// get the reference to the goal template
const goalTemplate = document.querySelector("article");

//remove th goal template
goalTemplate.remove();

//add the event listener to display all goals
const allBtn = document.querySelector("#all-btn")
allBtn.addEventListener("click", ()=>{
    displayGoals('all');
    allBtn.classList.add('selected');
    newBtn.classList.remove('selected');
    reachedBtn.classList.remove('selected');
});

//add the event listener to display unreached goals
const newBtn=document.querySelector('#new-btn')
newBtn.addEventListener('click',()=>{
    displayGoals(false);
    allBtn.classList.remove('selected');
    newBtn.classList.add('selected');
    reachedBtn.classList.remove('selected');
});

//add the event listener to display reached goals
const reachedBtn=document.querySelector('#reached-btn')
reachedBtn.addEventListener('click',()=>{
    displayGoals(true);
    allBtn.classList.remove('selected');
    newBtn.classList.remove('selected');
    reachedBtn.classList.add('selected');
});

// get reference for the numbers to show next to the text for the buttons
const allCount = document.querySelector("#allCount");
const newCount = document.querySelector('#newCount');
const reachedCount = document.querySelector('#reachedCount');



displayGoals('all');
