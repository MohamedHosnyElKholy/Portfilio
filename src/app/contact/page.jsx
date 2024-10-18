"use client";
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";

function ContactForm() {
  const [state, handleSubmit] = useForm("xjkbqraa");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event); // إرسال البيانات
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Successfully sent!");
      setFormData({ email: "", phone: "", message: "" }); // إعادة تعيين الحقول
    }
  }, [state.succeeded]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col max-w-md gap-4 p-6 bg-white rounded-lg shadow-lg w-full"
    >
      <label htmlFor="email" className="font-semibold">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="phone" className="font-semibold">Your Phone</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        required
        value={formData.phone}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <label htmlFor="message" className="font-semibold">Your Message</label>
      <textarea
        id="message"
        name="message"
        required
        value={formData.message}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Send
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <ContactForm />
    </div>
  );
}

export default App;
