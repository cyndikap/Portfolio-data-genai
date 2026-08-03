document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));

  const projectSearch = document.getElementById("projectSearch");
  const projectCols = Array.from(document.querySelectorAll(".project-col"));
  const projectCards = Array.from(document.querySelectorAll(".project-card"));
  const projectCount = document.getElementById("projectCount");

  const updateProjectCount = () => {
    const visibleProjects = projectCols.filter((col) => col.style.display !== "none").length;
    projectCount.textContent = String(visibleProjects);
  };

  updateProjectCount();

  if (projectSearch) {
    projectSearch.addEventListener("input", (event) => {
      const query = event.target.value.trim().toLowerCase();

      projectCards.forEach((card, index) => {
        const content = card.textContent.toLowerCase();
        const tags = (card.getAttribute("data-tags") || "").toLowerCase();
        const isMatch = content.includes(query) || tags.includes(query);
        projectCols[index].style.display = isMatch ? "block" : "none";
      });

      updateProjectCount();
    });
  }
});
