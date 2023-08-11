import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import StudentGoals from "./StudentGoals";
import NewGoalForm from "./NewGoalForm";


function Student(){
    const [student, setStudent]= useState({ 
        goals: []
    })
    const params = useParams()
const goalNumber = student.goals.length

    useEffect(()=>{
        fetch (`http://localhost:9292/students/${params.id}`)
        .then(r=>r.json())
        .then(data => {
            console.log(data);
            setStudent(data)});
      }, [goalNumber])


    function handleUpdateGoal(thisUpdatedGoal){
      const updatedGoals = student.goals.map((goal) => {
        if (goal.id === thisUpdatedGoal.id) {
            return thisUpdatedGoal;
        }else{
            return goal;
        }
        });
        setStudent( ...student, student.goals=[updatedGoals])
      }
    
        function handleAddGoal(newGoal){
        const studentCopy={...student}
         studentCopy.goals.push(newGoal);
        setStudent(studentCopy)

        console.log(studentCopy)
        }

        

    return(
        <div>
            <div>
            <NewGoalForm student={student} onAddNewGoal={handleAddGoal} id={student.id}/>
            </div>
            <br />
            <h2>{student.first_name}'s Goals</h2>
            <hr />
            <h3>Goals</h3>
            <br />
            <StudentGoals 
            goals={student.goals} 
            onUpdateGoal={handleUpdateGoal}
            />
            <br />
            
        </div>
    )

      
}

export default Student;