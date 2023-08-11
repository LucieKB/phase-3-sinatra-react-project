import React from "react";
import { Link } from "react-router-dom";
import "./StudentLink.css";

function StudentLink({student, onDeleteStudent}){

    const handleDeleteStudent = () => {
        fetch(`http://localhost:9292/students/${student.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then((deletedStudent) => onDeleteStudent(deletedStudent));
    }

    return (
        <ul className="Container">
            <li className="flex flex1">
              <Link to ={`/students/${student.id}`}>
              <span><h3>{student.first_name + " " + student.last_name}</h3></span>
              </Link>
              <span>Current goals : {student.goals.length}</span>
            </li>

            <li className="flex flex2">
              <button className="Btn-Delete" onClick={handleDeleteStudent}> Delete {student.first_name}'s Card</button>
            </li>
        </ul>   
    )
}

export default StudentLink