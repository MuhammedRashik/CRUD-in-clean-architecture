import createUser from './createUserControler'
import getAllusers from './getAllUserController'

export default (depentencies:any)=>{
    return {
        createUser:createUser(depentencies),
        getAllusers:getAllusers(depentencies)
       
    }
}