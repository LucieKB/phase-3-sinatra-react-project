import React, {useState, useEffect} from "react";
import StudentLink from "./StudentLink";
import NewStudentForm from "./NewStudentForm";


function StudentList(){
    const [students, setStudents]=useState([])
    const [studentToggleForm, setStudentToggleForm]=useState(false)

    useEffect(()=>{
        fetch ("http://localhost:9292/students")
        .then(r=>r.json())
        .then(students=>setStudents(students));
      }, [])

      function handleDeleteStudent(deletedStudent) {
        const updatedStudents = students.filter((student) => student.id !== deletedStudent.id);
        setStudents(updatedStudents);
      } 
      
      function handleAddStudent(newStudent){
        setStudents([...students, newStudent]);
        }

   

      const studentLinks = students.map( student => <StudentLink key={student.id} student={student} onDeleteStudent={handleDeleteStudent} onAddStudent={handleAddStudent}/>)

  

return(
    <div>
    <br />
    <NewStudentForm onAddStudent={handleAddStudent}/>
    <br />
    <div>
        <ul>
             {studentLinks}
        </ul> 
    </div>
    </div>

   
   
   
)

}
export default StudentList;