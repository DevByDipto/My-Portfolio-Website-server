import { Router } from "express";


const route = Router()

route.get('',(req,res,next)=>{
  console.log("hello");
  
})

export const abouMeRoute = route