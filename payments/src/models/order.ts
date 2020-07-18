import mongoose from "mongoose";
import { OrderStatus } from "@w3ai/common";

interface OrderAttrs {
  id: string;
  version: number;
  userId: string;
  price: number;
  status: OrderStatus;
}

interface OrderDoc extends mongoose.Document {}

interface OrderModel extends mongoose.Model<OrderDoc> {}
