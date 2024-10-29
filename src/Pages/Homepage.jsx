import { useState } from "react";
import Navbar from "../Components/Navbar";
// import testfunction from "../Utilities/PDFGenerator.js";
const Homepage = () => {
  const [studentDetails, setStudentDetails] = useState({
    degree: "",
    academicYear: "",
    branch: "",
    Sname: "",
    year: "",
    Semester: "",
    CRoll: "",
    URoll: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit button clicked");
    sendData();

    // Redirect to the backend endpoint for downloading the PDF
    window.open("http://localhost:3000/download-pdf", "_blank");

    console.log("download success");
  };

  const sendData = async () => {
    try {
      const response = await fetch("http://localhost:3000/Home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentDetails), // Send the object as JSON
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <Navbar />

      {/* Form in landscape view */}
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-8 rounded-lg shadow-lg w-3/4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Student Details Form
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-wrap">
            <div className="w-1/2 p-2">
              <label className="block text-gray-700 mb-2">Degree</label>
              <input
                type="text"
                name="degree"
                value={studentDetails.degree}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter degree(B.Tech/B.SC)"
              />
            </div>
            <div className="w-1/2 p-2">
              <label className="block text-gray-700 mb-2">Academic Year</label>
              <input
                type="text"
                name="academicYear"
                value={studentDetails.academicYear}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter academic year(2024-25)"
              />
            </div>
            <div className="w-1/2 p-2">
              <label className="block text-gray-700 mb-2">Branch</label>
              <input
                type="text"
                name="branch"
                value={studentDetails.branch}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter branch(CSE(specilization if any)Full Form only)"
              />
            </div>
            <div className="w-1/2 p-2">
              <label className="block text-gray-700 mb-2">Student Name</label>
              <input
                type="text"
                name="Sname"
                value={studentDetails.Sname}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter student name"
              />
            </div>
            <div className="w-1/2 p-2">
              <label className="block text-gray-700 mb-2">Year</label>
              <input
                type="text"
                name="year"
                value={studentDetails.year}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter year(1st/2nd/3rd/4th)"
              />
            </div>
            <div className="w-1/2 p-2">
              <label className="block text-gray-700 mb-2">Semester</label>
              <input
                type="text"
                name="Semester"
                value={studentDetails.Semester}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter semester(1/2/3/.../8)"
              />
            </div>
            <div className="w-1/2 p-2">
              <label className="block text-gray-700 mb-2">
                College Roll No.
              </label>
              <input
                type="text"
                name="CRoll"
                value={studentDetails.CRoll}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter college roll number"
              />
            </div>
            <div className="w-1/2 p-2">
              <label className="block text-gray-700 mb-2">
                University Roll No.
              </label>
              <input
                type="text"
                name="URoll"
                value={studentDetails.URoll}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter university roll number"
              />
            </div>
            <div className="w-full p-2">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Submit and Generate PDF
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
