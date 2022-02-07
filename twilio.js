require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const p =process.env.TWILIO_PHONE_NUMBER;
const sendSms = (phone, message) => {

  const client_ = require('twilio')(accountSid, authToken);
  console.log(p);
  client_.messages
    .create({
       body: message,
       //messagingServiceSid: 'MG72517cc4359f2b3e5d53361655d9721d', 
       //from: process.env.TWILIO_PHONE_NUMBER,
       from: p,
       to: phone
     })
    .then(message => console.log(message.sid));
}

module.exports = sendSms;
