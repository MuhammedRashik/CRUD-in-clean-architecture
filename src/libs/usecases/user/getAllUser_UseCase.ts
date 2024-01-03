export const getAllUsers_Usecase=(dependencies:any)=>{
    const {repository:{userRepository}}=dependencies

    const executeFunction=async()=>{
        const users=await userRepository.getAllUsers()
        return users
    }


    return {executeFunction}
}