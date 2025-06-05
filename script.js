
const buttons = document.querySelectorAll(".buttons button");
const people = document.querySelectorAll(".people > div");

document.addEventListener("DOMContentLoaded", () => {

  window.showModal1 = function () {
    const modal = document.getElementById("projectModal");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  window.showModal2 = function () {
    const modal = document.getElementById("projectModal2");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  window.closeModal1 = function () {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
    document.body.style.overflow = "";
  };

  window.closeModal2 = function () {
    const modal = document.getElementById("projectModal2");
    modal.style.display = "none";
    document.body.style.overflow = "";
  };

  const user = localStorage.getItem('User');
  if (user) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('user').innerText = user;
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.innerText = '로그아웃';
    loginBtn.onclick = () => {
      localStorage.removeItem('User');
      window.location.reload();
    };
  setTimeout(() => {
      closePopup();
    }, 3000);
  }
  people.forEach(card => {
    const className = card.className;
    if (className.includes("PM-")) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
  buttons.forEach(btn => btn.classList.remove("active"));
  document.getElementById("PM").classList.add("active");
});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}



buttons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedDept = button.id;

    people.forEach(card => {
      const className = card.className;
      if (className.includes(`${selectedDept}-`)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
