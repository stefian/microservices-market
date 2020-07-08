// COGITO Update project file ~ Ticket / Service Update
import express, { Request, Response } from "express";

const router = express.Router();

router.put(
  "/api/orders/:orderId",
  async (req: Request, res: Response) => {
    res.send({});
  }
);

export { router as updateOrderRouter };
