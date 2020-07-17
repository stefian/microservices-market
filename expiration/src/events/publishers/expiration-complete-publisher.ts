import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@w3ai/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
