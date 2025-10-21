"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add email service integration here (e.g., EmailJS, SendGrid)
  };

  return (
    <section id="contact" className="py-12 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-2">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how my
            expertise in full-stack development and DevOps can help achieve your
            goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-4">
            {/* Email */}
            <div className="border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-900 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-0.5 text-sm">
                    Email
                  </h3>
                  <a
                    href="mailto:john.developer@email.com"
                    className="text-gray-400 hover:text-white transition-colors text-xs"
                  >
                    john.developer@email.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-900 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-0.5 text-sm">
                    Phone
                  </h3>
                  <a
                    href="tel:+15551234567"
                    className="text-gray-400 hover:text-white transition-colors text-xs"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-900 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-0.5 text-sm">
                    Location
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Available for Remote Work
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/50">
            <h3 className="text-lg font-semibold text-white mb-4">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black border border-gray-800 rounded text-white placeholder-gray-500 text-xs md:text-sm focus:outline-none focus:border-gray-600 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black border border-gray-800 rounded text-white placeholder-gray-500 text-xs md:text-sm focus:outline-none focus:border-gray-600 transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-black border border-gray-800 rounded text-white placeholder-gray-500 text-xs md:text-sm focus:outline-none focus:border-gray-600 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-black border border-gray-800 rounded text-white placeholder-gray-500 text-xs md:text-sm focus:outline-none focus:border-gray-600 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
