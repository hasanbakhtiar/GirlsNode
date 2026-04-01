const nodemailer = require("nodemailer");


// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    host: "mail.webluna.org",
    port: 587,
    secure: false,
    auth: {
        user: "tester@webluna.org",
        pass: "tester2026"
    },
    tls: {
        rejectUnauthorized: false // self-signed sertifikat olsa belə qəbul edir
    }
});

exports.submitForm = async (req, res) => {

    try {
        const info = await transporter.sendMail({
            from: '"Example Team" <tester@webluna.org>', // sender address
            to: "hasan.doctype@gmail.com", // list of recipients
            subject: "Hello", // subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // HTML body
        });

        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.send('success');
    } catch (err) {
        console.error("Error while sending mail:", err);
        res.send(err);
    }


}
