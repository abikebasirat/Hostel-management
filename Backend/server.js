require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/DBConnect");
const errorHandler = require("./middleware/errerMiddleware");
const adminRoute = require("./routes/adminRoutes");
const roomRoute = require("./routes/roomRoute");
const studentRoute = require("./routes/studentRoute");


const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieparser());
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();

})

app.use(
    cors({
        origin: ["http://localhost:5173"],
        credentials:true,
        optionsSuccessStatus: 200,
        methods: "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
    })
)

app.get("/", (req,res) =>{
    res.send("Hello Boss")
})

app.use("/admin", adminRoute);
app.use("/rooms", roomRoute);
app.use("/student", studentRoute )

connectDB();
app.use(errorHandler)
mongoose.connection.once("open", () => {
    console.log("Database Connected!");
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
})

