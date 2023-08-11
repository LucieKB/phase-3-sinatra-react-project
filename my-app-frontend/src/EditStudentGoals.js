import React, { useState } from "react";

function EditStudentGoals({goal, onUpdateGoal, goalAchieved}){
    const [goalValues, setGoalValues] = useState({
            category : goal.category,
            description : goal.description,
            deadline : goal.deadline,
            achieved: goal.achieved
        })
    const [isDisabled, setIsDisabled] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    console.log(goalValues)

const categories = ["Ready", "Respectful", "Responsible", "Academic", "Other"];

    function handleChangeCategory(e){
        if(e.target.checked){
            setIsChecked(!isChecked)
            setGoalValues({...goalValues, category:e.target.value})
        }
        setIsDisabled(true);
    }

    function handleSubmitUpdate(e){
        e.preventDefault();

        fetch(`http://localhost:9292/goals/${goal.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category: goalValues.category,
                description: goalValues.description,
                deadline: goalValues.deadline,
                achieved: goalAchieved
            }),
          })
            .then((r) => r.json())
            .then((updatedGoal) => onUpdateGoal(updatedGoal));

        setIsDisabled(false);
        }    
   
        return(
        <div>
        <form onSubmit={handleSubmitUpdate}>
            
        <ul className = "category-list">
            {categories.map((catname, {checked})=>{
                return(
                <div key={catname}>
                    <label>
                        <input
                        type="checkbox"
                        name={catname}
                        value={goalValues.catname}
                        checked={checked}
                        onChange={handleChangeCategory}
                        />{catname}
                    </label>
                    </div>
                )
            })}
        <br />
        </ul>
        <h4><u>Updated Description :</u></h4>
        <input
        type="text"
        name="description"
        value={goalValues.description}
        placeholder={goal.description}
        onChange={(e)=>setGoalValues({...goalValues, description:e.target.value})}/>
        <br />
        <h4><u>Updated Deadline :</u></h4>
        <input
        type="date"
        name="deadline"
        value={goalValues.deadline}
        placeholder={goal.deadline}
        onChange={(e)=>setGoalValues({...goalValues, deadline:e.target.value})}/>
        <br />
        <h4>Achieved :</h4><u></u>{goalAchieved? ("✅") : ("❌")}
        <br />
        <button>Submit</button>
    </form>
    </div>

        )
}

export default EditStudentGoals;