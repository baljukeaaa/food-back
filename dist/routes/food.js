"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const express_1 = __importDefault(require("express"));
const food_1 = require("../controller/food");
exports.foodRouter = express_1.default.Router();
exports.foodRouter.post("/", food_1.createFood);
exports.foodRouter.get("/", food_1.getFood);
exports.foodRouter.patch("/", food_1.updateFood);
exports.foodRouter.delete("/", food_1.deleteFood);
//# sourceMappingURL=food.js.map