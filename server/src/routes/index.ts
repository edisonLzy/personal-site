import express from 'express';
type E  = ReturnType<typeof express>;

import userRoute from './userRoute';
export default function(app:E,version:string){
    app.use(`${version}/user`,userRoute)
}