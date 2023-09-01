import express from "express"
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../Controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verfiyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/", verfiyAdmin, createHotel);
//UPDATE
router.put("/:id", verfiyAdmin, updateHotel)

//DELETE
router.delete("/:id", verfiyAdmin, deleteHotel);

//GET
router.get("/find/:id",getHotel)

//GET ALL
router.get("/",getAllHotel);
router.get("/countByCity",countByCity);
router.get("/countByType",getAllHotel);

export default router