"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Food_1 = require("./schema/Food");
const food_1 = require("./routes/food");
const category_1 = require("./routes/category");
const Category_1 = require("./schema/Category");
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/food", food_1.foodRouter);
app.use("/api/v1/category", category_1.categoryRouter);
app.get('/', (_req, res) => {
    res.json({ message: "hello" });
});
app.get('/foods', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield Food_1.Food.find();
    res.json({ success: true, foods });
}));
app.post('/food', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield Food_1.Food.create(req.body);
    // console.log(req.body);
    res.json({ success: true, food });
}));
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect("mongodb+srv://baljantai:xtTHH5H56Rxz3BtQ@cluster0.2s0ttr4.mongodb.net/");
            console.log("Data connection success");
        }
        catch (error) {
            console.log(error);
        }
    });
    connectDb();
}));
app.get('/food', (_req, res) => {
    res.json({ success: true });
});
app.post("/food-category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createdCategory = yield Category_1.Category.create(req.body);
    res.json({ success: true, foodcategory: createdCategory });
}));
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
//# sourceMappingURL=index.js.map