const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

window.onload = function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const keyword = document.querySelector("#keyword").value;
    const location = document.querySelector("#location").value;
    fetch("jobs-data.json")
      .then(response => response.json())
      .then(data => {
        const filteredJobs = data.jobs.filter(job => {
          return job.title.includes(keyword) && job.location.includes(location);
        });
        const jobsList = document.querySelector("#jobsList");
        jobsList.innerHTML = "";
        filteredJobs.forEach(job => {
          const newListItem = document.createElement("li");
          newListItem.innerHTML = `
          <h3>${job.title}<h3> 
          <p>${job.company}</p>
          <p>${job.location}</p>
          <p>${job.experience}</p>
          <a href="${job.apply_link}">Apply now</a>
          `
          jobsList.appendChild(newListItem);
        });
      });
  });
}
  




