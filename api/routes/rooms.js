import express from "express"
import { createRoom,
         updateRoom,
         deleteRoom,
         getRoom,
         getAllRoom } from "../Controllers/room.js";
import {verfiyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/:hotelid", verfiyAdmin, createRoom);
//UPDATE
router.put("/:id", verfiyAdmin, updateRoom)

//DELETE
router.delete("/:id/:hotelid", verfiyAdmin,  deleteRoom);

//GET
router.get("/:id",getRoom)

//GET ALL
router.get("/",getAllRoom);


export default router