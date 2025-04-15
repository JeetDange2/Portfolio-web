// siedebar toggle button
const toggleButton = document.getElementById('toggleSidebar');
const sidebarWrapper = document.getElementById('sidebar');
const sidebarPanel = document.querySelector('.sidebar_open');

toggleButton.addEventListener('click', () => {
    sidebarWrapper.classList.toggle('active'); 
    sidebarPanel.classList.toggle('active');   
});

sidebarWrapper.addEventListener('click', (e) => {
    if (e.target === sidebarWrapper) {
        sidebarWrapper.classList.remove('active');
        sidebarPanel.classList.remove('active');
    }
});

// close button in the sidebar
const closeButton = document.getElementById('closeSidebar');

closeButton.addEventListener('click', () => {
  sidebarWrapper.classList.remove('active');
  sidebarPanel.classList.remove('active');
});

// for capsules in the sidebar along with the links
const sections = document.querySelectorAll("#home, #about, #experience, #projects, #contact");
const navLinks = document.querySelectorAll(".nav-item a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((el) => {
    const offsetTop = el.offsetTop - 120;
    if (window.scrollY >= offsetTop) {
      current = el.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

function downloadCV(){
    alert("CV is not uploaded yet!");
}

// img tilt and rotate
const card = document.querySelector('.img');
const container = document.querySelector('.img-inner');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;

  const rotateX = ((y - centerY) / centerY) * 15;
  const rotateY = ((x - centerX) / centerX) * 15;

  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});


// for svg animation

document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector("#about");
  const progressCircles = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              progressCircles.forEach(circle => {
                  const fill = circle.querySelector(".fill");
                  const progress = +circle.dataset.progress;
                  const circumference = 2 * Math.PI * 35;

                  // Animate from 100% to actual percentage
                  const offset = circumference - (progress / 100) * circumference;
                  fill.style.strokeDashoffset = offset;
              });

              observer.unobserve(skillsSection); // Only once
          }
      });
  }, { threshold: 0.5 });

  observer.observe(skillsSection);
});
