import { ZodError } from "zod";

export class CustomError extends Error {
  status: number
  constructor(message: string, status:number) {
    super(message)
    this.status = status
  }
} 

export function handleError(error: any){ 
  if (error instanceof CustomError) {
    return Response.json({
      error: error.message
    }, {status: error.status})
  } else if (error instanceof ZodError) {
    const formatted = error.issues.map(issue => {
      return issue.path[0] + " " + issue.message.toLowerCase();
    })
    return Response.json({ error: formatted }, { status : 400 })
  } else if (error instanceof Error) {
    return Response.json({ error: error.message }, { status : 400 })
  }
  return Response.json({ error: "Internal Server Error" }, { status: 500 })
}