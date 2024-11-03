document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".MainMemberGallery img");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".modal .close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentIndex = 0;

    // Open modal on image click
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";  // Show modal
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
            currentIndex = index;
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
