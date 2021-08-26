import { Publisher, Subjects, TicketCreatedEvent } from '@sisla/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
