// 폼 열기
function openForm() {
    document.getElementById("reviewForm").style.display = "flex";
}

// 폼 닫기
function closeForm() {
    document.getElementById("reviewForm").style.display = "none";
}

// 실시간 글자 수 표시
const reviewText = document.getElementById("reviewText");
const charCounter = document.getElementById("charCounter");

reviewText.addEventListener("input", function () {
    charCounter.textContent = `${reviewText.value.length} / 250자`;
});

// 리뷰 등록
document.querySelector(".submit-btn").onclick = function () {
    const studyType = document.getElementById("studyType");
    const reviewList = document.getElementById("reviewList");

    if (studyType.value === "" || reviewText.value.trim() === "") {
        alert("스터디 유형과 후기를 모두 입력해주세요.");
        return;
    }

    const newCard = document.createElement("div");
    newCard.className = "review-card";
    newCard.innerHTML = `
        <div class="review-type">${studyType.value}</div>
        <div class="review-text">${reviewText.value}</div>
    `;

    reviewList.prepend(newCard);

    studyType.selectedIndex = 0;
    reviewText.value = "";
    charCounter.textContent = "0 / 250자";

    closeForm();
};