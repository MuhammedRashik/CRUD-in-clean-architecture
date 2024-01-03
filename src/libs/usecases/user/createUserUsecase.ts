import dependencies from "../../../config/dependencies"
import { userData ,userProfile} from "../../../entities"

export const createUser_Usecase=(dependencies:any)=>{

    const {repository:{userRepository}}=dependencies

    const executeFunction=async({name,email,password}:userData)=>{
        const userExist=await userRepository.getUserByEmail(email)

        if(!userExist){
            let user:object= new userProfile({name,email,password})

            const userData=await userRepository.createUser(user)

            return userData

        }else{
            return { mesg:[{error:"user is already exist. Please login "}] }
        }

    }

    return {executeFunction}
}


