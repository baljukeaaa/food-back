import express from "express";
import { createFood } from "../controller/food";
import { createCategory, getCategoriesWithFoods } from "../controller/category";


export const categoryRouter = express.Router();
categoryRouter.post("/", createCategory).get("/with-foods",getCategoriesWithFoods)