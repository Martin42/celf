const express = require("express");
const multer = require("multer");
const {
  MailerSend,
  EmailParams,
  Sender,
  Recipient,
  Attachment
} = require("mailersend");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 3001;
const upload = multer({ storage: multer.memoryStorage() });

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send-email", upload.array("files"), async (req, res) => {
  console.log(req.body);

  try {
    const sentFrom = new Sender(
      process.env.MAILERSEND_EMAIL,
      req.body.Nome || "CELF website user"
    );

    const recipients = [
      new Recipient(process.env.MAILERSEND_RECIPIENT, "Admin")
    ];

    const attachments = req.files.map(
      (file) =>
        new Attachment(
          file.buffer.toString("base64"),
          file.originalname,
          "attachment"
        )
    );

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setAttachments(attachments)
      .setSubject(`Inscricao no curso ${req.body.curso}`)
      .setHtml(JSON.stringify(req.body))
      .setText("Veja os detalhes no corpo do email.");

    await mailerSend.email.send(emailParams);

    res.status(200).send("Email Sent Successfully");
  } catch (error) {
    console.log("error sending email", error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
