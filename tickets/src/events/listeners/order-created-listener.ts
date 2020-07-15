import { Message } from "node-nats-streaming";
import { Listener, OrderCreatedEvent, Subjects } from "@w3ai/common";
import { queueGroupName } from "./queue-group-name";
import { Ticket } from "../../models/ticket";

export class OrderCreatedListener extends Listener<
  OrderCreatedEvent
> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    // Find the ticket that the order is reserving
    // If no ticket, throw error
    // Mark the ticket as being reserved by setting its orderId property
    // Save the ticket
    // ack the message
  }
}
