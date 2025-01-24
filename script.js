// Theme management
function toggleTheme() {
  const html = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    themeIcon.textContent = "🌙";
  } else {
    html.classList.add("dark");
    themeIcon.textContent = "🌞";
  }
}

// Sample project data - Replace with your actual projects
const projects = [
  {
    title: "ExamManagement",
    description:
      "A comprehensive Java-based desktop application for managing and analyzing university examination records",
    github: "https://github.com/Andrealavi/ExamManagement",
    tags: ["Java", "Java Swing"],
  },
  {
    title: "Todo Web App",
    description: "A simple todo web app made using JavaScript and ExpressJS",
    github: "https://github.com/Andrealavi/Todo-App",
    tags: ["JavaScript", "NodeJS", "MySQL", "Express", "Handlebars"],
  },
  {
    title: "Naive Bayes Spam Filter",
    description: "Adaptive Naive Bayes classifier for spam detection",
    github: "https://github.com/Andrealavi/NaiveBayesSpamFilter",
    tags: ["R", "dplyr", "stringr", "tidyr", "rsample", "yardstick"],
  },
  {
    title: "Hopfield Neural Network",
    description:
      "Python implementation of a Hopfield Neural Network with a graphical user interface for pattern recognition and storage",
    github: "https://github.com/Andrealavi/hopfieldNeuralNetwork",
    tags: ["Python", "Tkinter"],
  },
  {
    title: "Biennale Venezia Database",
    description:
      "The project focuses on implementing a database infrastructure for a film festival, similar to the Venezia Biennale",
    github: "https://github.com/Andrealavi/Biennale_Venezia_Database",
    tags: ["PostgreSQL", "Latex"],
  },
];

// Function to create project cards
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card bg-white rounded-lg shadow-md p-6";

  card.innerHTML = `
        <h3 class="text-xl font-semibold text-gray-800 mb-2">${project.title}</h3>
        <p class="text-gray-600 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
            ${project.tags
              .map(
                (tag) => `
                <span class="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700">
                    ${tag}
                </span>
            `,
              )
              .join("")}
        </div>
        <a href="${project.github}"
           target="_blank"
           class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            View on GitHub
        </a>
    `;

  return card;
}

// Function to initialize the page
function initializePage() {
  const projectsContainer = document.getElementById("projects-container");

  // Create and append project cards
  projects.forEach((project) => {
    const card = createProjectCard(project);
    projectsContainer.appendChild(card);
  });

  // Add smooth scroll behavior for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", initializePage);
