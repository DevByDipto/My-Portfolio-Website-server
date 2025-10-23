import { Router } from "express";
import prisma from "../db/prisma";
import { sendResponse } from "../utils/sendResponse";
import { catchAsync } from "../utils/catchAsync";
import bcrypt from "bcryptjs";

const route = Router()

route.post('/register',catchAsync(async (req, res, next) => {
    const payload = req.body
 payload.password = await bcrypt.hash(payload.password, Number(process.env.SALTROUNDS) );

    const result = await prisma.user.create({
        data: {
            name:payload.name,
            email:payload.email,
            password:payload.password || null,
            googleId:payload.id || null
        }
    })
console.log(result);

    sendResponse(res, {
        message: "data insert successfull",
        status: 201,
        data: result
    })

}) )


route.get('/user', async (req, res, next) => {
    const {email} = req.query
    // console.log(email);
    
    const result = await prisma.user.findUnique( {
        where:{
            email:email as string
        }
    })

    sendResponse(res, {
        message: "data retrive successfull",
        status: 200,
        data: result
    })

})

export const authRoute = route