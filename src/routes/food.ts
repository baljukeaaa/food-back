import express from "express";
import { createFood, deleteFood, getFood, updateFood } from "../controller/food";


export const foodRouter = express.Router();
foodRouter.post("/", createFood)
foodRouter.get("/", getFood)
foodRouter.patch("/", updateFood)
foodRouter.delete("/", deleteFood)