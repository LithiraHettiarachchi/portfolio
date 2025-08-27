export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "GridSense",
      desc: "An energy consumption prediction system integrates traffic and weather data with demand forecasting to optimize EV station allocation and improve user guidance.",
      tech: ["LSTM", "Random Forest", "SARIMAX"],
      link: "https://github.com/LithiraHettiarachchi/gridSense",
    },
    {
      id: 2,
      title: "PRETTIFY",
      desc: "A face beautification application to detect and remove acne and scars in real time, using facial landmark detection, digital inpainting.",
      tech: ["Python", "CNN", "MongoDB"],
      link: "https://github.com/kaveenSP/prettify",
    },
    {
      id: 3,
      title: "Skin Consultation System",
      desc: "An application to manage dermatologist consultations, including patient registration, doctor scheduling, and consultation booking.",
      tech: ["Java", "Swing", "Object Oriented Programming (OOP)"],
      link: "https://github.com/LithiraHettiarachchi/skinConsultationCenter",
    },
    {
      id: 4,
      title: "AgriVerse",
      desc: "An application that forecasts Sri Lanka’s paddy production using machine learning, based on data from 1979 to 2024.",
      tech: ["Python", "Mchine Learning", "FastAPI"],
      link: "https://github.com/LithiraHettiarachchi/AgriVerse_RicePrediction",
    },
    {
      id: 5,
      title: "Cruise Ship Management System",
      desc: "A system to manage cruise ship operations, including booking, scheduling, and customer management.",
      tech: ["Java", "Object Oriented Programming (OOP)"],
      link: "https://github.com/LithiraHettiarachchi/cruiseShipManagement",
    },
    {
      id: 6,
      title: "Gesture Recognition System",
      desc: "A system to identify hand gestures of english alphabet and interpret corresponding letters.",
      tech: ["Python", "OpenCV", "TensorFlow", "Matplotlib", "Keras"],
      link: "https://github.com/LithiraHettiarachchi/gestureRecognitionCNN",
    },
  ];

  return (
    <section id="projects" 
    className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800 flex flex-col items-center py-16 px-6">
      <h2 className="text-5xl font-bold text-white mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-400/80 via-blue-300/70 via-blue-200/60 to-blue-100/50 
                !text-white rounded-2xl flex flex-col justify-between 
                h-64 p-6 shadow-lg transition-transform duration-300 
                hover:scale-105 hover:shadow-2xl hover:from-blue-500/90 hover:via-blue-300/60 hover:to-blue-100/50"
          >
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-base opacity-90">{project.desc}</p>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold">Tech Stack:</p>
              <p className="text-lg opacity-90">{project.tech.join(" • ")}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
