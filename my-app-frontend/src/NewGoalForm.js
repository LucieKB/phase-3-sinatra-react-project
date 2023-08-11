import React, {useState} from "react";
import "./NewGoalForm.css"
import { useNavigate } from "react-router-dom";


function NewGoalForm({onAddNewGoal, id, student, setShowForm, showForm}){
    
    const [formData, setFormData]=useState({
        category : (""),
        description : (""),
        deadline : (""),
        achieved: (false),
      })

    const categories = ["Ready", "Respectful", "Responsible", "Academic", "Other"]
    const navigate = useNavigate()

    const handleChangeCategory = (e) => {
        if(e.target.checked)
            {  
                setFormData({...formData, category:e.target.value})
            }
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({...formData})
        console.log("submitted")
        console.log(id)
        console.log(formData)
        fetch ("http://localhost:9292/goals", {
            method: "POST",
            headers: {
             "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                 category: formData.category,
                 description: formData.description,
                 deadline: formData.deadline,
                 achieved: formData.achieved,
                 student_id: id
            }),
        })
            .then(r=>r.json())
            .then ((newGoal) => {
                onAddNewGoal(newGoal);
                
                setFormData({
                    category : (""),
                    description : (""),
                    deadline : (""),
                    achieved: (false)
                });
            });
            setShowForm((showForm) => !showForm)
            navigate(`/students/${student.id}`);
    }

    
    return (

        <div>
        
            <div className="Header2">
                <h2> {student.first_name}'s New Goal !</h2>
            </div>
            <hr />

        <form className="new-goal-form" onSubmit={handleSubmit}>
            <ul className = "category-list">
                <h5><u> Pick your Goal Category</u></h5>
                {categories.map((catname)=>{
                    return(
                        <div key={catname} className="radio-Btn">
                            <label>
                                <input 
                                type="radio"
                                name="category-name"
                                value={catname}
                                checked={formData.category === catname}
                                onChange={handleChangeCategory}
                                />{catname}
                            </label>
                        </div>
                     )
                })}
            </ul>
            <br />

            <h5><u> Describe your goal and how you will reach it.</u></h5>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    placeholder="Briefly describe your goal"
                    onChange={(e)=>setFormData({...formData, description:e.target.value})}/>
            <br />
            
            <h5><u> When would you like this goal to be achieved by?</u></h5>
                <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    placeholder="Deadline to reach my goal"
                    onChange={(e)=>setFormData({...formData, deadline:e.target.value})}/>
            
            <br />
            <br />

            <button>Submit my New Goal !</button>

        </form>
        </div>
    )
}
export default NewGoalForm;