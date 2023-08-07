import React from "react"
import { Link } from "react-router-dom"

function StudentLink({student, onDeleteStudent}){

    function handleDeleteStudent(){
        fetch(`http://localhost:9292/students/${student.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then((deletedStudent) => onDeleteStudent(deletedStudent));
      }

    return(
        <div>
            <Link to ={`/students/${student.id}`}>
                <h3>{student.first_name + " " + student.last_name}</h3>  
            </Link>
            <button className="BtnDelete" onClick={handleDeleteStudent}>❌</button>
        </div>
    )
}

export default StudentLink