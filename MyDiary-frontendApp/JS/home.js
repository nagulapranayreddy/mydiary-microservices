function goToAddDiary() {
    window.location.href = "add_diary.html";
}

function goToViewDiaries() {
    window.location.href = "view_diaries.html";
}

function logout() {

    localStorage.removeItem("userId");
    localStorage.removeItem("fullName");

    alert("Logged out successfully");

    window.location.href = "login.html";
}