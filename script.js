// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// BOOK HOVER ANIMATION
const books = document.querySelectorAll(".book-card");
books.forEach(book => {
  book.addEventListener("mouseenter", () => {
    book.style.transform = "scale(1.08) translateY(-10px)";
    book.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
  });
  book.addEventListener("mouseleave", () => {
    book.style.transform = "scale(1) translateY(0)";
    book.style.boxShadow = "12px 12px 25px rgba(0,0,0,0.25)";
  });
});

// BUTTON HOVER ANIMATIONS
const getReadsBtn = document.querySelector(".get-reads-btn");
const sendBtn = document.querySelector(".main-btn");

getReadsBtn.addEventListener("mouseenter", () => { getReadsBtn.style.transform = "scale(1.12)"; });
getReadsBtn.addEventListener("mouseleave", () => { getReadsBtn.style.transform = "scale(1)"; });

sendBtn.addEventListener("mouseenter", () => { sendBtn.style.transform = "scale(1.1)"; });
sendBtn.addEventListener("mouseleave", () => { sendBtn.style.transform = "scale(1)"; });

// SCROLL TO TOP
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if(window.scrollY > 300){
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top:0, behavior:"smooth" });
});

// DARK/LIGHT MODE
const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
// CONTACT FORM ALERT
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function(e){
    e.preventDefault(); // Prevent actual form submission
    alert("✅ Your message has been sent successfully!");
    contactForm.reset(); // Clear the form after submission
});
