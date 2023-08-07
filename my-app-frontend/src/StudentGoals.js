import React, {useState} from "react";


function StudentGoals({goals}){
   
const [goalAchieved, setGoalAchieved]=useState(false)
   
console.log(goals)

function handleAchievedGoal(){
    console.log("achieved")
    setGoalAchieved(true)
}

const goalsToDisplay = goals.map((goal, index) => {
    return(
    <div key={goal.id}>
        <h4>Goal #{index+1}:</h4>
    
        <ul> <u>Category :</u> {goal.category}
             <br />
             <u>Description :</u> {goal.description? (goal.description) : ("You can add a description by clicking the button" + "Update My Goal")}
             <br />
             <u>Deadline :</u> {goal.deadline}
             <br />
             <u>Achieved :</u> <button onClick={handleAchievedGoal}>{goalAchieved? ("✅") : ("❌")}</button>
             <br />
        </ul>
        <button> Update My Goal </button>
    </div>
    );
});





    return(
        <div>
            {goalsToDisplay}
        </div>
    )
}

export default StudentGoals;