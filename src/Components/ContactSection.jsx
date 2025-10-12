import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils.js";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]{2,50}$/.test(formData.name.trim())) {
      newErrors.name =
        "Name must contain only letters and spaces (2–50 characters).";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    return newErrors;
  };

  // ✅ Input handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ✅ Submit handler (EmailJS)
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_lgd05nr",
        "template_lfnn9t9",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "0u4zXD_bgh8g7yQ-7"
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("❌ Something went wrong while sending your message.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <h3 className="font-semibold text-2xl mb-10 text-center">
              Contact Information
            </h3>

            <div className="space-y-10 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-left">Email</h4>
                  <a
                    href="mailto:josephbudi2611@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    josephbudi2611@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-left">Phone</h4>
                  <a
                    href="tel:081381782019"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62-813-8178-2019
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-left">Location</h4>
                  <p className="text-muted-foreground">
                    Tangerang Selatan, Banten, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-left">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/joseph-budihartanto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/joseph-budihartanto
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-left block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.name ? "border-red-500" : "border-input"
                  } bg-background focus:outline-hidden focus:ring-2 focus:ring-primary`}
                  placeholder="Enter your name here..."
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-left block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.email ? "border-red-500" : "border-input"
                  } bg-background focus:outline-hidden focus:ring-2 focus:ring-primary`}
                  placeholder="Enter your @email.com here..."
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-left block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.message ? "border-red-500" : "border-input"
                  } bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none`}
                  placeholder="Enter your message here..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "power-button w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-md font-medium hover:opacity-90 transition",
                  loading && "opacity-50 cursor-not-allowed"
                )}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {submitted && (
                <p className="text-green-600 text-sm mt-3 text-center">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
