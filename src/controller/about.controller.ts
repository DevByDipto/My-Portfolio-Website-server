import { Router } from "express";
import prisma from "../db/prisma";
import { sendResponse } from "../utils/sendResponse";


const route = Router()

route.post('', async(req,res,next)=>{
 const payload = req.body
// console.log(payload);

 const result = await prisma.aboutMe.create({
  data:payload
 })
console.log(result);
  res.json("result")
})

route.get('', async(req,res,next)=>{
  const result = await prisma.aboutMe.findFirst()

  sendResponse(res,{
message:"data retrive successfull",
status:200,
data:result
  })
 
})

export const abouMeRoute = route