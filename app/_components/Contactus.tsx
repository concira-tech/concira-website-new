import { MapPin, Mail, Phone, Check } from "lucide-react";
import { Card } from "./ui/Card";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import { Input } from "./ui/Input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/Select";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";

const Contactus = () => {
  return (
    <>
      <div className="bg-black px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <div className="space-y-8">
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
            </div>

            {/* Right - Contact Form */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
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

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Name"
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <Input
                    placeholder="Organization / Property Name"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                  />

                  <Select>
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
                    placeholder="Message Box"
                    rows={5}
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 resize-none"
                  />

                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="bg-zinc-900 px-4 py-16">
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
      </div>
    </>
  );
};

export default Contactus;
