

export interface userData{
    name:string,
    email:string,
    password:string
}

export class userProfile{
    name:string
    email:string
    password:string

    constructor({name,email,password}:userData){
        this.name=name
        this.email=email
        this.password=password

    }
}