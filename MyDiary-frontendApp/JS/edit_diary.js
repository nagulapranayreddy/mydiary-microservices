const userId = localStorage.getItem("userId");
const token = localStorage.getItem("token");


if (!userId) {
    alert("Please login first");
    window.location.href = "login.html";
}

const urlParams = new URLSearchParams(window.location.search);
const diaryId = urlParams.get("id");

if (!diaryId) {
    alert("Diary id missing");
    window.location.href = "view_diaries.html";
}

	fetch(`http://3.23.63.72:8080/api/diaries/${diaryId}`, {
	    method: "GET",
	    headers: {
	        "Authorization": "Bearer " + token
	    }
	})
    .then(response => {
        if (!response.ok) {
            throw new Error("Diary not found");
        }
        return response.json();
    })
    .then(diary => {
        document.getElementById("title").value = diary.title;
        document.getElementById("content").value = diary.content;
    })
    .catch(error => {
        alert(error.message);
        window.location.href = "view_diaries.html";
    });

document.getElementById("editDiaryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    let updatedDiary = {
        title: title,
        content: content,
        userId: userId
    };

	fetch(`http://18.217.146.144:8080/api/diaries/update/${diaryId}`, {
	    method: "PUT",
	    headers: {
	        "Content-Type": "application/json",
	        "Authorization": "Bearer " + token
	    },
	    body: JSON.stringify(updatedDiary)
	})
    .then(response => {
        return response.text().then(message => {
            if (!response.ok) {
                throw new Error(message);
            }
            return message;
        });
    })
    .then(message => {
        alert(message);
        window.location.href = "view_diaries.html";
    })
    .catch(error => {
        alert(error.message);
    });
});