import { Food } from "../schema/Food";
export const createFood = async (request, response) => {
    try{
        const created = await Food.create( request.body);
        response.json({
            success: true, food:created
        });
     } catch (error){
        response.status(401).json({success:false,msg: error.message});
     }
}
export const getFood = async (request, response) => {
    const food = await Food.find()
    response.json({ success: true, food})
}

export const deleteFood = async (request, response) => {
    const food = await Food.findByIdAndDelete(request.params.id)
    response.json({ success: true, food})
}
export const updateFood = async (request, response) => {
    const food = await Food.findByIdAndUpdate(request.params.id, request.body, {new: true})
    response.json({ success: true, food})
}
