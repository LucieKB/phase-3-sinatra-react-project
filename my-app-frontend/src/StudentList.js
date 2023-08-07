import React, {useState, useEffect} from "react";
import StudentLink from "./StudentLink"


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

      const studentLink = students.map( student => <StudentLink key={student.id} student={student} onDeleteStudent={handleDeleteStudent} />)

  

return(
   
    <div>
        <ul>
             {studentLink}
        </ul> 
    </div>

   
   
   
)

}
export default StudentList;