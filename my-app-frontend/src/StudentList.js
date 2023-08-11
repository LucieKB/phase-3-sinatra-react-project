import React, {useState} from "react";
import StudentLink from "./StudentLink";
import NewStudentForm from "./NewStudentForm";
import "./StudentList.css"

function StudentList({students, setStudents}){
    const [showStudentForm, setShowStudentForm]=useState(false)

    const handleDeleteStudent= (deletedStudent) => {
      const updatedStudents = students.filter((student) => student.id !== deletedStudent.id);
      setStudents(updatedStudents);
    } 
    
    const handleAddStudent= (newStudent) => {
      setStudents([...students, newStudent]);
    }
   
    const studentLinks = students.map( student => <StudentLink key={student.id} student={student} onDeleteStudent={handleDeleteStudent} onAddStudent={handleAddStudent}/>)

  
  return (
    <div>
        <div className="Header">
        <br />
        <h2> Student's List</h2>
          {showStudentForm?
            (<NewStudentForm onAddStudent={handleAddStudent} setShowStudentForm={setShowStudentForm} showStudentForm={showStudentForm}/>)
            :
            (<button onClick={() => {setShowStudentForm((showStudentForm) => !showStudentForm)}}> Add New Student </button>)
          }
      </div>
      <br />
      
      <div>
          <ul>
              {studentLinks}
          </ul> 
      </div>
    </div>
  );

}

export default StudentList;