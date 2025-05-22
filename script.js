const buttons = document.querySelectorAll(".buttons button");
const people = document.querySelectorAll(".people > div");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedDept = button.id;

    people.forEach(card => {
      if (card.className.startsWith(selectedDept)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

