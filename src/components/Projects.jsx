import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Photo-Management-App ",
    description: "A full-stack Photo-Management-App with React and Node.js",
    image: "https://i.ibb.co/CzFqpfz/Screenshot-2024-12-05-105404.png",
    technologies: ["React", "Node.js", "MongoDB", "Postman API", "Express.js"],
    liveUrl: "https://photo-managament-app.netlify.app/",
  },
  {
    title: "API-Intergration-with-React-Vite.",
    description: "An e-commerce solution with React and API Integration",
    image: "https://i.ibb.co/RB4CMZ2/Screenshot-2024-12-05-104128.png",
    technologies: ["React.js", "API Integration"],
    liveUrl: "https://api-intergration-with-react-vite-1v68.vercel.app/",
  },
  {
    title: "Note-Taking-App ",
    description: "A Note-Taking-App with React.js",
    image: "https://i.ibb.co/cYvz065/Screenshot-2024-12-05-104445.png",
    technologies: ["React.js"],
    liveUrl: "https://note-taking-app-chi-pied.vercel.app/",
  },
  {
    title: "MyDharamMusic",
    description: "Generator thoughts and playlists",
    image: "https://i.ibb.co/vs7FGjj/Screenshot-2024-12-05-105226.png",
    technologies: ["HTML", "CSS", "JavaScript", "No Code Tool"],
    liveUrl: "https://mydharammusic.me/",
  },
  {
    title: "Github-Profile-Clone",
    description:
      "An AI-powered chat application with natural language processing",
    image: "https://i.ibb.co/yp9NmwB/Screenshot-2024-12-05-103605.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://github-profile-clone-wheat.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
