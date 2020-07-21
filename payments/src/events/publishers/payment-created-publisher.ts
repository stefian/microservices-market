import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@w3ai/common";

export class PaymentCreatedPublisher extends Publisher<
  PaymentCreatedEvent
> {
  readonly subject = Subjects.PaymentCreated;
}
