import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Import routes
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';


//Routes
const app = express();

dotenv.config()

//Middlewares

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

//Connct to MongoDB Database

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log('Listening...')))
    .catch((err) => console.log(err))



//Routes Use
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);