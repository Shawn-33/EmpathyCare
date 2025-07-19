import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as LabelPrimitive from "@radix-ui/react-label";
import emailjs from 'emailjs-com';

// Simple Radix Input component
function RadixInput(props) {
  return (
    <input
      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-400 focus:ring-blue-400 sm:text-sm mb-4"
      {...props}
    />
  );
}

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.send("service_nz375t9", "template_oavri0b", {
      name: form.name,
      message: form.message,
      from_name: form.name, // using form.name for from_name
      from_email: form.email, // using form.email for from_email
      subject: form.subject,
      phone: form.phone,
    }, "6a8Bb30UhId5HdhfO") // <-- Add your EmailJS public key here
    .then((result) => {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", phone: "", message: "" });
    }, (error) => {
      setStatus("Failed to send message. Please try again.");
      console.log(error);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col md:flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8 gap-12 w-full max-w-7xl mx-auto"
    >
      <div className='flex md:flex-row flex-col gap-8 justify-center items-start w-full max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full"
        >
          <div className="h-[400px] overflow-y-auto pr-2">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Our Hours</h1>
          <p className="text-gray-700 mb-4">
            Our office is staffed <span className="font-semibold">Monday to Friday 8.30am – 5.00pm</span>. The office is open during these hours and does not close for lunch.
          </p>
          <div className="mb-4">
            <p className="font-semibold text-gray-800">Monday to Friday:</p>
            <p className="text-gray-600">8.30am to 5.00pm</p>
          </div>
          <p className="text-gray-700 mb-4">
            The out-of-hours service forms our on-call duty and is available to staff and clients in emergencies, where a response or guidance is required.
          </p>
          <div className="mb-4">
            <p className="font-semibold text-gray-800">Out of Hours:</p>
            <p className="text-gray-600">5.00pm to 8.30am Monday to Friday</p>
            <p className="text-gray-600">All day Saturday and Sunday</p>
          </div>
          <p className="text-gray-700 mb-2">
            During the out-of-hours service, we are available to staff and clients to provide advice and guidance on their health and wellbeing.
          </p>
          <p className="text-gray-700 mb-2">
            We are also available to provide support to our clients and their families in the event of an emergency.
          </p>
          <p className="text-gray-700">
            We are committed to providing the highest level of care and support to our clients and their families, and our out-of-hours service is an important part of that commitment.
          </p>
          </div>
        </motion.div>
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full flex flex-col items-center"
        >
          <div className="h-[400px] overflow-y-auto pr-2">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-2 text-center">
            If you have any questions or concerns, please do not hesitate to contact us.
          </p>
          <p className="text-gray-700 mb-2 text-center">
            We are here to help you and your family, and we will do our best to provide you with the support and care you need.
          </p>
          <p className="text-gray-700 mb-6 text-center">
            Thank you for choosing our services.
          </p>
          <a
            href="mailto:info@yourdomain.com"
            className="inline-block px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition-colors duration-300"
          >
            Email Us
          </a>
          <div className="mt-6 flex flex-col items-center">
            <span className="font-semibold text-gray-800">Phone:</span>
            <a href="tel:+441234567890" className="text-blue-600 font-bold text-lg hover:underline">
              +44 1234 567890
            </a>
          </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-blue-50 rounded-2xl shadow-xl p-8 max-w-md w-full border border-blue-200"
      >
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Send a message</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <LabelPrimitive.Root htmlFor="name" className="mb-1 block text-blue-700">Name</LabelPrimitive.Root>
              <RadixInput id="name" name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required className="focus:border-blue-400 focus:ring-blue-400" />
            </div>
            <div>
              <LabelPrimitive.Root htmlFor="email" className="mb-1 block text-blue-700">Email</LabelPrimitive.Root>
              <RadixInput id="email" name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="focus:border-blue-400 focus:ring-blue-400" />
            </div>
            <div>
              <LabelPrimitive.Root htmlFor="subject" className="mb-1 block text-blue-700">Subject</LabelPrimitive.Root>
              <RadixInput id="subject" name="subject" type="text" placeholder="Write the subject" value={form.subject} onChange={handleChange} className="focus:border-blue-400 focus:ring-blue-400" />
            </div>
            <div>
              <LabelPrimitive.Root htmlFor="phone" className="mb-1 block text-blue-700">Phone Number</LabelPrimitive.Root>
              <RadixInput id="phone" name="phone" type="tel" placeholder="Your Phone" value={form.phone} onChange={handleChange} className="focus:border-blue-400 focus:ring-blue-400" />
            </div>
          </div>
          <div>
            <LabelPrimitive.Root htmlFor="message" className="mb-1 block text-blue-700">Message</LabelPrimitive.Root>
            <textarea
              id="message"
              name="message"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-400 focus:ring-blue-400 sm:text-sm mb-4"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition-colors duration-300"
          >
            Send Message
          </button>
          {status && (
            <div className="mt-4 text-blue-700 text-center">{status}</div>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;