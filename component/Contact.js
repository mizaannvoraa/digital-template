"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [urlParams, setUrlParams] = useState({});

  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus("");
      }, 5000);
      return () => clearTimeout(timer); // cleanup if unmounted
    }
  }, [submitStatus]);
  // Extract URL parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const extractedParams = {
      utm_source: params.get('utm_source') || '',
      utm_ad: params.get('utm_ad') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_placement: params.get('utm_placement') || '',
      utm_keyword: params.get('utm_keyword') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      gclid: params.get('gclid') || '',
      fbclid: params.get('fbclid') || '',
      referrer: document.referrer || '',
      page_url: window.location.href || '',
    };
    setUrlParams(extractedParams);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Prepare data to send to Google Sheets
      const submissionData = {
        ...formData,
        ...urlParams,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
      };

      // Replace with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbwkLNMPfXLmFr3wNovWNyez8V4ewhOeZ58UjBIf5ZRAyCHL0b1OXJZY4a0tXtXUCUvs/exec', {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // Since mode is 'no-cors', we can't read the response
      // We'll assume success if no error is thrown
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          className="border-l-4 border-red-500 pl-4 mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact us.
          </h2>
          <p className="text-red-600 font-semibold mt-1">get in touch</p>
        </motion.div>

        <motion.div
          className="md:mt-18 mt-7 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Info */}
          <div className="space-y-10">
            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <Mail className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-black">marketing@thinkmint.in</p>
                <p className="text-sm !text-gray-500">Email</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-4" variants={fadeInUp}>
              <MapPin className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-black">
                  Andheri, Mumbai
                </p>
                <p className="text-sm text-gray-500">Address</p>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block text-black w-full border-b placeholder:text-gray-400 border-gray-400 bg-transparent focus:outline-none focus:border-red-600 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block text-black w-full border-b placeholder:text-gray-400 border-gray-400 bg-transparent focus:outline-none focus:border-red-600 py-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How can I help you? *
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="mt-1 block text-black w-full border-b placeholder:text-gray-400 border-gray-400 bg-transparent focus:outline-none focus:border-red-600 py-2"
                placeholder="Write your message..."
              ></textarea>
            </div>
            
            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="text-green-600 font-medium">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-600 font-medium">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 inline-block font-semibold px-8 py-3 rounded-full transition ${
                isSubmitting 
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;