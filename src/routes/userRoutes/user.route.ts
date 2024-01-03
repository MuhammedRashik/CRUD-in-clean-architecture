import express from 'express'
import { profileController } from '../../libs/controllers'
export default (depentencies:any)=>{
    const router=express()


    const {createUser,getAllusers}=profileController(depentencies)

   router.post("/createUser",createUser)
   router.get('/getAllUser',getAllusers)


    return router
}