import express from 'express';
import mongoose from 'mongoose';
import dotenev from 'dotenev';
dotenev.config();

mongoose .connection('process.env.MONGO')
.then(()=>{
    console.log('Connected to Mongo DB!');
})


.catch((err)=>{
    console.log(err);
})
const app=express();



app.listen(5000,()=>{
    console.log('Server is  running on port 5000');
}
);