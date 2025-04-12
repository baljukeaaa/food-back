import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Food } from "./schema/Food";
import { foodRouter } from "./routes/food";
import { categoryRouter } from "./routes/category";
import { Category } from "./schema/Category";
import { authRouter } from "./routes/auth";

const port = 8000;
const app = express();


app.use(express.json());

app.use("/api/v1/food",foodRouter)

app.use("/api/v1/category",categoryRouter)

app.use("/api/v1/auth",authRouter)


app.get('/', (_req: Request, res: Response) => {
    res.json({ message: "hello" });
});

app.get('/foods', async (req, res) => {
    const foods = await Food.find();
    res.json({success: true, foods})
})

app.post('/food', async (req, res) => {
    const food = await Food.create(req.body);
    // console.log(req.body);
    res.json({success: true, food})
});
app.listen(port, async () => {
    const connectDb = async () => {
        try {
            await mongoose.connect(
                "mongodb+srv://baljantai:xtTHH5H56Rxz3BtQ@cluster0.2s0ttr4.mongodb.net/"
            );
            console.log("Data connection success")
        } catch (error) {
            console.log(error);
        }
    }
    connectDb()
})
app.get('/food', (_req: Request, res: Response) => {
    res.json({ success: true});
})
app.post("/food-category", async (req, res) => {
    const createdCategory = await Category.create(req.body);
    res.json({ success: true, foodcategory: createdCategory });
  });

  
  
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });