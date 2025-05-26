const buttons = document.querySelectorAll(".buttons button");
const people = document.querySelectorAll(".people > div");

window.addEventListener('DOMContentLoaded', () => {
  const user = localStorage.getItem('User');
  if (user) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('user').innerText = user;
    localStorage.removeItem('User'); 
  }
});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

setTimeout(() => {
  closePopup();
}, 3000);

window.addEventListener("DOMContentLoaded", () => {
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

/*프로젝트갤러리*/
'use strict';

const openBtn = document.querySelector('.project-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-bg');

openBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);

function showModal() {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
}