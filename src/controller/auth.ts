import { User } from "../schema/User";
import bcrypt from "bcrypt";
const SALT_ROUND = 12;

export const register = async (req, res) => {
    try{
const {email, password} = req.body;

const salt = bcrypt.genSaltSync(SALT_ROUND);
const hash = bcrypt.hashSync(password, salt);
const user = await User.create ({...req.body, password: hash});


res.json({success:true, user })
    } catch (error){
        if (error.code==11000) {
            res.status(400).json({success:false,error:"User exist"});
            return;
        }
    }

};

export const login = async (req,res) =>{
    const{email, password} = req.body;
    const user = await User.findOne ({email: email})
 
    if(!user){
        res.status(404).json({success:false, error:'user not found'})
        return;
    }
   
    const isCompare = bcrypt.compareSync(password,user.password)
    if (!isCompare){
        res.status(401).json({success: false, error:"Username or Password is wrong"})
        return;
    }
    res.status(200).json({success:true, user})
}