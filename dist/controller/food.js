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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFood = exports.deleteFood = exports.getFood = exports.createFood = void 0;
const Food_1 = require("../schema/Food");
const createFood = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = yield Food_1.Food.create(request.body);
        response.json({
            success: true, food: created
        });
    }
    catch (error) {
        response.status(401).json({ success: false, msg: error.message });
    }
});
exports.createFood = createFood;
const getFood = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield Food_1.Food.find();
    response.json({ success: true, food });
});
exports.getFood = getFood;
const deleteFood = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield Food_1.Food.findByIdAndDelete(request.params.id);
    response.json({ success: true, food });
});
exports.deleteFood = deleteFood;
const updateFood = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield Food_1.Food.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.json({ success: true, food });
});
exports.updateFood = updateFood;
//# sourceMappingURL=food.js.map