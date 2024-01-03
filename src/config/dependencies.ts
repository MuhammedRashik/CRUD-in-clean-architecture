import {createUser_Usecase,getAllUsers_Usecase} from '../libs/usecases'


import { userRepository } from '../libs/app/repository'


const useCase:any={
    createUser_Usecase,
    getAllUsers_Usecase

   
}
const repository:any={
    userRepository
}   

export default {useCase,repository}