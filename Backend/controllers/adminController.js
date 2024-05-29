const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs")
const Admin = require("../models/AdminModel");
const  generateToken  = require("../utils/index");

const register = asyncHandler(async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    !fullname ||
      !email ||
        !password &&
        ( (() => {
          res.status(400);
          throw new Error("Please fill all the required fields");
        })());

    password.lenght < 6 &&
      (() => {
        res.status(400);
        throw new Error("Password must be up to 6 characters!");
      })();

      // check if user  exist
      const adminExists = await Admin.findOne({email})

      adminExists && (() => {res.status(400); throw new Error("Email already exists!")})();

      // create new admin

      const admin = await Admin.create({
        fullname,
        email,
        password
      })

      const token = generateToken(admin._id);

      //send http-only cookie
      res.cookie("token", token, {
        path: "/" ,
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),// 1 day
        sameSite: "none",
        secure: true
      });

      if(admin) {
        const {_id, fullname, email, password, roles} = admin;

        res.status(201).json({
          _id,
          fullname,
          email,
          password,
          roles, 
          token
        });
      } else {
        res.status(400);
        throw new Error("Invalid Data");
      }


  } catch (error) {
    console.error(error.message)
    res.status(500).send("server error")
  }
});

    // admin login
const login = asyncHandler(async(req, res) => {
  try{
    const {email, password} = req.body;

    // check if email exists
    let admin = await Admin.findOne({email});
    if(!admin){

      return res.status(400).json({"message": "Admin not found!"});
    }

    // check password
    const isMatch = await bcrypt.compare(password, admin.password);

    if(!isMatch){
      return res.status(400).json({"message": "Invalid Credientials!"})
    }

    const token = generateToken(admin._id);

    if(admin && isMatch) {

      res.cookie("token", token, {
        path: "/" ,
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),// 1 day
        sameSite: "none",
        secure: true
      });

      const {_id, fullname, email, role} = admin;

      // send HTTP-only cookie
      res.status(201).json({
        _id, fullname, email, role, token
      })
    } else{
      res.status(500);
      throw new Error("something went wrong!")
    }

  } catch (error){
console.error(error.message);
res.status(500).send("Server error")
  }
})

//delete an admin

const deleteAdmin = asyncHandler(async(req, res) => {
  try {
      const {adminId} = req.params
      const admin = Admin.findById(adminId);
      if(!admin) {
          res.status(404);
          throw new Error("User not found")
      }

      await admin.deleteOne();
      res.status(200).json({
          message: "Admin data deleted successfully"
      })
  } catch (error) {
      console.error(error.message);
      res.status(500).send("server error")
  }
})


// Get details of a single admin

const getAdmin = asyncHandler(async(req, res) => {
  try {
    const {adminId} = req.params;

    const admin = await Admin.findById(adminId);
    if(admin){
      const {_id, fullname, email, role} = admin;

      res.status(200).json({_id, fullname, email, role})
    } else {
      res.status(404).json({"message": "Admin not found"})
    }
  } catch (error){
    console.error(error.message);
    res.status(500).send("server error");
  }
});

 // Get details of all admins

 const getAdmins = asyncHandler(async(req, res) =>{
  // sort in eni ti o koko register lo ma show last eni to ba register last lo ma show firt
  // passwor o ma select awon password wa fun wa 
  // password wa mean pe ki gbogbo ikan to ku show ki password wa ko ma show 
  //password nikan ko ma show
  const admins = await Admin.find().sort("-createdAt").select("-password");
  if(!admins){
    res.status(500)
    throw new Error("something went wrong")
  }
  res.status(200).json(admins)
 });




 const updateAdmin = asyncHandler(async (req, res) => {

  const { adminId } = req.params;

    const admin = await Admin.findById(adminId).select("-password");

    if (admin) {
      if (req.body?.fullname) admin.fullname = req.body.fullname;
      if (req.body?.email) admin.email = req.body.email;
      if (req.body?.role) admin.role = req.body.role;
  
      const result = await admin.save();

      res.json(result)

}

})


// logoutAdmin

const logoutAdmin = asyncHandler(async(req, res) => {
  // emty string delete cookie for my postman 
  res.cookie("token", "", {
    path: "/", 
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true
});

return res.status(200).json({message: "Logout Succefully"})
  })


module.exports = {register, login, getAdmin, deleteAdmin, getAdmins, updateAdmin, logoutAdmin};