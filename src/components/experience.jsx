import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Experience() {
    const [showDetails, setShowDetails] = useState(false);

    const experience = {
        company: "Sutra Technologies Pvt Limited",
        position: "Intern Software Engineer",
        period: "2023 - 2024",
        achievements: [
            "Enhanced Travo management dashboard using React.js, TypeScript, Spring Boot, and PostgreSQL, enabling faster feature delivery.",
            "Optimized bus seat booking logic in React Native, improving reliability and reducing user complaints by 30%.",
            "Collaborated with the UX team to resolve complex UI/UX issues, resulting in smoother workflows across mobile and web apps.",
            "Automated GTFS dataset processing with Python (Pandas, NumPy), reducing manual work by 70% and enabling onboarding of 100+ new routes.",
            "Implemented REST APIs with Spring Boot, ensuring seamless integration between front-end components and backend systems.",
            "Containerized applications with Docker improve deployment consistency and reduce server-side downtime.",
            "Maintained CI/CD pipelines on GitLab for automated testing and deployment, accelerating release cycles."
        ]
    };

    return (
        <section
            id="experience"
            className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1c2c4d] to-[#141b2c] text-white px-6 py-12"
        >
            <h2 className="text-5xl font-bold text-white mb-12">Work Experience</h2>

            <AnimatePresence mode="wait">
                {!showDetails ? (
                    <motion.div
                        key="tile"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setShowDetails(true)}
                        className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-16 text-center max-w-4xl w-full hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-4xl font-bold mb-4">
                            {experience.company}
                        </h3>
                        <p className="text-2xl font-semibold mb-2 opacity-90">
                            {experience.position}
                        </p>
                        <p className="text-xl opacity-80">{experience.period}</p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-5xl w-full text-left bg-gray-800/70 rounded-3xl p-12"
                    >
                        <button
                            onClick={() => setShowDetails(false)}
                            className="flex items-center gap-2 px-6 py-3 mb-8 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                        >
                            <ArrowLeft size={20} /> Back
                        </button>

                        <div className="text-center mb-10">
                            <h3 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {experience.company}
                            </h3>
                            <p className="text-2xl font-semibold text-gray-200 mb-2">
                                {experience.position}
                            </p>
                            <p className="text-lg text-gray-400 font-medium">
                                {experience.period}
                            </p>
                        </div>

                        <div className="space-y-5">
                            <h4 className="text-2xl font-semibold text-gray-100 mb-4">Key Achievements</h4>
                            {experience.achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                                >
                                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-150 transition-transform duration-300"></div>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {achievement}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
