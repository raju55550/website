require('dotenv').config();
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')
const sendContactEmail = async (email, message,name) => {
	console.log("here Iam ")
	const subject = 'Contact Email';
	// const resetPasswordUrl = `${process.env.CLIENT_BASE_URL}/reset-password/${token}`;
	const text = `A user try to contact from  with Name ${name} and want to know about ${message}`;
	// const testAccount = await nodemailer.createTestAccount();
	// const transporter = await nodemailer.createTransport({
	// 	host: testAccount.smtp.host,
	// 	port: testAccount.smtp.port,
	// 	secure: testAccount.smtp.secure,
	// 	auth: {
	// 		user: testAccount.user,
	// 		pass: testAccount.pass,
	// 	},
	// });
	sgMail.setApiKey('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');
	let msg = {
		to: 'naveenrajualluri@gmail.com', // Change to your recipient
		from: 'navalluri@gmail.com', // Change to your verified sender
		subject: subject,
		text: text,
		
	}
	sgMail
	.send(msg)
	.then(() => {
	console.log('Email sent')
	})
	.catch((error) => {
	console.error(error)
	})
};

module.exports = sendContactEmail;
