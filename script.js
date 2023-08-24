document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    const smallCursorLinks = document.querySelectorAll(".small-cursor, .tab, .project-link");

    smallCursorLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("small-cursor");
        });
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("small-cursor");
        });
    });

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle fading in project text when visible
    function handleVisibility() {
        const projectTextElements = document.querySelectorAll(".project-text1, .project-text2, .project-text3, .project-text4");
        projectTextElements.forEach((el) => {
            if (isElementInViewport(el)) {
                el.style.opacity = 1;
            }
        });
    }

    // Attach the handleVisibility function to the scroll event
    window.addEventListener("scroll", handleVisibility);

    // Trigger the initial check when the page loads
    handleVisibility();
});
