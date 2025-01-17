import React, {useState} from "react";

function NewStudentForm({onAddStudent, setShowStudentForm, showStudentForm}){
    const [formData, setFormData]=useState({
        first_name : (""),
        last_name : (""),
        grade : ("")
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({...formData})
    

        fetch ("http://localhost:9292/students",{
            method:"POST",
            headers:{
            "Content-Type": "application/json", 
            },
            body: JSON.stringify(formData)
        })
            .then((r)=>r.json())
            .then ((newStudent)=>onAddStudent(newStudent));

        setFormData({
            first_name : (""),
            last_name : (""),
            grade : ("")
        });

        setShowStudentForm(showStudentForm => !showStudentForm)
    }

    return (
        <div>
             <h4>New Student's data</h4>
             <p>Create a student and then click on their name to add goal(s) to their profile</p>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="first_name"
                value={formData.first_name}
                placeholder="First Name ..."
                onChange={(e)=>setFormData({...formData, first_name:e.target.value})}
            />

            <input
                type="text"
                name="last_name"
                value={formData.last_name}
                placeholder="Last Name ..."
                onChange={(e)=>setFormData({...formData, last_name:e.target.value})}
            />

            <input
                type="number"
                pattern="[1-12]*"
                name="grade"
                value={formData.grade}
                placeholder="Grade (1-12) ..."
                onChange={(e)=>setFormData({...formData, grade:e.target.value})}
            />

            <button>Submit</button>
            
        </form>
        </div>
    )
}
export default NewStudentForm;