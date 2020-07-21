import mongoose from "mongoose";

interface PaymentAttrs {
  orderId: string;
  stripeId: string;
}

interface PaymentDoc extends mongoose.Document {}

interface PaymentModel extends mongoose.Model<PaymentDoc> {}
