import request from "supertest";
import { app } from "../../app";
import { Order } from "../../models/order";
import { Ticket } from "../../models/ticket";

it("fetches orders for a particular user", async () => {
  // Create 3 tickets
  // Create 1 order as User #1
  // Create 2 orders as User #2
  // Make request to get orders for User #2
  // Make sure we only got the orders for User #2
});
