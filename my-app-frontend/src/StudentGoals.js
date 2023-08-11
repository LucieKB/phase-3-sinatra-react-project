import React, {useState} from "react";
import { Link } from "react-router-dom";
import EditStudentGoals from "./EditStudentGoals";




function StudentGoals({goals, onDeleteGoal, onUpdateGoal}){ 
 const [isUpdating, setIsUpdating]=useState(false)
 const [onHover, setOnHover]=useState(false)  


    const handleDeleteGoal = (goal) => { 
        fetch(`http://localhost:9292/goals/${goal.id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then((deletedGoal) => onDeleteGoal(deletedGoal));
    }

   
 
    const goalsToDisplay =  goals.map((goal, index) => {
        console.log(goal)
        const date = goal.deadline.includes('T')?  (goal.deadline.split('T')[0]) : (goal.deadline)
        return (
            <div key={goal.id}>
                <h3>➢ <u>Goal #{index+1}</u>:</h3>
                
                        <>
                            <ul>
                                <u>Category :</u> {goal.category}
                                <br />
                                <u>Description :</u> {goal.description? (goal.description) : (<span>You can add a description by clicking the button <em>"Update My Goal"</em></span>)}
                                <br />
                                <u>Deadline :</u> {date}
                                <br />
                                <u>Achieved :</u> 
                                <button className="Not-Achieved-Btn" onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
                                     {onHover ? "📈 Keep working hard, you can do it !" : "✅ I'm not done yet, still working on it !"} 
                                     </button>
                                <button className="Achieved-Btn" onClick={() => handleDeleteGoal(goal)}>❌ I'm done, delete this goal ! </button>
                                <br />
                            </ul>
                                <button className="Update-Btn" onClick={() => setIsUpdating(isUpdating => (!isUpdating))}> Update Goal #{index+1}</button>
                                {isUpdating?
                                <EditStudentGoals goal={goal} onUpdateGoal={onUpdateGoal} setIsUpdating={setIsUpdating}/> :
                                null}
                            <hr />
                        </>
                  
            </div>
        )
    });

        
    return (
        <div>
            {goalsToDisplay}
               
        </div>
    )
}

export default StudentGoals;