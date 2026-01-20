import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'contact@eazytaxes.com',
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  serviceInterest?: string | null;
}) {
  const mailOptions = {
    from: process.env.EMAIL_USER || 'contact@eazytaxes.com',
    to: process.env.EMAIL_USER || 'contact@eazytaxes.com',
    subject: `New Inquiry: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Service Interest:</strong> ${data.serviceInterest || 'Not specified'}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `
  };

  return transporter.sendMail(mailOptions);
}
