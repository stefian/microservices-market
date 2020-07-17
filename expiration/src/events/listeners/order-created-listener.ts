import { Listener, OrderCreatedEvent, Subjects } from "@w3ai/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { expirationQueue } from "../../queues/expiration-queue";

export class OrderCreatedListener extends Listener<
  OrderCreatedEvent
> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const delay =
      new Date(data.expiresAt).getTime() - new Date().getTime(); // the delay time in miliseconds
    console.log(
      "Waiting this may miliseconds to process the job",
      delay
    );

    await expirationQueue.add(
      {
        orderId: data.id,
      }
      // {
      //   delay, // the delay in millisecond calculated above
      // }
    );

    msg.ack();
  }
}
