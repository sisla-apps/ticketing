import { Publisher, OrderCreatedEvent, Subjects } from '@sisla/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
