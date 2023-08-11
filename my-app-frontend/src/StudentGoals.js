import React, {useState} from "react";
import EditStudentGoals from "./EditStudentGoals";



function StudentGoals({goals, onUpdateGoal}){   
const [goalAchieved, setGoalAchieved]=useState(false)
const [isEditing, setIsEditing]=useState(false)
   
console.log(goals)



const goalsToDisplay = goals.map((goal, index) => {
    const date=goal.deadline.split('T')[0]
    return(
    <div key={goal.id}>
        <h4>Goal #{index+1}:</h4>
        {isEditing? (
            <EditStudentGoals
            goal = {goal}
            goalAchieved = {goalAchieved}
            onUpdateGoal={onUpdateGoal} />
        ) : (
            <>
        <ul>
             <u>Category :</u> {goal.category}
             <br />
             <u>Description :</u> {goal.description? (goal.description) : (<span>You can add a description by clicking the button <em>"Update My Goal"</em></span>)}
             <br />
             <u>Deadline :</u> {date}
             <br />
             {/* <u>Achieved :</u> <button onClick={()=> setGoalAchieved(!goalAchieved)}>{goalAchieved? ("✅") : ("❌")}</button> */}
             <br />
        </ul>
        <button onClick={()=> setIsEditing((isEditing)=> !isEditing)}> Update My Goal </button>
        </>
    )}
    </div>
    )});
 





    return(
        <div>
            {goalsToDisplay}
        </div>
    )
}

export default StudentGoals;