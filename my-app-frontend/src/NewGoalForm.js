import React, {useState} from "react";


function NewGoalForm({onAddNewGoal, student}){

console.log(student.student_id)

    const [formData, setFormData]=useState({
        category : (""),
        description : (""),
        deadline : (""),
        achieved: ("Not yet")
    })

    const categories = ["Ready", "Respectful", "Responsible", "Academic", "Other"]

    function handleSubmit(e){
        e.preventDefault()
    const goalData = {...formData}
    
    
    fetch ("http://localhost:9292/goals",{
    method:"POST",
    headers:{
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(goalData)
})
  .then((r)=>r.json())
  .then ((newGoal)=>onAddNewGoal(newGoal));


  setFormData({
    category : (""),
    description : (""),
    deadline : (""),
    achieved: ("Not yet")
    });
}


console.log(formData)

    return(
        <form onSubmit={handleSubmit}>
            <ul className = "category-list">
                {categories.map(({category}, index)=>{
                    <ul key={index}>
                        <div>
                            <input
                            type="checkbox"
                            name={category}
                            value={formData.category}
                            onChange={(e)=>setFormData({...formData, category:e.target.value})}
                            />{category}
                        </div>
                        </ul>
                })}
            </ul>
            <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="Briefly describe your goal"
            onChange={(e)=>setFormData({...formData, description:e.target.value})}/>

            <input
            type="date"
            name="deadline"
            value={formData.deadline}
            placeholder="Deadline to reach my goal"
            onChange={(e)=>setFormData({...formData, deadline:e.target.value})}/>

            <button>Submit</button>
        </form>
    )
}
export default NewGoalForm;