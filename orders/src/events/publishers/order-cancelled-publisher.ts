import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@w3ai/common";

export class OrderCancelledPublisher extends Publisher<
  OrderCancelledEvent
> {
  readonly subject = Subjects.OrderCancelled;
}
