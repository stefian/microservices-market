import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@w3ai/common";

export class TicketCreatedPublisher extends Publisher<
  TicketCreatedEvent
> {
  readonly subject = Subjects.TicketCreated;
}
