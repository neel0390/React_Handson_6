import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Students from "./Students";
import Contact from "./Contact";
import StudentsDetails from "./StudentsDetails";
import { useState } from "react";

const initialStudentState = [
  {
    id: 1,
    Name: "John",
    Age: 26,
    Course: "MERN",
    Batch: "October",
  },
  {
    id: 2,
    Name: "Doe",
    Age: 25,
    Course: "MERN",
    Batch: "November",
  },
  {
    id: 3,
    Name: "Biden",
    Age: 25,
    Course: "MERN",
    Batch: "September",
  },
  {
    id: 4,
    Name: "Barar",
    Age: 22,
    Course: "MERN",
    Batch: "September",
  },
  {
    id: 5,
    Name: "Christ",
    Age: 23,
    Course: "MERN",
    Batch: "October",
  },
  {
    id: 6,
    Name: "Elent",
    Age: 24,
    Course: "MERN",
    Batch: "November",
  },
];

const RouterFile = () => {
  const [studentDetails, setStudentDetails] = useState(initialStudentState);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students studentDetails={studentDetails} setStudentDetails={setStudentDetails} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/studentsDetails" element={<StudentsDetails studentDetails={studentDetails} setStudentDetails={setStudentDetails} />} />
      <Route
        path="/studentsDetails/:id"
        element={
          <StudentsDetails //: indicate whatever we write after : its a variable
            studentDetails={studentDetails}
            setStudentDetails={setStudentDetails}
          />
        }
      />
    </Routes>
  );
};

export default RouterFile;
