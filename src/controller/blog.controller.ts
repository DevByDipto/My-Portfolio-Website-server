import { Router } from "express";
import prisma from "../db/prisma";
import { sendResponse } from "../utils/sendResponse";
import { catchAsync } from "../utils/catchAsync";


const route = Router()

route.post('',catchAsync(async (req, res, next) => {
    const payload = req.body
    // console.log(payload);

    const result = await prisma.blog.create({
        data: payload
    })

    sendResponse(res, {
        message: "data insert successfull",
        status: 201,
        data: result
    })
}) )

route.get('', async (req, res, next) => {
    const result = await prisma.aboutMe.findFirst()

    sendResponse(res, {
        message: "data retrive successfull",
        status: 200,
        data: result
    })

})

export const blogRoute = route