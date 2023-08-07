import React from "react"
import { Routes, Route} from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import StudentList from "./StudentList"
import Student from "./Student"
import NewStudentForm from "./NewStudentForm"
import StudentGoals from "./StudentGoals"


function App() {



// function handleAddStudent(newStudent){
//   setStudents([...students, newStudent]);
// }

// function handleAddGoal(newGoal){
//   const studentCopy={...students}
//   studentCopy.goals.push(newGoal);
//   setStudents(studentCopy)
// }


// function handleDeleteStudent(studentToDelete){
//   const upDatedStudents = students.filter((student)=>student.id !== studentToDelete.id)
//   setStudents(upDatedStudents)
//  }


  return (
    <>
    <div>
      <NavBar />
      
      <br />
      <NewStudentForm />
      <br />
    </div>

      <Routes>
        <Route exact path= "/" element={<Home />} />
        <Route exact path= "/students" element={<StudentList />} />
        <Route path= "/students/:id" element ={<Student />} />
        <Route path= "/student/Goals" element={<StudentGoals />} />
      </Routes> 
    </>
  );
}

export default App;
