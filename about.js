

// Scroll to top button
    document.getElementById("scrollTopBtn").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navMenu");

    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });