let ratingBtns = document.querySelectorAll(".btn");
let selectedRating;
let submitBtn = document.querySelector(".submit-button");
let yourRating = document.querySelector(".your-rating");

ratingBtns.forEach((button) => {
  button.addEventListener("click", () => {
    ratingBtns.forEach((button) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
      }
    });
    button.classList.add("active");
    selectedRating = button.innerHTML;
    console.log(selectedRating);
    submitBtn.removeAttribute("disabled");
    yourRating.innerHTML = "You selected " + selectedRating + " out of 5";
    submitBtn.addEventListener("click", () => {
      document.querySelector(".container").classList.add("hidden");
      document.querySelector(".container-thx").classList.remove("hidden");
    });
  });
});
