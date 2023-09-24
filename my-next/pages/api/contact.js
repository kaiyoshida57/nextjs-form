const sgMail = require("@sendgrid/mail");

const SG_API_KEY = process.env.SG_API_KEY;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const msg = {
    to: "rosicky7777@yahoo.co.jp",
    from: "kaibukuro@gmail.com",
    subject: "NextJS Form",
    html: `<p><strong>Name: </strong>${name}</p>
    <p><strong>Email: </strong>${email}</p>
    <p><strong>Message: </strong>${message}</p>
    `,
  };
  await sgMail.send(msg);
  res.json({ success: true });
}
