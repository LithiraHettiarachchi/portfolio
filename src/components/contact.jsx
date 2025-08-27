import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    emailjs
      .send(
        "service_u71v8o2", // EmailJS service ID
        "template_tyhm48a", // EmailJS template ID
        formData,
        "HYQy6I50QCWvzw4Cm" // EmailJS public key
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Something went wrong ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">Thank You For Visiting</h1>
      <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
      <p className="mb-6">Via lithirahettiarachchi.info@gmail.com</p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col space-y-4"
      >
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="!bg-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:!bg-blue-400"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
