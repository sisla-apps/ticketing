import { Publisher, Subjects, TicketUpdatedEvent } from '@sisla/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
