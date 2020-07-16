import {
  Listener,
  OrderCancelledEvent,
  Subjects,
} from "@w3ai/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";

export class OrderCancelledListener extends Listener<
  OrderCancelledEvent
> {
  readonly subject = Subjects.OrderCancelled;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCancelledEvent["data"], msg: Message) {}
}
