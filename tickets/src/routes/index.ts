import express, { Request, Response } from "express";
import { Ticket } from "../models/ticket";

const router = express.Router();

router.get("/api/tickets", async (req: Request, res: Response) => {
  const tickets = await Ticket.find({
    orderId: undefined, // it means tickets available for purchase; if orderId => ticket reserved
  }); // empty obj means all collection

  res.send(tickets);
});

export { router as indexTicketRouter };
