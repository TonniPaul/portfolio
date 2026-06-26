'use client';

import { useActionState } from 'react';
import Confetti from 'react-confetti';

import {
  InitialContactFormState,
  sendMessage,
} from '@/actions/send-contact-mail.action';
import { Button } from './button';
import Input from './form/input';
import Textarea from './form/textarea';
import Show from './show';
import { AnimatePresence } from 'framer-motion';
import Motion from './motion';
import SvgIcon from './svg-icon';

const initialState: InitialContactFormState = {};

const ContactForm = () => {
  const [state, action, isPending] = useActionState(sendMessage, initialState);

  if (state.success) {
    return (
      <AnimatePresence>
        <Motion className="relative overflow-hidden h-fit">
          <Confetti
            width={typeof window !== 'undefined' ? window.innerWidth : 0}
            height={typeof window !== 'undefined' ? window.innerHeight : 0}
            recycle={false}
            numberOfPieces={500}
            className="pointer-events-none absolute inset-0"
          />

          <div className="section-card relative flex min-h-a-500 flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
              <SvgIcon name="success" className="h-12 w-12 text-primary-700" />
            </div>

            <span className="pill">Message Delivered</span>

            <h2 className="card-head-text my-5">You&apos;re all set!</h2>

            <p className="text-foreground/80">
              Thanks for reaching out. Your message is safely in my inbox, and a
              confirmation email is on its way.
            </p>

            <p className="mt-4 text-foreground/60">
              I&apos;ll review everything and get back to you within{' '}
              <span className="font-semibold text-primary">24 hours</span>. or
              simply reach out on social media.
            </p>

            <Button
              className="mt-10 min-w-52"
              onClick={() => window.location.reload()}
            >
              Send Another Message
            </Button>
          </div>
        </Motion>
      </AnimatePresence>
    );
  }

  return (
    <form action={action} className="section-card space-y-5">
      <div>
        <h3 className="text-xl font-bold">Send a message</h3>
      </div>

      <Show when={!!state.message}>
        <div
          className={`rounded-xl border p-4 text-sm ${
            state.success
              ? 'border-green-500/20 bg-green-500/10 text-green-600'
              : 'border-red-500/20 bg-red-500/10 text-red-500'
          }`}
        >
          {state.message}
        </div>
      </Show>

      <div className="grid gap-5">
        <Input
          name="name"
          label="Your Name"
          defaultValue={(state.values?.name as string) ?? ''}
          disabled={isPending}
          error={state.errors?.name?.[0]}
          autoComplete="name"
        />

        <Input
          type="email"
          name="email"
          label="Email Address"
          defaultValue={(state.values?.email as string) ?? ''}
          disabled={isPending}
          error={state.errors?.email?.[0]}
          autoComplete="email"
        />

        <Input
          name="phone"
          label="WhatsApp Number"
          defaultValue={(state.values?.phone as string) ?? ''}
          disabled={isPending}
          error={state.errors?.phone?.[0]}
          required={false}
          autoComplete="tel"
        />

        <Textarea
          name="message"
          label="Tell me about your project"
          rows={6}
          required
          disabled={isPending}
          defaultValue={(state.values?.message as string) ?? ''}
          error={state.errors?.message?.[0]}
        />
      </div>

      <Button
        type="submit"
        loading={isPending}
        disabled={isPending}
        className="mx-auto"
        withIcon
        icon="send"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
