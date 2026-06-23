'use client';

import { useState } from 'react';
import SvgIcon from './svg-icon';
import { socials } from '@/utils/constants';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-a-500 h-a-500 bg-primary/20 blur-[120px] rounded-full -top-30 -left-30" />
        <div className="absolute w-a-500 h-a-500 bg-secondary/20 blur-[140px] rounded-full -bottom-37.5 -right-37.5" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s build something
            <span className="text-primary"> insane</span>.
          </h2>

          <p className="mt-4 text-app-text/70 max-w-md">
            Got an idea, project, or opportunity? I’m always open to interesting
            builds, collaborations, and product work.
          </p>

          {/* Social chips */}
          <div className="mt-8 flex flex-col gap-3">
            {socials.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-app-black/10 dark:border-white/10 bg-background hover:border-primary/40 transition"
              >
                <span className="font-medium">{item.label}</span>
                <span className="text-sm text-app-text/60 truncate">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="relative">
          <div className="p-6 md:p-8 rounded-2xl border border-app-black/10 dark:border-white/10 bg-background shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>

            <form className="space-y-4">
              <div>
                <label className="text-sm text-app-text/70">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-app-black/10 dark:border-white/10 bg-transparent focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm text-app-text/70">Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-app-black/10 dark:border-white/10 bg-transparent focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm text-app-text/70">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-app-black/10 dark:border-white/10 bg-transparent focus:border-primary outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                onClick={() => setLoading(true)}
                className="w-full mt-2 py-3 rounded-xl bg-primary text-white font-medium hover:opacity-90 active:scale-[0.99] transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <SvgIcon name="arrow-right-up" className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-tertiary text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg rotate-3">
            Usually replies in 24h ⚡
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
