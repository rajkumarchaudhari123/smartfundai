"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Contact Us
      </h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 h-24"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-700">Our Contact Info</h3>
        <p className="text-gray-600">📍 Address: 123 AI Street, Tech City</p>
        <p className="text-gray-600">📞 Phone: +91 9876543210</p>
        <p className="text-gray-600">📧 Email: contact@smartfund.ai</p>
      </div>

      {/* Google Map (Optional) */}
      <div className="mt-6">
        <iframe
          className="w-full h-64 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed/v1/place?q=Tech+City&key=YOUR_GOOGLE_MAPS_API_KEY"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
