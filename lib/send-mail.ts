import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { CreateEmailOptions, Resend } from 'resend';

const transport = nodemailer.createTransport({
  // host: 'smtp.mail.me.com',
  // port: 587,
  // secure: false,

  service: 'iCloud',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
} as SMTPTransport.Options);

type MailInfo = {
  to: string | string[] | Mail.Address | Mail.Address[];
  subject: string;
  text: string;
  html?: string;
  bcc?: string | string[] | Mail.Address | Mail.Address[];
  cc?: string | string[] | Mail.Address | Mail.Address[];
};

export const sendNodeMailerMail = async (mail: MailInfo) => {
  try {
    const info = await transport.sendMail({
      ...mail,
      from: 'tonnipaul@icloud.com',
    });
    return info;
  } catch (err) {
    console.error('❌ Error sending email:', err);
    throw err;
  }
};

export const sendResendMail = (mail: Omit<CreateEmailOptions, 'from'>) => {
  const resend = new Resend(process.env.RESEND_API);

  return resend.emails.send({
    ...(mail as CreateEmailOptions),
    from: process.env.FROM_EMAIL as string,
  } as CreateEmailOptions);
};
