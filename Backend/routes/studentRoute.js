const express = require("express")
const { registerStudent,getAllStudents, getStudent, updateStudentProfile, changeStudentRoom, updateCheckInStudents, deleteStudent} = require("../controllers/studentController"); 
const router = express.Router();

router.post("/register-student", registerStudent )
router.get("/", getAllStudents)
router.get("/:_id", getStudent);
router.patch("/:_id", updateStudentProfile);
router.post("/change-room", changeStudentRoom);
router.post("/check-in-student", updateCheckInStudents);
router.delete("/delete-student/:_Id", deleteStudent);


module.exports = router;
