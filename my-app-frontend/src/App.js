import React from "react"
import { Routes, Route} from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import StudentList from "./StudentList"
import Student from "./Student"
import NewStudentForm from "./NewStudentForm"
import StudentGoals from "./StudentGoals"


function App() {



  return (
    <>
    <div>
      <NavBar />
    </div>

      <Routes>
        <Route exact path= "/" element={<Home />} />
        <Route exact path= "/students" element={<StudentList />} />
        <Route path= "/students/new" element ={<NewStudentForm />} />
        <Route path= "/students/:id" element ={<Student />} />
        <Route path= "/goals" element={<StudentGoals />} />
      </Routes> 
    </>
  );
}

export default App;
