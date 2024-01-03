import {Request,Response} from 'express'


export default (dependencies:any)=>{
    const getAllusers=async(req:Request,res:Response)=>{
        try {
            const {useCase:{getAllUsers_Usecase}}=dependencies
            const {executeFunction}=await getAllUsers_Usecase(dependencies)

            const data=await executeFunction()

            res.status(200).json({data})
        } catch (error) {
            console.log('Error happence in controller/user/get all user',error);
            
        }
    }

    return getAllusers
}