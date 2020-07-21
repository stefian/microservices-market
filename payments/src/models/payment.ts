import mongoose from "mongoose";

interface PaymentAttrs {}

interface PaymentDoc extends mongoose.Document {}

interface PaymentModel extends mongoose.Model<PaymentDoc> {}
