import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
    name :{
        type: String,
    },
    price : {
        type : String,
        default:0
    },
    catogery: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Catogery",
    },
    image:{
        type : String,

    },
    ingredients:{
        type: String,
    },
});

export const Food = mongoose.model('food', FoodSchema)