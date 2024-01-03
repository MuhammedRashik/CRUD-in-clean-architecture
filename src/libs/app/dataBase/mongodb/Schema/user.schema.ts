import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const user=mongoose.model("User",userSchema)

export {
    user
}