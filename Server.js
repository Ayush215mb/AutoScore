import fs from "fs";
import PDFDocument from "pdfkit";
import { fileURLToPath } from "url";
import express from "express";
import path from "path";
import {
  AddedMarks,
  GenerateRandomNumber,
  Marks,
} from "./src/Utilities/Random_Marks.js";

const app = express();

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());

// const StudentDetails = {
//   degree: "B.Tech",
//   academicYear: "2020-21",
//   branch: "CSE",
//   Sname: "Keshav",
//   year: "1st",
//   Semester: "1",
//   CRoll: "10102121",
//   URoll: "99991111991",
// };
let StudentDetails = {};

// app.get("/", (req, res) => {
//   res.send("homepage");
// });

// Route to handle incoming POST request with object data
app.post("/Home", (req, res) => {
  StudentDetails = req.body;

  // console.log("Received object:", StudentDetails);

  // You can now work with the object data
  // Example: Send a response back
  res.status(200).json({
    message: "Object received successfully",
    // received: StudentDetails,
  });
});

// Route to generate and download the PDF
app.get("/download-pdf", (req, res) => {
  if (Object.keys(StudentDetails).length === 0) {
    console.log("empty object");
  }

  // Passing size to the constructor
  const doc = new PDFDocument({ size: "A4" });

  // // See below for browser usage
  // doc.pipe(fs.createWriteStream(`${StudentDetails.Sname}.pdf`));

  // Set the PDF filename
  const filename = `${StudentDetails.Sname}.pdf`;

  // Set headers to let the browser know it's a file download
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename=${filename}`);

  // Pipe the PDF document to the response
  doc.pipe(res);

  // Add content to the PDF

  // Add an image, constrain it to a given size
  doc.image("./src/assets/LogoNIT.png", 20, 16, {
    fit: [50, 50],
  });

  // Embed a font, set the font size, and render some text
  doc
    .font("Poppins/Poppins-SemiBold.ttf")
    .fontSize(16)
    .text("Narula Institue of Technology", 40, 20, {
      align: "center",
    });

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(7)
    .moveDown(0.2)
    .text(
      "81, Nilgunj Rd, Jagarata Pally, Deshpriya Nagar, Agarpara, Kolkata, West Bengal 700109",
      {
        align: "center",
      }
    );

  doc
    .font("Poppins/Poppins-SemiBold.ttf")
    .fontSize(10)

    .text("An Autonomous Institute", {
      align: "center",
    });

  doc.fontSize(10).text("Affiliated to", {
    align: "center",
  });

  doc
    .fontSize(8)

    .text("MAULANA ABUL KALAM AZAD UNIVERSITY OF TECHNOLOGY, WEST BENGAL", {
      align: "center",
    });

  doc
    .fontSize(8)
    .text("(Formerly known as West Bengal University of Technology)", {
      align: "center",
    });

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(7)
    .text("NH-12(OLD NH-34), HARINGHATA, SIMHAT NADIA, PIN - 741249", {
      align: "center",
    });

  doc
    .font("Poppins/Poppins-SemiBold.ttf")
    .moveDown(1.7)
    .fontSize(15)
    .text("PROVISIONAL GRADE CARD", {
      align: "center",
    });

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("Examination", 25, 180);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("Branch", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("Name", 25);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("College Roll No.", 25);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(
      `${StudentDetails.degree} HELD IN ${StudentDetails.academicYear}`,
      120,
      180
    );

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(StudentDetails.branch, 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(StudentDetails.Sname, 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(StudentDetails.CRoll, 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(
      `Year   ${StudentDetails.year}    Semester   ${StudentDetails.Semester}`,
      400,
      210
    );

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("University Registration No.", 250);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(
      `${StudentDetails.URoll} of ${StudentDetails.academicYear}`,
      400,
      225,
      {
        lineBreak: false,
      }
    );

  //SUBJECT CODE
  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("Paper Code", 25, 260);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("AM101", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("CH(AM)101", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("HU101", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("HU102", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("HU103", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("M(AM)101", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("AM191", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("CH(AM)191", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("HU191", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("ME(AM)191", 25);

  //SUBJECT NAMES
  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("Paper Name", 160, 260);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("PROGRAMMING FOR PROBLEM SOLVING", 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("ENGINEERING CHEMISTRY", 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("PROFESSIONAL COMMUNICATION", 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("VALUES AND ETHICS ", 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(" CONSTITUTION OF INDIA", 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("ENGINEERING MATHEMATICS - I ", 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("PROGRAMMING FOR PROBLEM SOLVING LAB ", 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("ENGINEERING CHEMISTRY LAB ", 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("PROFESSIONAL COMMUNICATION LAB ", 120);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("WORKSHOP AND MANUFACTURING PRACTICES LAB", 120);

  //Paper type
  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("Type", 380, 260);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("T", 390);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("T", 390);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("T", 390);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("T", 390);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("T", 390);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("T", 390);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("P", 390);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("P", 390);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("P", 390);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("P", 390);

  //GRADE
  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("Grade", 412, 260);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("E", 422);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("E", 422);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("E", 422);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("E", 422);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("E", 422);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("E", 422);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("E", 422);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("E", 422);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("E", 422);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("E", 422);

  //Point
  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("Point", 450, 260);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(Marks[0], 458);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(Marks[1], 458);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(Marks[2], 458);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(Marks[3], 458);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(Marks[4], 458);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(Marks[5], 458);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(Marks[6], 458);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(Marks[7], 458);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(Marks[8], 458);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(Marks[9], 458);

  //Credit
  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("Credit", 490, 260);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("3.0", 500);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("2.0", 500);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("2.0", 500);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("2.0", 500);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("1.0", 500);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("3.0", 500);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("1.5", 500);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("1.0", 500);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("1.0", 500);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("1.5", 500);

  //Credit Points
  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("Score", 535, 260);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(3.0 * Marks[0], 540, 275);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(2.0 * Marks[1], 540, 290);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(2.0 * Marks[2], 540, 305);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(2.0 * Marks[3], 540, 320);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(1.0 * Marks[4], 540, 335);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(3.0 * Marks[5], 540, 350);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(1.5 * Marks[6], 540, 365);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(1.0 * Marks[7], 540, 380);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(1.0 * Marks[8], 540, 395);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(1.5 * Marks[9], 540, 410);

  //TOTAL

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("Total", 200, 430);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("18", 500, 430);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(AddedMarks, 538, 430);

  //SGPA / CGPA / RESULT
  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("SGPA:", 25, 460);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("SGPA:", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("YGPA:", 25);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("Result", 25);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("ODD SEMESTER - 1", 150, 460);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("ODD SEMESTER - 2", 150);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text(AddedMarks / 18, 300, 460);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(" -", 300);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("Percentage of marks", 250, 490);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("-", 390, 490);

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("PASS", 150, 505);

  //CGPA DGPA
  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("CGPA: ", 500, 470, {
    lineBreak: false,
  });

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("DGPA: ", 500, 490, {
    lineBreak: false,
  });
  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(" -", 540, 470);
  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text(" -", 540, 490);

  //MAR MSR OS SECTION

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("MANDATORY ADDITIONAL ", 30, 540);

  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("REQUIREMENT(MAR)", 30);
  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("MINIMUM SCORE REQUIRED:", 200, 540);
  doc
    .font("Poppins/Poppins-Medium.ttf")
    .fontSize(10)
    .text("OBTAINED SCORE:", 380, 540, {
      lineBreak: false,
    });

  doc.font("Poppins/Poppins-Medium.ttf").fontSize(10).text("STATUS", 500, 540, {
    lineBreak: false,
  });

  // Add an image, constrain it to a given size
  doc.image("./src/assets/COE_sign.png", 380, 600, {
    fit: [200, 200],
  });
  // Finalize PDF file
  doc.end();
});

// Serve the website
app.use(express.static("public"));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
