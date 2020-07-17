import {
  Listener,
  Subjects,
  ExpirationCompleteEvent,
} from "@w3ai/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";

export class ExpirationCompleteListener extends Listener<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
  queueGroupName = queueGroupName;

  async onMessage(
    data: ExpirationCompleteEvent["data"],
    msg: Message
  ) {}
}
