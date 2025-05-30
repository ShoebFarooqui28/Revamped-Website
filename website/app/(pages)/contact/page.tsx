"use client";

import React, { useState } from "react";
import Footer from "@/components/ui/Footer";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Mail, Phone } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contactapi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong");
      }
    } catch {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <RevealOnScroll className="max-w-7xl mx-auto px-6">
      <div className="relative w-full overflow-hidden">
        {/* Header Section */}
        <section className="relative max-w-7xl mx-auto my-6 py-20 px-6 md:px-8 lg:px-10 border rounded-2xl bg-foreground/2">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl mb-4 font-italiana font-bold text-foreground">
            <Phone size={28} color="#BF40BF" /> Get in Touch
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-base max-w-md">
            Have questions or want to collaborate? Drop a message and I’ll get
            back to you as soon as possible.
          </p>
        </section>

        {/* Grid Section */}
        <section className="grid md:grid-cols-2 gap-12 mt-12 font-montserrat">
          {/* Contact Form */}
          <div className="relative bg-background/70 backdrop-blur-md border border-foreground/10 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="rounded-2xl flex flex-col gap-6">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={handleChange}
                    value={form.name}
                    className="w-full px-4 py-3 bg-background/40 rounded-lg border border-foreground/10 outline-none focus:ring-2 focus:ring-[#BF40BF]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={form.email}
                    className="w-full px-4 py-3 bg-background/40 rounded-lg border border-foreground/10 outline-none focus:ring-2 focus:ring-[#BF40BF]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    onChange={handleChange}
                    value={form.message}
                    className="w-full px-4 py-3 bg-background/40 rounded-lg border border-foreground/10 outline-none focus:ring-2 focus:ring-[#BF40BF]"
                    placeholder="Your message"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "Sending..."}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#BF40BF] focus:ring-offset-2 disabled:opacity-50 cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BF40BF_0%,#393BB2_50%,#BF40BF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-6 text-sm font-bold text-white backdrop-blur-3xl">
                  Send Message
                </span>
              </button>

              {status && (
                <p className="text-center text-sm mt-4 text-foreground bg-background/30 rounded-lg py-2 px-4">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative flex flex-col gap-6 bg-foreground/2 p-8 border rounded-2xl">
            <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
              <div className="flex items-start gap-4">
                <Mail size={24} color="#BF40BF" />
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <a
                    href="mailto:farooquishoeb2@gmail.com"
                    className="text-neutral-700 dark:text-neutral-300 hover:underline"
                  >
                    farooquishoeb2@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={24} color="#BF40BF" />
                <div>
                  <h3 className="font-medium text-foreground">Phone</h3>
                  <a
                    href="tel:+917738258972"
                    className="text-neutral-700 dark:text-neutral-300 hover:underline"
                  >
                    +91 7738258972
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <RevealOnScroll>
          <Footer />
        </RevealOnScroll>
      </div>
    </RevealOnScroll>
  );
};

export default ContactPage;
