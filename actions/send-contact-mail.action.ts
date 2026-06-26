'use server';

import { z } from 'zod';
import phone from 'phone';

import { sendResendMail } from '@/lib/send-mail';
import ContactAdminEmail from '@/mail/contact-admin-email';
import ContactUserEmail from '@/mail/contact-user-email';
import { render } from '@react-email/render';

export type InitialContactFormState = {
  success?: boolean;
  errors?: Record<string, string[]>;
  values?: Record<string, unknown>;
  message?: string;
};

const contactSchema = z.object({
  email: z.email({
    message: 'Please enter a valid email address',
  }),
  name: z.string().min(1, {
    message: 'Please enter your name',
  }),
  phone: z
    .string()
    .optional()
    .or(z.literal(''))
    .refine(
      (value) => {
        if (!value?.trim()) return true;

        return phone(value).isValid;
      },
      {
        message: 'Phone number should look like +2348162325194',
      }
    ),
  message: z.string().min(5, {
    message: 'Please enter your message',
  }),
});

export const sendMessage = async (
  _: InitialContactFormState,
  formData: FormData
): Promise<InitialContactFormState> => {
  const fields = Object.fromEntries(formData.entries());

  const validatedFields = contactSchema.safeParse(fields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values: fields,
    };
  }

  const { email, name, message, phone } = validatedFields.data;

  const html = await render(
    ContactUserEmail({
      name,
    })
  );

  const htmlAdmin = await render(
    ContactAdminEmail({
      name,
      email,
      phone,
      message,
    })
  );

  try {
    await sendResendMail({
      to: email,
      subject: 'Your Next Software Developer Has Entered The Chat',
      html,
    });

    await sendResendMail({
      to: process.env.ADMIN_EMAIL as string,
      subject: `☕ Pause coding. ${name} sent a message.`,
      html: htmlAdmin,
    });

    return { success: true, message: 'Message sent successfully' };
  } catch (err) {
    console.error('Contact form error', err);

    return {
      success: false,
      message: 'Failed to submit, please try again',
      values: fields,
    };
  }
};
