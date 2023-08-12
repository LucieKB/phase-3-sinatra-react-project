import React, {useState, useEffect} from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import StudentList from "./StudentList"
import Student from "./Student"
import NewStudentForm from "./NewStudentForm"
import StudentGoals from "./StudentGoals"
import NewGoalForm from "./NewGoalForm"




function App() {
  const [students, setStudents]=useState([])
  useEffect(()=>{
    fetch ("http://localhost:9292/students")
      .then(r=>r.json())
      .then(students=>setStudents(students)
    );
  }, [])


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
        </Routes> 
     </>
    );
}

export default App;
