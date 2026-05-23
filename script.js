const projects = {
  1: {
    title: "Voice Prompting @ Chimney Rock",
    videoId: "6Nmy-vJszR4",
  },
  2: {
    title: "Creative Partner @ Kitty Hawk",
    videoId: "Sxb9sQjsVgs",
  },
  3: {
    title: "Vibe Coding @ Biltmore Estate",
    videoId: "YvTX0937FnM",
  },
  4: {
    title: "Info to Presentation @ Merchant's Millpond",
    videoId: "bQWjXHomFxk",
  },
  5: {
    title: "Content Creation @ Linville Gorge",
    videoId: "yYfLEkFk5hs",
  },
  6: {
    title: "Voice Agent @ Pilot Mountain",
    videoId: "kBCOX5FLHaM",
  },
  7: {
    title: "Project Portfolio @ Cape Hatteras",
    videoId: "wyQcw2oApeI",
  },
};

const sidebar = document.querySelector("[data-sidebar]");
const backdrop = document.querySelector("[data-backdrop]");
const video = document.querySelector("#project-video");
const projectButtons = Array.from(document.querySelectorAll("[data-day]"));

function closeMenu() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("open");
}

function openMenu() {
  sidebar.classList.add("open");
  backdrop.classList.add("open");
}

document.querySelector("[data-open-menu]").addEventListener("click", openMenu);
document.querySelector("[data-close-menu]").addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.day];

    projectButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    video.src = `https://www.youtube.com/embed/${project.videoId}`;
    video.title = project.title;
    closeMenu();
  });
});
