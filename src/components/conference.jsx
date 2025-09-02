import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ConferenceSection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
      id="conference"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12"
    >
      <h2 className="text-5xl font-bold text-white mb-12">
        Research & Conference
      </h2>

      <AnimatePresence mode="wait">
        {!showDetails ? (
          <motion.div
            key="tile"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={() => setShowDetails(true)}
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-16 text-center max-w-4xl w-full"
          >
            <h2 className="text-4xl font-bold">
              AMCEHA 2025 – ADVANCED MATERIALS FOR CLEAN ENERGY AND HEALTH
              APPLICATIONS
            </h2>
            <p className="mt-6 text-xl opacity-90">International Conference</p>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl w-full text-center bg-gray-800/70 rounded-3xl p-12"
          >
            <button
              onClick={() => setShowDetails(false)}
              className="flex items-center gap-2 px-6 py-3 mb-8 bg-gray-700 rounded-lg hover:bg-gray-600 transition mx-auto"
            >
              <ArrowLeft size={20} /> Back
            </button>

            <h2 className="text-4xl font-bold mb-6">
              AMCEHA 2025 – International Conference on Advanced Materials for
              Clean Energy and Health Applications
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              <strong>Presentation:</strong> An Analysis of Machine Learning and Time Series for Predicting EV 
Charging Demand with Traffic and Weather Data 
            </p>
            <p className="text-gray-400 mb-2">📍 Colombo, Sri Lanka</p>
            <p className="text-gray-400 mb-6">📅 March 2025</p>

            <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
              I presented my research abstract focusing on integrating traffic
              data with energy consumption forecasting at EV charging stations.
              This work highlights how real-time traffic patterns can influence
              charging demand and optimal allocation strategies for sustainable
              EV infrastructure.
            </p>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-md hover:scale-105 transform transition duration-300 text-lg !text-white"
            >
              View Abstract / Slides
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
