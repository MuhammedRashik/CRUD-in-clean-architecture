import {schems} from '../dataBase/mongodb'
const {user}=schems
export default {
    createUser:async(data:any)=>{
       const userData={
        name:data.name,
        email:data.email,
        password:data.password
       }

       const User=await user.create(userData)
       return User
    },
    getUserByEmail:async(email:string)=>{
          const userObject=await user.findOne({email:email})
          return userObject

    },

    getAllUsers:async()=>{
        const users=await user.find()
        return users
    }

   
}