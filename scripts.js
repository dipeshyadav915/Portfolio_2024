document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      scroll.scrollTo(targetElement);
    }
  });
});

const originalSrc = document.querySelector(".portimage").getAttribute("src");

document.querySelector(".portimage").addEventListener("mouseover", function () {
  const new_src = "img/portimgcolor.png";
  this.setAttribute("src", new_src);
});

document.querySelector(".portimage").addEventListener("mouseout", function () {
  this.setAttribute("src", originalSrc);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const skillBars = document.querySelectorAll(".skill-bar");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const skillBar = entry.target;
//           const targetWidth = skillBar.getAttribute("data-skill");
//           const line = skillBar.querySelector(".line-2");
//           const percentageElem = skillBar.querySelector(".percentage");

//           // Set initial width to 0
//           line.style.width = "0";
//           percentageElem.textContent = "0%";

//           // Start the animation
//           setTimeout(() => {
//             line.style.width = targetWidth;
//             let width = 0;
//             const targetPercentage = parseInt(targetWidth, 10);
//             const interval = setInterval(() => {
//               width++;
//               percentageElem.textContent = `${width}%`;
//               if (width >= targetPercentage) {
//                 clearInterval(interval);
//               }
//             }, 20); // Adjust the interval timing as needed
//           }, 100);

//           // Stop observing the current target
//           observer.unobserve(skillBar);
//         }
//       });
//     },
//     {
//       threshold: 0.5, // Adjust this value as needed
//     }
//   );

//   skillBars.forEach((skillBar) => {
//     observer.observe(skillBar);
//   });
// });

function updateProgressBar(entry) {
  const progressBar = entry.target; // The progress bar element being observed
  const targetWidth = progressBar.getAttribute("target"); // Get the 'target' attribute value
  console.log(targetWidth);

  // Ensure targetWidth is a valid number
  if (targetWidth) {
    // Set a timeout to delay the width update
    progressBar.style.width = targetWidth; // Set the width dynamically
  }
}

// Create the IntersectionObserver
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the element is in view, update the progress bar
        updateProgressBar(entry);
        // Stop observing once the progress bar has been updated
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the element is visible
);

// Start observing all progress bar elements
const progressBarElements = document.querySelectorAll(
  ".progress-container #progress-bar"
);
progressBarElements.forEach((element) => {
  observer.observe(element);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const progressBar = document.getElementById("progress-bar");
//   console.log(progressBar);
//   if (progressBar) {
//     const targetWidth = progressBar.getAttribute("target"); // Get the 'target' attribute value
//     if (targetWidth && !isNaN(targetWidth)) {
//       progressBar.style.width = targetWidth + "%"; // Set the width dynamically
//     }
//   }
// });
