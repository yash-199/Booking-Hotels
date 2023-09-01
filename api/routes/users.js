import express from "express"
import { updateUser,deleteUser,getUser,getAllUsers } from "../Controllers/user.js";
import { verifyToken,verfiyUser,verfiyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user,your are logged in!")
// });

// router.get("/checkuser/:id",verfiyUser,(req,res,next)=>{
//     res.send("Hello user,your are logged in and you can delete your account!")
// });

// router.get("/checkadmin/:id",verfiyAdmin,(req,res,next)=>{
//     res.send("Hello Admin,your are logged in and you can delete all account!")
// });

//UPDATE
router.put("/:id",verfiyUser,updateUser)

//DELETE
router.delete("/:id", verfiyUser, deleteUser);

//GET
router.get("/:id", verfiyUser, getUser)

//GET ALL
router.get("/",verfiyAdmin ,getAllUsers);


export default router