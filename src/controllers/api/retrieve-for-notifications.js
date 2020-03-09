const services = require('../../services');

const retrieveForNotifications = async (req, res, next) => {
  const mentions = services.getMentionedStudents(req.body.notification);

  try {
    const recipients = await services.getNotificationRecipients(
      req.body.teacher,
      mentions,
    );

    const recipientEmails = recipients.map(recipient => recipient.email);

    res.status(200).json({ recipients: recipientEmails });
  } catch (err) {
    next(err);
  }
};

module.exports = retrieveForNotifications;
