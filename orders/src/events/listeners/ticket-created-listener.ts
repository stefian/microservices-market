import { Message } from "node-nats-streaming";
import { Subjects, Listener, TicketCreatedEvent } from "@w3ai/common";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketCreatedListener extends Listener<
  TicketCreatedEvent
> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {}
}
