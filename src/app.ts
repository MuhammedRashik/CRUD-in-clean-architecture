import express from 'express'
import bodyParser from 'body-parser';
import { routes } from './routes';
import depentencies from './config/dependencies'
const app=express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',routes(depentencies))

export {app}



              