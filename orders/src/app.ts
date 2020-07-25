import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@w3ai/common";

import { deleteOrderRouter } from "./routes/delete";
import { indexOrderRouter } from "./routes/index";
import { newOrderRouter } from "./routes/new";
import { showOrderRouter } from "./routes/show";
import { updateOrderRouter } from "./routes/update";

const app = express();
app.set("trust proxy", true); // to allow traffic through ingress-nginx
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false, // as per note 485 - One more small fix // since we dont have HTTPS setup now with Digital Ocean
    // secure: process.env.NODE_ENV !== "test", // to ensure it will always work on https connection or http for testing
  })
);
app.use(currentUser);

app.use(deleteOrderRouter);
app.use(indexOrderRouter);
app.use(newOrderRouter);
app.use(showOrderRouter);
app.use(updateOrderRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app }; // named export
