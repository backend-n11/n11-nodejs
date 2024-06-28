import express, { Request, Response } from "express";
import internal from "stream";

const app = express();
const PORT = 3000;

app.use(express.json());

interface TypedRequestBody<T> extends Request {
  body: T;
}

app.use(
  "/api",
  (
    _req: TypedRequestBody<{ id: number; name: string; isMerried: boolean }>,
    res: Response,
  ) => {
    res.send("ok");
  },
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

type Color = "Red" | "greeN" | "black";

let color: Uppercase<Color> = "RED";

// abstract class Car {
//   constructor(public name: string) {
//   }
//
//   abstract start(): void;
// }
//
interface Car {
  start(): void;
}
class BMW implements Car {
  constructor(public name: string) { }

  startEngine(): void {
    console.log("Engine is startings");
  }
  start(): void {
    console.log("Engine working");
  }
}

const bmw = new BMW("S4");

bmw.startEngine();
interface L {
  name: string;
  age: number;
}

type A = Pick<L, "name">;
