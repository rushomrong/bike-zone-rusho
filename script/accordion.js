document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      // Toggle the active class on the clicked accordion button
      this.classList.toggle("active");

      // Toggle the panel visibility by adding/removing the show class
      const panel = this.nextElementSibling;
      panel.classList.toggle("show");
    });
  });
});
