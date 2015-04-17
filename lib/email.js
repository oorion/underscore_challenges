_ = require('underscore');

function lowercaseEmails (emails) {
  return _.map(emails, function(email) {
    return email.toLowerCase();
  });
}

module.exports = lowercaseEmails;
