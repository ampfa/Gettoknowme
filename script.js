// Update title easily
const currentTitle = "System Engineer";
document.getElementById("title").textContent = currentTitle;

// Sample projects
const projects = [
  {
    name: "TV Finder Quiz",
    description: "A JS-powered quiz to recommend TVs with affiliate links, based on room, budget, and usage.",
    link: "https://tvfinder.github.io/which-tv-should-i-buy/",
    year: "2025"
  },
  {
    name: "Landing Page",
    description: "A focused, single-page landing site designed to introduce a product or platform—clear and uncluttered. Consists of HTML, CSS, and a little bit of JS. First real-world project for a business.",
    link: "https://ampfa.github.io/Landingpage/",
    year: "2024"
  }
];
const projectList = document.getElementById("projectList");

projects.forEach((project, index) => {
  const item = document.createElement("div");
  item.className = "timeline-item";
  item.style.animationDelay = `${index * 0.2}s`; // stagger animations

  item.innerHTML = `
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <span class="year">${project.year}</span>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    </div>
  `;

  projectList.appendChild(item);
});
