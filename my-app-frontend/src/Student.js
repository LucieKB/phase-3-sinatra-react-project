import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import StudentGoals from "./StudentGoals";
import NewGoalForm from "./NewGoalForm";


function Student({students, setStudents}){
    const [student, setStudent]= useState({ 
        goals: []
    })
    const [showForm, setShowForm] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        const selectedStudent = students.find(student => student.id === parseInt(id))
           if(selectedStudent){
            setStudent(selectedStudent)
           } 
    }, [])


    const handleUpdateGoal = (thisUpdatedGoal) => {
        const updatedGoals = student.goals.map((goal) => {
            if (goal.id === thisUpdatedGoal.id) {
                return thisUpdatedGoal;
            }else{
                return goal;
            }
        });
        const updatedStudent = {...student, goals: updatedGoals}
        setStudent(updatedStudent)
    }
    

    const handleDeleteGoal= (deletedGoal) => {
        const updatedGoals = student.goals.filter((goal) => goal.id !== deletedGoal.id);
        const studentDeletedGoal = {...student, goals: updatedGoals}
        setStudent(studentDeletedGoal);
        const studentsDeletedGoal = students.map(s => s.id === studentDeletedGoal.id ? studentDeletedGoal : s)
        setStudents(studentsDeletedGoal)
    } 

    const handleAddGoals = (newGoal) => {
        console.log(newGoal)
        const studentNewGoals=[...student.goals, newGoal]
        console.log(studentNewGoals)
        const copyStudent={...student, goals: studentNewGoals}
        setStudent(copyStudent)
        console.log(copyStudent)
        const copyStudents= students.map(s => s.id === copyStudent.id ? copyStudent : s)
        setStudents(copyStudents)
    }

    const showGoalForm = () => {setShowForm(!showForm)}


    return (

        <>
        <div className="Header">
        <h2 >{student.first_name}'s Goals</h2>
            {showForm?
                (<div>
                <NewGoalForm student={student} onAddNewGoal={handleAddGoals} id={student.id} setShowForm={setShowForm} showForm={showForm}/>
                </div>
                ):(
                <button onClick={showGoalForm}> Add New Goal </button>)
            }
             
        </div>
        <br />   
        
        <div>   
            <br />
                <StudentGoals 
                    goals={student.goals} 
                    onUpdateGoal={handleUpdateGoal}
                    onDeleteGoal={handleDeleteGoal}
                />
                   
            <br />   
        </div>
        </>
    )     
}

export default Student;