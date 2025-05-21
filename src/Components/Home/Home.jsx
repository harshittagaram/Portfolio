import React, { useState } from "react";
import CivicReport from "../../assets/Civic_Report.png";
import FoodDelivery from "../../assets/Food_Delivery.png";

const Home = () => {
  // State for lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    image: "",
    githubLink: "",
    alt: "",
  });

  // Function to open lightbox
  const openLightbox = (image, githubLink, alt) => {
    setSelectedImage({ image, githubLink, alt });
    setIsLightboxOpen(true);
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage({ image: "", githubLink: "", alt: "" });
  };

  return (
    <main className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-32">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col-reverse md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
              Hi, I'm <span className="text-indigo-500">Harshit Tagaram</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              A Java Full Stack Developer crafting web applications
              using{" "}
              <span className="text-indigo-400 font-semibold">Spring Boot</span>{" "}
              and <span className="text-indigo-400 font-semibold">React</span>.
              Explore my work to see how I bring ideas to life with efficient
              backend and interactive frontend solutions.
            </p>
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition"
            >
              View My Work
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/formal.jpg"
              alt="Harshit Tagaram"
              className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate Java Full Stack Developer with hands-on experience
            in building complete web applications. I specialize in backend
            development using Spring Boot and frontend development using React.
            I enjoy solving real-world problems and building user interfaces
            that enhance digital experiences.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <ul className="space-y-6 text-gray-300">
            <li>
              <h3 className="text-2xl font-semibold text-white">
                Java Full Stack Intern – Edunet Software and Services
              </h3>
              <p className="text-sm text-indigo-400">June 2024 – July 2024</p>
              <p>
                Learned and applied core Java and Spring Boot fundamentals in a
                hands-on project environment. Built RESTful APIs using Spring
                Boot. Gained experience working with frontend tools like React
              </p>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <a
                href="https://github.com/harshittagaram/CivicReportHub"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                  Civic Tech Cleanliness Report System
                </h3>
              </a>
              <img
                src={CivicReport}
                alt="Civic Tech Cleanliness Report System"
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() =>
                  openLightbox(
                    CivicReport,
                    "https://github.com/harshittagaram/CivicReportHub",
                    "Civic Tech Cleanliness Report System Screenshot"
                  )
                }
              />
              <p className="text-gray-300">
                Allows users to report environmental issues using photos and
                location. Admin panel built to manage submissions.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Stack: React, Spring Boot, MongoDB, AWS S3
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <a
                href="https://github.com/harshittagaram/Feed-Me-Food-Delivery-App"
                target="_blank"
                rel="noopener noreferrer"
                className="block BUFFER"
              >
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                  Food Delivery App
                </h3>
              </a>
              <img
                src={FoodDelivery}
                alt="Food Delivery App"
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() =>
                  openLightbox(
                    FoodDelivery,
                    "https://github.com/harshittagaram/Feed-Me-Food-Delivery-App",
                    "Food Delivery App Screenshot"
                  )
                }
              />
              <p className="text-gray-300">
                Built a full-stack app for placing food orders with admin-side
                controls and S3 file uploads.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Stack: React, Spring Boot, MySQL, AWS
              </p>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl w-full flex flex-col items-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <a
                href={selectedImage.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition"
              >
                View on GitHub
              </a>
              <button
                className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
                onClick={closeLightbox}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Education Section */}
        <section id="education" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <ul className="space-y-6 text-gray-300">
            <li>
              <h3 className="text-2xl font-semibold text-white">
                B.Tech in Computer Science – SRM University-AP
              </h3>
              <p className="text-sm text-indigo-400">2022 – 2026</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold text-white">
                Class 12th – SSC Board, KLR Institute, Palvoncha
              </h3>
              <p className="text-sm text-indigo-400">2020 – 2022</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold text-white">
                Class 10th – CBSE Board, Atomic Energy Central School, Manuguru
              </h3>
              <p className="text-sm text-indigo-400">2011 – 2020</p>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-4 text-white">Contact Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>

          <form
            action="https://formspree.io/f/xdkgbbkv"
            method="POST"
            className="space-y-6 max-w-xl"
          >
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-gray-400 space-y-1">
            <p>
              Email:{" "}
              <a
                href="mailto:harshit_tagaram@srmap.edu.in"
                className="text-blue-400 underline"
              >
                harshit_tagaram@srmap.edu.in
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/harshit-tagaram-9922312a5/"
                className="text-blue-400 underline"
              >
                linkedin.com/in/harshit
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/harshittagaram"
                className="text-blue-400 underline"
              >
                github.com/harshit
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
