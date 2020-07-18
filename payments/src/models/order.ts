import mongoose from "mongoose";

interface OrderAttrs {}

interface OrderDoc extends mongoose.Document {}

interface OrderModel extends mongoose.Model<OrderDoc> {}
