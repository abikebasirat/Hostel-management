const express = require("express");
const {createNewRoom, getAllRoom, getRoom, updateRoom, deleteRoom  } = require("../controllers/roomController");
const router = express.Router();


router.post("/createNewRoom", createNewRoom)
router.get("/get-all-rooms", getAllRoom)
router.get("/get-single-room/:roomId", getRoom);
router.patch("/update-room/:roomId", updateRoom);
router.delete("/delete-room/:roomId", deleteRoom);

module.exports = router;