import { Message } from "node-nats-streaming";
import mongoose from "mongoose";
import { TicketCreatedEvent } from "@w3ai/common";
import { TicketCreatedListener } from "../ticket-created-listener";
import { natsWrapper } from "../../../nats-wrapper";

const setup = async () => {
  // create an instance of the listener
  const listener = new TicketCreatedListener(natsWrapper.client);

  // create a fake data event
  const data: TicketCreatedEvent["data"] = {
    version: 0,
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "service",
    price: 10,
    userId: new mongoose.Types.ObjectId().toHexString(),
  };

  // create a fake message object
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(), // a jest mock function to keep track of nr calls and params provided
  };

  return { listener, data, msg };
};

it("creates and saves a ticket", async () => {
  // call the onMessage function with the data object + message object
  // write assertions to make sure a ticket was created
});

it("acks the message", async () => {
  // call the onMessage function with the data object + message object
  // write assertions to make sure ack function is called
});
