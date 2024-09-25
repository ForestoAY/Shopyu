import { ZodError } from "zod";

export function handleError(error: any){ 
  if (error instanceof ZodError) {
      const formatted = error.issues.map(issue => {
        return issue.path[0] + " " + issue.message.toLowerCase();
      })
      return Response.json({ error: formatted }, { status : 400 })
    } else if (error instanceof Error) {
      return Response.json({ error: error.message }, { status : 400 })
    }
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
}