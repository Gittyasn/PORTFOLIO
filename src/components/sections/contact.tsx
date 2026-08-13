"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import confetti from "canvas-confetti";

// Schema validation with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(4, { message: "Subject must be at least 4 characters long." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        // Send actual email using EmailJS REST API
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: data.name,
              from_email: data.email,
              subject: data.subject,
              message: data.message,
              to_name: "Yaswanth Bandaru",
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message via EmailJS");
        }
      } else {
        // Fallback simulation when keys are not defined
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Trigger canvas-confetti explosion
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f43f5e", "#fb7185", "#be123c", "#ffffff"]
      });

      reset();
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (e) {
      console.error("EmailJS Error:", e);
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-amber-100/40 via-orange-100/20 to-amber-100/40 dark:from-zinc-950 dark:via-zinc-900/60 dark:to-zinc-950 relative overflow-hidden"
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-90 dark:opacity-45 pointer-events-none" />

      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-20 right-10 w-56 h-56 rounded-full bg-primary/5 blur-3xl floating-element" />
      <div className="absolute bottom-20 left-10 w-44 h-44 rounded-full bg-sky-400/5 blur-3xl floating-element-delayed" />

      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent font-poppins pb-1"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto"
          >
            Ready to collaborate on your next project? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm"
          >
            <h3 className="text-lg md:text-xl font-bold mb-6 text-foreground/90">
              Send me a message
            </h3>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm rounded-2xl mb-6 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={`w-full px-4 py-3 bg-muted border ${
                      errors.name ? "border-red-500" : "border-border/60 focus:border-primary"
                    } rounded-xl text-sm focus:outline-none transition-colors`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-red-500">
                      <AlertCircle className="w-3 h-3" /> {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 bg-muted border ${
                      errors.email ? "border-red-500" : "border-border/60 focus:border-primary"
                    } rounded-xl text-sm focus:outline-none transition-colors`}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-red-500">
                      <AlertCircle className="w-3 h-3" /> {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  className={`w-full px-4 py-3 bg-muted border ${
                    errors.subject ? "border-red-500" : "border-border/60 focus:border-primary"
                  } rounded-xl text-sm focus:outline-none transition-colors`}
                  placeholder="Project Collaboration"
                  disabled={isSubmitting}
                />
                  {errors.subject && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-red-500">
                      <AlertCircle className="w-3 h-3" /> {errors.subject.message}
                    </span>
                  )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={`w-full px-4 py-3 bg-muted border ${
                    errors.message ? "border-red-500" : "border-border/60 focus:border-primary"
                  } rounded-xl text-sm focus:outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project idea, timelines, or anything else..."
                  disabled={isSubmitting}
                />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-red-500">
                      <AlertCircle className="w-3 h-3" /> {errors.message.message}
                    </span>
                  )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-primary-foreground font-semibold rounded-xl transition-all cursor-pointer select-none"
              >
                <Send className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`} />
                {isSubmitting ? "Sending message..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            {/* Quick Cards */}
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground/90 mb-4">
                Get in Touch
              </h3>
              
              {/* Email details */}
              <a
                href="mailto:yaswanthbandaruu@gmail.com"
                className="flex items-center gap-4 bg-card border border-border p-5 rounded-2xl shadow-sm hover:border-primary/45 transition-colors group"
              >
                <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Email</h4>
                  <p className="text-sm font-semibold text-foreground/90 break-all">yaswanthbandaruu@gmail.com</p>
                </div>
              </a>

              {/* Phone details */}
              <a
                href="tel:+919398106078"
                className="flex items-center gap-4 bg-card border border-border p-5 rounded-2xl shadow-sm hover:border-primary/45 transition-colors group"
              >
                <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Phone</h4>
                  <p className="text-sm font-semibold text-foreground/90">+91 9398106078</p>
                </div>
              </a>

              {/* Location details */}
              <div className="flex items-center gap-4 bg-card border border-border p-5 rounded-2xl shadow-sm">
                <div className="w-11 h-11 bg-rose-600 rounded-xl flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Location</h4>
                  <p className="text-sm font-semibold text-foreground/90">Visakhapatnam, India</p>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-foreground/90">
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://github.com/Gittyasn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-4 bg-card border border-border rounded-2xl shadow-sm hover:border-primary/45 transition-colors group"
                >
                  <Github className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                  <span className="font-semibold text-sm text-foreground/80 group-hover:text-foreground transition-colors">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/yaswanth-bandaru-98912b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-4 bg-card border border-border rounded-2xl shadow-sm hover:border-primary/45 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                  <span className="font-semibold text-sm text-foreground/80 group-hover:text-foreground transition-colors">LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/919398106078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-4 bg-card border border-border rounded-2xl shadow-sm hover:border-emerald-500/45 transition-colors group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition-colors" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  <span className="font-semibold text-sm text-foreground/80 group-hover:text-foreground transition-colors">WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
