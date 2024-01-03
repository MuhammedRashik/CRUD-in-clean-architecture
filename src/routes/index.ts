import express from 'express'
import userRouter from './userRoutes/user.route'



export const routes=(depentencies:any)=>{
 const routers=express()
 routers.use('/user',userRouter(depentencies))
 return routers
}