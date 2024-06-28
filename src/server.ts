import express, { Application, Request, Response } from "express";
import { config } from "dotenv";

config();

const PORT: string = process.env.PORT || "4000";

const app: Application = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("ok");
});

interface Todo {
  name: string
  content: string
  id: number
}

interface MyRequest extends Request {
  body: Todo
}

interface MyUpdateRequest extends Request {
  body: Partial<Todo>
  params: {
    id: string
  }
}



app.post("/todo", (req: MyRequest, res: Response) => {
  const name = req.body.name
  const id = req.body.id

  res.send("ok");
});



app.put("/todo", (req: MyUpdateRequest, res: Response) => {
  const name = req.body.name
  const id = req.params.id

  res.send("ok");
});




app.listen(PORT, () => {
  console.log("sserver is running on port 4000");
});
