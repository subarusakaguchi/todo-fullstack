import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import "express-async-errors";

import "../../containers";

import { AppError } from "../../Errors/AppError";
import { createDBConnection } from "../mongoose/database";
import { routes } from "./routes";

const app = express();

const PORT = process.env.PORT || 3333;

createDBConnection();
app.use(express.json());
app.use(cors());

app.use("/api/v1", routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: `App error: ${error.message}`,
    });
  }

  return res.status(500).json({
    message: `Internal server error: ${error.message}`,
  });
});

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
