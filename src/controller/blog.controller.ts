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

route.get('', catchAsync(async (req, res, next) => {
       const id = req.query.id
       let query= {}
         if (id) {
        query = {
            where:{
                id:Number(id)
            }
        }
    }
    const result = await prisma.blog.findMany(query)

    sendResponse(res, {
        message: "data retrive successfull",
        status: 200,
        data: result
    })

}))

route.patch('/:id', catchAsync(async (req, res, next) => {
const id = req.params.id
const payload = req.body
console.log(id);

    const blog = await prisma.blog.update({
  where: {
   id:Number(id)
  },
  data: payload
})

    sendResponse(res, {
        message: "data retrive successfull",
        status: 200,
        data: blog
    })

}))

route.patch('/id', catchAsync(async (req, res, next) => {
const id = req.query.id 
const payload = req.body
console.log(id);

    const blog = await prisma.blog.delete({
  where: {
   id:Number(id)
  }
})
    sendResponse(res, {
        message: "data retrive successfull",
        status: 200,
        data: blog
    })

}))

export const blogRoute = route