import mongoose from 'mongoose'



export const dbConnect=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/clean-code')
        .then(()=>console.log('Db conneted..!'))
        .catch(()=>console.log('Db not COnnected..!'))
        
    } catch (error) {
        console.log('Error in the confid db connect file in dbconect funtion ',error);
        
    }
}