// Typed.js Initialization
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".role", {
    strings: [
      "Mega Star Arts Classes",
      "मेगा स्टार आर्ट्स क्लासेज़",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

  // For teacher images
  document.querySelectorAll("#teachers .teacher-card img").forEach(img => {
    img.addEventListener("click", () => openModal("teacher-modal", img.src));
  });

  // For gallery images
  document.querySelectorAll("#photos .photo-scroll-container img").forEach(img => {
    img.addEventListener("click", () => openModal("gallery-modal", img.src));
  });
});

// Function to open correct modal
function openModal(modalId, src) {
  const modal = document.getElementById(modalId);
  const modalImg = modal.querySelector("img");
  modal.style.display = "block";
  modalImg.src = src;
}

// Function to close any modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
