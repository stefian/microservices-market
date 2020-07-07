import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@w3ai/common";

export class TicketUpdatedPublisher extends Publisher<
  TicketUpdatedEvent
> {
  readonly subject = Subjects.TicketUpdated;
}
