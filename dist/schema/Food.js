"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FoodSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
    },
    price: {
        type: String,
        default: 0
    },
    catogery: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: "Catogery",
    },
    image: {
        type: String,
    },
    ingredients: {
        type: String,
    },
});
exports.Food = mongoose_1.default.model('food', FoodSchema);
//# sourceMappingURL=Food.js.map