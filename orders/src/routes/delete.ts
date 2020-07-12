import express, { Request, Response } from "express";
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
} from "@w3ai/common";
import { Order, OrderStatus } from "../models/order";

const router = express.Router();

router.delete(
  "/api/orders/:orderId",
  requireAuth,
  async (req: Request, res: Response) => {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    order.status = OrderStatus.Cancelled;
    await order.save();

    // publish an event saying this order was cancelled!

    res.status(204).send(order); // 204 - record deleted
  }
);

export { router as deleteOrderRouter };
