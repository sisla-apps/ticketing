import { Subjects, Publisher, OrderCancelledEvent } from '@sisla/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
