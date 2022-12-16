import { Content } from '@application/entities/notification/content';
import { Notification } from '@application/entities/notification/notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('CountRecipientNotifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova solicitação de amizade'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova solicitação de amizade'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova solicitação de amizade'),
        category: 'social',
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toStrictEqual(2);
  });
});
