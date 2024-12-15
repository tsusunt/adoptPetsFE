// info-menu dan simple quote
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// info-menu nambah angka
function animateValue(id, start, end, duration) {
  let element = document.getElementById(id);
  let range = end - start;
  let stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  let increment = end > start ? 1 : -1;
  let timer = setInterval(function () {
    current += increment;
    element.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

window.onload = function () {
  animateValue("volunteerCount", 0, 500, 2000);
  animateValue("dogsRescuedCount", 0, 169, 2000);
  animateValue("catsRescuedCount", 0, 348, 2000);
};

document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="btnradio"]');
  const petCards = document.querySelectorAll(".data-pets .col-md-4");

  // Function to filter cards based on the selected radio
  function filterCards() {
    const selectedValue = document.querySelector('input[name="btnradio"]:checked').id;

    petCards.forEach((card) => {
      const petType = card.getAttribute("data-type");

      // Show "All", "Cat" or "Dog" based on selection
      if (selectedValue === "btnradio3") {
        // "All" - Show all pets
        card.style.display = "block";
      } else if (selectedValue === "btnradio1" && petType === "cat") {
        // "Cat" - Show only cat pets
        card.style.display = "block";
      } else if (selectedValue === "btnradio2" && petType === "dog") {
        // "Dog" - Show only dog pets
        card.style.display = "block";
      } else {
        // Hide other pets
        card.style.display = "none";
      }
    });
  }

  // Event listener to trigger the filter whenever a radio button is selected
  radios.forEach((radio) => {
    radio.addEventListener("change", filterCards);
  });

  // Initial filter on page load
  filterCards();
});
