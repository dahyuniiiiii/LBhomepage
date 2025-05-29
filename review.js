function openForm() {
  document.getElementById("reviewForm").style.display = "flex";
}
function closeForm() {
  document.getElementById("reviewForm").style.display = "none";
}

document.querySelector(".submit-btn").onclick = function () {
    const title = document.getElementById("studyType");
    const content = document.getElementById("reviewText");
    const reviewList = document.getElementById("reviewList");

    if (title.value === "" || content.value.trim() === "") {
        alert("스터디 유형과 후기를 모두 입력해주세요.");
        return;
    }

    fetch('http://localhost:9090/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title.value,
            content: content.value
        })
    })
    .then(res => {
        if (!res.ok) throw new Error('리뷰 등록 실패');
        return res.json();
    })
    .then(data => {
        alert('리뷰가 성공적으로 등록되었습니다.');

        const newCard = document.createElement("div");
        newCard.className = "review-card";
        newCard.innerHTML = `
            <div class="review-type">${title.value}</div>
            <div class="review-text">${content.value}</div>
        `;
        reviewList.prepend(newCard);

        title.selectedIndex = 0;
        content.value = "";
        charCounter.textContent = "0 / 250자";
        closeForm();
    })
    .catch(err => {
        alert('리뷰 등록 실패: ' + err.message);
    });
};
