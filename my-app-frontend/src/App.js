import React, {useState, useEffect} from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import StudentList from "./StudentList"
import Student from "./Student"
import NewStudentForm from "./NewStudentForm"
import StudentGoals from "./StudentGoals"
import NewGoalForm from "./NewGoalForm"
import EditStudentGoals from "./EditStudentGoals"



function App() {
  const [students, setStudents]=useState([])
  useEffect(()=>{
    fetch ("http://localhost:9292/students")
      .then(r=>r.json())
      .then(students=>setStudents(students)
    );
  }, [])

  // const handleAddGoals = (newGoal) => {
    // fetch ("http://localhost:9292/goals",{
    //         method:"POST",
    //         headers:{
    //          "Content-Type": "application/json", 
    //          },
    //         body: JSON.stringify(newGoal)
    //     })
    //         .then(r=>r.json())
    //         .then (data => {
  //   
  //             const thatStudent = students.find(s => s.id === newGoal.owner_id)
  //             const newGoals = [...thatStudent.goals, newGoal]
  //             const updatedStudent = {...thatStudent, goals: newGoals}
  //             const updatedStudents = students.map(s => s.id === thatStudent.id? updatedStudent : s)
  //             setStudents(updatedStudents)
  //             navigate(`/students/${newGoal.id}`)
  // };
  

 
  
 
    return (
      <>
        <div>
         <NavBar />
        </div>

       <Routes>
          <Route exact path= "/" element={<Home />} />
          <Route exact path= "/students" element={<StudentList students={students} setStudents={setStudents}/>} />
          <Route path= "/students/new" element ={<NewStudentForm />} />
          <Route path= "/students/:id" element ={<Student students={students} setStudents={setStudents} />} />
          <Route path= "/goals" element={<StudentGoals />} />
          <Route path= "/goals/new" element = {<NewGoalForm />} />
          {/* <Route path= "/goals/:id" element = {<EditStudentGoals />} /> */}
        </Routes> 
     </>
    );
}

export default App;
