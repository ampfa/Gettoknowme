// Update title easily
const currentTitle = "System Engineer";
document.getElementById("title").textContent = currentTitle;

// Sample projects
const projects = [
 
  {
    name: "TV Finder Quiz",
    description: "A JS-powered quiz to recommend TVs with affiliate links, based on room, budget, and usage.",
    link: "https://tvfinder.github.io/which-tv-should-i-buy/"
  }
  {
    name: "TV Finder Quiz",
    description: "A focused, single-page landing site designed to introduce a product or platform—clear and uncluttered. Consists of a HTML, CSS, and little bit of JS to. First real world project for a business.",
    link: "https://ampfa.github.io/Landingpage/"
  }
];

const projectList = document.getElementById("projectList");

projects.forEach(proj => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${proj.name}</h3>
    <p>${proj.description}</p>
    <a href="${proj.link}" target="_blank">View Project</a>
  `;
  projectList.appendChild(card);
});
