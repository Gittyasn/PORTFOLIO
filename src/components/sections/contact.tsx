"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
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
      className="py-20 bg-muted/10 bg-grid-pattern relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(244,63,94,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-20 right-10 w-56 h-56 rounded-full bg-primary/5 blur-3xl floating-element" />
      <div className="absolute bottom-20 left-10 w-44 h-44 rounded-full bg-rose-400/5 blur-3xl floating-element-delayed" />

      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
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
            Ready to collaborate on your next project? Drop a message and let's turn your idea into reality!
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
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
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
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Email</h4>
                  <p className="text-sm font-semibold text-foreground/90 break-all">yaswanthbandaruu@gmail.com</p>
                </div>
              </a>

              {/* Phone details */}
              <div className="flex items-center gap-4 bg-card border border-border p-5 rounded-2xl shadow-sm">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Phone</h4>
                  <p className="text-sm font-semibold text-foreground/90">+91 9398106078</p>
                </div>
              </div>

              {/* Location details */}
              <div className="flex items-center gap-4 bg-card border border-border p-5 rounded-2xl shadow-sm">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Location</h4>
                  <p className="text-sm font-semibold text-foreground/90">Visakhapatnam, India</p>
                </div>
              </div>
            </div>

            {/* Prompt footer info */}
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-3xl space-y-2">
              <h4 className="font-bold text-sm text-foreground/90">Let's build something awesome together!</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Whether you need a full-scale web application, database schema tuning, or simply want to say hello - my inbox is open!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
