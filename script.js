// info-menu dan simple quote
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
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
  animateValue('volunteerCount', 0, 500, 2000);
  animateValue('dogsRescuedCount', 0, 169, 2000);
  animateValue('catsRescuedCount', 0, 348, 2000);
};
