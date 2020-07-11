import request from "supertest";
import { app } from "../../app";
import { Order } from "../../models/order";
import { Ticket } from "../../models/ticket";

const buildTicket = async () => {
  const ticket = Ticket.build({
    title: "service",
    price: 20,
  });
  await ticket.save();

  return ticket;
};

it("fetches orders for a particular user", async () => {
  // Create 3 tickets
  const ticketOne = await buildTicket();
  const ticketTwo = await buildTicket();
  const ticketThree = await buildTicket();

  // Create 1 order as User #1
  // Create 2 orders as User #2
  // Make request to get orders for User #2
  // Make sure we only got the orders for User #2
});
