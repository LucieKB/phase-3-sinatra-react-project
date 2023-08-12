import React, { useState } from "react";

function EditStudentGoals({goal, onUpdateGoal, setIsUpdating}){
    const [goalValues, setGoalValues] = useState({
            category : goal.category,
            description : goal.description,
            deadline : goal.deadline,
            achieved: goal.achieved
        })
   
   
    const categories = ["Ready", "Respectful", "Responsible", "Academic", "Other"];


    const handleChangeCategory = (e) => {
        if(e.target.checked)
        {  
            setGoalValues({...goalValues, category: e.target.value})
        }
    }

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        setGoalValues({...goalValues, student_id: goal.student_id})

        fetch(`http://localhost:9292/goals/${goal.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category: goalValues.category,
                description: goalValues.description,
                deadline: goalValues.deadline,
                achieved: goalValues.achieved
            }),
        })
            .then((r) => r.json())
            .then((updatedGoal) => onUpdateGoal(updatedGoal));
        
        setGoalValues({
            category : (" "),
            description : (" "),
            deadline : (" "),
            achieved: (false),
            });

        setIsUpdating((isUpdating) => !isUpdating)
        
        }    
   
    
    return(

        <div>
            <form onSubmit={handleSubmitUpdate}>
                <ul className = "category-list">
                     {categories.map((catname)=>{
                        return(
                            <div key={catname}>
                                <label>
                                    <input
                                    type="radio"
                                    name="category-name"
                                    value={catname}
                                    checked={goalValues.category === catname}
                                    onChange={handleChangeCategory}
                                    />
                                    {catname}
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
                        onChange={(e)=>setGoalValues({...goalValues, description:e.target.value})}
                    />
                <br />

                <h4><u>Updated Deadline :</u></h4>
                    <input
                        type="date"
                        name="deadline"
                        value={goalValues.deadline}
                        placeholder={goal.deadline}
                        onChange={(e)=>setGoalValues({...goalValues, deadline:e.target.value})}
                />
                <br />

                <h4><u>Achieved :</u></h4> 
                <p>❌  Not yet, I am still working on it !</p>
                

                <button>Submit</button>

            </form>
        </div>
    );
};

export default EditStudentGoals;