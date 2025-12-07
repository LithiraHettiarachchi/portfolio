import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .send(
        "service_u71v8o2",
        "template_tyhm48a",
        formData,
        "HYQy6I50QCWvzw4Cm"
      )
      .then(
        () => {
          setSubmitStatus('success');
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          setSubmitStatus('error');
          setIsSubmitting(false);
          console.log(error.text);
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800 min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-8 md:mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Thank You For Visiting
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-3 text-white">Let's Connect</h2>
        <p className="text-base md:text-lg text-gray-300">lithirahettiarachchi.info@gmail.com</p>
      </div>

      {/* Success/Error Messages */}
      {submitStatus && (
        <div className={`mb-6 px-6 py-3 rounded-lg text-center font-semibold animate-pulse ${submitStatus === 'success'
            ? 'bg-green-500/20 text-green-300 border border-green-500'
            : 'bg-red-500/20 text-red-300 border border-red-500'
          }`}>
          {submitStatus === 'success' ? '✅ Message Sent Successfully!' : '❌ Something went wrong. Please try again.'}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col space-y-5 md:space-y-6 bg-gray-800/50 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700"
      >
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-5 md:space-y-0">
          <div className="flex-1">
            <label className="block mb-2 text-gray-300 font-medium text-sm md:text-base">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
              placeholder="Your Name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 text-gray-300 font-medium text-sm md:text-base">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
              placeholder="your.email@example.com"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-gray-300 font-medium text-sm md:text-base">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 md:p-4 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-none"
            placeholder="Your message here..."
            required
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="!bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 md:py-4 rounded-full text-white font-semibold text-base md:text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
