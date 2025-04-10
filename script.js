// siedebar toggle button
const toggleButton = document.getElementById('toggleSidebar');
const sidebarWrapper = document.getElementById('sidebar');
const sidebarPanel = document.querySelector('.sidebar_open');

toggleButton.addEventListener('click', () => {
    sidebarWrapper.classList.toggle('active'); // show/hide overlay
    sidebarPanel.classList.toggle('active');   // slide in/out panel
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