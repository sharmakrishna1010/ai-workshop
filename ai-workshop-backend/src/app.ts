import express, { Express, Request, Response } from "express";
import cors from "cors";
import formRouter from "./routes/form.routes.js";

const app: Express = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api", formRouter);

export default app;
