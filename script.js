// javascript for container

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const contentList = document.getElementById("contentList");
    const contentDisplay = document.getElementById("contentDisplay");

    menuIcon.addEventListener("click", () => {
        const isMenuHidden = contentList.style.transform === "translateX(-100%)";

        if (isMenuHidden) {
            contentList.style.transform = "translateX(0)";
            contentDisplay.style.marginLeft = "200px";
        } else {
            contentList.style.transform = "translateX(-100%)";
            contentDisplay.style.marginLeft = "0";
        }
    });

    const contentItems = document.querySelectorAll(".content-item");

    contentItems.forEach((item) => {
        item.addEventListener("click", () => {
            const contentId = item.getAttribute("data-content");

            // Hide all content
            document.querySelectorAll(".content").forEach((content) => {
                content.style.display = "none";
            });

            // Show the selected content
            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                selectedContent.style.display = "block";
            }
        });
    });

    // Show the initial content
    document.getElementById("content1").style.display = "block";
});




// javascript for navbar

   // Initially show the first section
const firstSection = document.getElementById("section1");
firstSection.style.display = "block";

// Add a click event listener to each navbar link
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        const targetId = link.getAttribute("href").substring(1); // Get the target section's ID
        const targetSection = document.getElementById(targetId);

        // Hide all sections
        document.querySelectorAll("div[id^='section']").forEach((section) => {
            section.style.display = "none";
        });

        // Show the target section
        targetSection.style.display = "block";
    });
});




