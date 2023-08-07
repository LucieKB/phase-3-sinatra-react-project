import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import StudentGoals from "./StudentGoals";


function Student(){
    const [student, setStudent]= useState({ 
        goals: []
    })
    const [goalToggleForm, setGoalToggleForm]=useState(false)
    const params = useParams()


    useEffect(()=>{
        fetch (`http://localhost:9292/students/${params.id}`)
        .then(r=>r.json())
        .then(data => {
            console.log(data);
            setStudent(data)});
      }, [])

    // console.log(student.goals)  
    // const goals = student.goals.map(goal => <StudentGoals key={goal.id} goal={goal} />);


    return(
        <div>
            <br />
            <h2>{student.first_name}'s Goals</h2>
            <hr />
            <h3>Goals</h3>
            <br />
            <StudentGoals goals={student.goals} />
            <br />
        </div>
    )

      
}

export default Student;