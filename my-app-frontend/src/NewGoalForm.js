import React, {useState} from "react";


function NewGoalForm({onAddNewGoal, student, id}){
    const [isDisabled, setIsDisabled] = useState(false)
    const [checked, setIsChecked] = useState(false)
    
    const [formData, setFormData]=useState({
        category : (""),
        description : (""),
        deadline : (""),
        achieved: (false),
      })

console.log(student)

    const categories = ["Ready", "Respectful", "Responsible", "Academic", "Other"]

    function handleChangeCategory(e){
        if(e.target.checked){
            setIsChecked(checked => !checked)
            setFormData({...formData, category:e.target.value})
        }
        setIsDisabled(true);
    }

    function handleSubmit(e){
        e.preventDefault()
        setFormData({...formData})
    
        fetch ("http://localhost:9292/goals",{
            method:"POST",
            headers:{
             "Content-Type": "application/json", 
             },
             body: JSON.stringify(
                 {category: formData.category,
                 description: formData.description,
                 deadline: formData.deadline,
                 achieved: formData.achieved,
                 student_id: id}
                 )
        })
        .then(r=>r.json())
        .then (newGoal=>onAddNewGoal(newGoal));


        setFormData({
            category : (""),
            description : (""),
            deadline : (""),
            achieved: (false),
        });
    }



    return(
        <form onSubmit={handleSubmit}>
            <ul className = "category-list">
            {categories.map((catname, {checked})=>{
                return(
                <div key={catname}>
                    <label>
                        <input
                        type="checkbox"
                        name={catname}
                        value={formData.category}
                        checked={checked}
                        onChange={handleChangeCategory}
                        />{catname}
                    </label>
                    </div>
                )
            })}
        <br />
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