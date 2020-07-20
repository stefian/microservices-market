import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../app";

it("returns a 404 when puschasing an order that does not exist", async () => {
  await request(app)
    .post("/app/payments")
    .set("Cookie", global.signin())
    .send({
      token: "afsfsf",
      orderId: mongoose.Types.ObjectId().toHexString(),
    })
    .expect(404);
});

it("returns a 401 when purchasing an order that doesnt belong to the user", async () => {});

it("returns a 400 when purchasing a cancelled order", async () => {});
