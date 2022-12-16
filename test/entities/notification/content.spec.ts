import { Content } from '@application/entities/notification/content';

describe('Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você acabou de receber uma ligação no Teams');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Test')).toThrowError();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('Test'.repeat(61))).toThrowError();
  });
});
