const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function sendSMS(to, body) {
  client.messages
    .create({
      to,
      from: "17403374223",
      body,
    })
    .then((message) => console.log(message.sid));
}

module.exports = sendSMS;
