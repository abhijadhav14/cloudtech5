import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { submitForm } from "@/utils/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    graduation: "",
    passoutYear: "",
    experienceLevel: "fresher",
    yearsOfExperience: "",
    currentCompany: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare data for submission
    const dataToSubmit = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      graduation: formData.graduation,
      passoutYear: formData.passoutYear,
      experienceLevel: formData.experienceLevel,
      yearsOfExperience: formData.experienceLevel === "experienced" ? formData.yearsOfExperience : "",
      currentCompany: formData.experienceLevel === "experienced" ? formData.currentCompany : "",
      message: formData.message,
    };

    console.log("Submitting form data:", dataToSubmit);

    // Submit to API
    submitForm(dataToSubmit)
      .then((response) => {
        console.log("Form submitted successfully:", response);
        alert("Thank you for your inquiry! We'll get back to you soon.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          program: "",
          graduation: "",
          passoutYear: "",
          experienceLevel: "fresher",
          yearsOfExperience: "",
          currentCompany: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert(`Failed to submit form: ${error.message || 'Unknown error'}`);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient hero-pattern py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="section-title mb-8">
                Contact <span className="gradient-text">Information</span>
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 79750 48408</p>
                    <p className="text-muted-foreground">+91 97410 99057</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email  </h3>
                    <p className="text-muted-foreground">cloudtechsolutions2026@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card rounded-2xl p-6 card-hover">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Quick Connect</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://wa.me/917975048408" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">WhatsApp</span>
                  </a>
                  <a 
                    href="tel:+917975048408"
                    className="flex items-center gap-2 px-4 py-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-title mb-8">
                Fill This <span className="text-blue-500">Form</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                {/* Program */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Interested Program
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a program</option>
                    <option value="SAP">SAP</option>
                    <option value="cloud">Cloud</option>
                    <option value="devops">DevOps</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Python">Python</option>
                  </select>
                </div>

                {/* Graduation */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Graduation Field
                  </label>
                  <input
                    type="text"
                    name="graduation"
                    value={formData.graduation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., B.Tech, B.Com, BSc"
                  />
                </div>

                {/* Passout Year */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Passout Year
                  </label>
                  <input
                    type="number"
                    name="passoutYear"
                    value={formData.passoutYear}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="2024"
                    min="1990"
                    max={new Date().getFullYear() + 5}
                  />
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Experience Level
                  </label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="fresher">Fresher</option>
                    <option value="experienced">Experienced</option>
                  </select>
                </div>

                {/* Conditional Fields for Experienced */}
                {formData.experienceLevel === "experienced" && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Years of Experience
                      </label>
                      <input
                        type="number"
                        name="yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., 3"
                        min="0"
                        max="60"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Current Company
                      </label>
                      <input
                        type="text"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Company name"
                      />
                    </div>
                  </>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Contact;