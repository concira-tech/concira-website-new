"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Check, Loader2 } from "lucide-react";
import { Card } from "../ui/Card";
import { Avatar, AvatarFallback } from "../ui/Avatar";
import { Input } from "../ui/Input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { motion } from "motion/react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

const Contactus = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message });
        setFormData({
          name: "",
          email: "",
          organization: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: "error", message: data.error });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-black px-4 py-20"
        id="contact"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Concira Contact
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Contact Us
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Let's make your space smarter. Whether you're exploring
                  automation, need technical support, or want a personalized
                  demo — our team is here to help.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">
                  How we can help:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-zinc-300">
                      Schedule a personalized demo or consultation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-zinc-300">
                      Get product or installation support
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-zinc-300">
                      Explore partnership and integration opportunities
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-zinc-700 text-white">
                    RT
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white font-semibold">Rohan Tuli</div>
                  <div className="text-sm text-zinc-400">
                    CEO & founder at{" "}
                    <span className="text-primary">Concira</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 italic leading-relaxed pt-4">
                At Concira, we believe every great partnership starts with a
                conversation. Our team is here to help — whether you need a
                personalized demo, technical support, or want to collaborate on
                a new project.
              </p>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Drop Us a Message
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Tell us bit about your product or query and we'll get back
                    to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <Input
                    name="organization"
                    placeholder="Organization / Property Name"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                  />

                  <Select
                    value={formData.subject}
                    onValueChange={handleSelectChange}
                    required
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-400">
                      <SelectValue placeholder="Subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      <SelectItem value="demo" className="text-white">
                        Request a Demo
                      </SelectItem>
                      <SelectItem value="support" className="text-white">
                        Technical Support
                      </SelectItem>
                      <SelectItem value="partnership" className="text-white">
                        Partnership Inquiry
                      </SelectItem>
                      <SelectItem value="other" className="text-white">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    name="message"
                    placeholder="Message Box"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 resize-none"
                  />

                  {submitStatus.type && (
                    <div
                      className={`p-3 rounded-lg text-sm ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900 px-4 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Message Us */}
            <Card className="bg-black border-zinc-800 p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Message Us
              </h3>
              <p className="text-zinc-400">contactus@concira.com</p>
            </Card>

            {/* Call Us */}
            <Card className="bg-black border-zinc-800 p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Call Us!
              </h3>
              <p className="text-zinc-400">(91) 9123456789</p>
            </Card>

            {/* Address */}
            <Card className="bg-black border-zinc-800 p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zinc-400">Andheri (West), Mumbai, India</p>
            </Card>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contactus;
