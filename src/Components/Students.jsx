import React from "react";
import StudentsDetails from "./StudentsDetails";
import { Link, NavLink } from "react-router-dom";

const Students = ({ studentDetails, setStudentDetails }) => {
  return (
    <div>
      <div className="student_header">
        <span style={{ fontSize: "40px" }}>Students Details</span>
        <button className="btn">
          <NavLink to={"/StudentsDetails"} style={{ textDecoration: "none", color: "black", width: "20px", height: "30px", fontSize: "20px", fontWeight: "bold" }}>
            Add new Student
          </NavLink>
        </button>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
        {studentDetails?.map((data) => {
          //'?.' operator first check whether the studentDetails is defined or not,this ?. is known as optional chaining to first check the variable is defined or not,then it will try to loop through it.
          return (
            <tr>
              <th>{data.Name}</th>
              <th>{data.Age}</th>
              <th>{data.Course}</th>
              <th>{data.Batch}</th>
              <th>
                <Link to={`/studentsDetails/${data.id}`}>Edit</Link>
              </th>{" "}
              {/*when opening studentdetails comp,for knowing that particular student to edit, we are sending id of that student in url,through id we will get that student details by looping through the array of objects*/}
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Students;
