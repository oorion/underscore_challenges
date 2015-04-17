lowercaseEmails = require('../lib/email');

describe('Emails', function () {
  it('can lowercase a collection of emails', function () {
    var emails = ['tEst@example.com', 'John@exampLe.com'];
    expect(lowercaseEmails(emails)).toEqual(['test@example.com', 'john@example.com']);
  });
});
