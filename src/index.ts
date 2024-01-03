import { app } from "./app"; 
import { dbConnect } from "./config/dbConnect";





const start=async()=>{
    try {
        await dbConnect()
    } catch (error) {
        console.log('db COnection error',error);
        
    }


    app.listen(3000,()=>console.log('server is running..!'))
}


start()