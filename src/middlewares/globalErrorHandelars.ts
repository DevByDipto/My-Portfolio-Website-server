import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.message) {
    // Split by newlines, last line usually contains the main message
    const lines = err.message.split("\n").map((line:any)=> line.trim());
    // console.log(lines);
    
    const lastLine = lines[lines.length - 1];
    
    // Check if it starts with 'Argument' (Prisma validation)
    if (lastLine.startsWith("Argument")) {
      err.message = lastLine;
    }
  }

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';


  res.status(err.statusCode).json({
    success: false,
    status: err.status,
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export default globalErrorHandler;
