document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll("#gallery .container img");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".modal .close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".section");
    let currentIndex = 0;


    
  // Function to show the selected section
    function showSection(sectionId) {
        sections.forEach((section) => {
            section.style.display = section.id === sectionId ? "block" : "none";
        });
    }

// Add click event to each navigation link
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();  // Prevent default anchor behavior
            const sectionId = link.getAttribute("data-section");
            showSection(sectionId);  // Show selected section
        });
    });
    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    document.addEventListener("DOMContentLoaded", () => {
        const galleryImages = document.querySelectorAll("#gallery .container img");
    
        galleryImages.forEach((img) => {
            img.addEventListener("click", () => {
                if (img.id === "devi-photo") {
                    // Redirect to gallery.html only if it's the devi.png image
                    window.location.href = "DeviGallery.html";
                    
                } else {
                    // Optional: Add other behavior for other images if needed
                    console.log("Clicked image:", img.alt);
                }
            });
        });
    });
    // Show next image
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateModalImage();
    });

    // Show previous image
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateModalImage();
    });

    // Update modal with the current image
    function updateModalImage() {
        modalImg.style.opacity = 0;  // Start fade-out
        setTimeout(() => {
            modalImg.src = galleryImages[currentIndex].src;
            captionText.innerHTML = galleryImages[currentIndex].alt;
            modalImg.style.opacity = 1;  // Fade back in
        }, 300);
    }

    // Keyboard controls for modal navigation
    document.addEventListener("keydown", (event) => {
        if (modal.style.display === "flex") {
            if (event.key === "ArrowRight") {
                nextBtn.click();  // Show next image
            } else if (event.key === "ArrowLeft") {
                prevBtn.click();  // Show previous image
            } else if (event.key === "Escape") {
                modal.style.display = "none";  // Close modal
            }
        }
    });
});
