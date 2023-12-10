const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAILNODE, // Email Sender
        pass: process.env.PASSWORDNODE, // Key Generate
        // user: "tech.heaven2k23@gmail.com",
        // pass: "ylnqfowcjxtqdgpm",
    },
    tls: {
        rejectUnauthorized: false,
    },
});
module.exports = transporter;
