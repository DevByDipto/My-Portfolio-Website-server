import { Response } from "express"

interface Iresponse <T>{
    message:string,
    status:number,
    data:T
}

export const sendResponse = <T>(res:Response,data:Iresponse<T>)=>{
    res.status(data?.status).json({
        message:data.message,
        status:data.status,
        data:data.data
    })
}