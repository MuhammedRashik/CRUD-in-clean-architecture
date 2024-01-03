import user from ".";
import {Request,Response} from 'express'
export default (depentencies:any)=>{
    console.log('hello from create user');

    
    const createUser=async(req:Request,res:Response)=>{
        try {
            const data={
                ...req.body
            }
            console.log(data,'this the req.body');
            
            
            const {useCase:{createUser_Usecase}}=depentencies
            const {executeFunction} =await createUser_Usecase(depentencies)
            const responce=await executeFunction(data)

            if(responce.mesg){
                res.send({responce})
            }else{
                const {userData}=responce
                console.log('this is the resposnce that i get ',responce);
                
                res.status(200).send({responce})
            }


        } catch (error) {
            console.log('Error happence in controller/user/creeate user',error);
            
        }

    }
    
   return createUser
    
}