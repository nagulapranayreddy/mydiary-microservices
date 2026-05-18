const userId = localStorage.getItem("userId");
const token = localStorage.getItem("token");

if (!userId || !token) {
    alert("Please login first");
    window.location.href = "login.html";
}

fetch(`http://18.217.146.144:8080/api/diaries/user/${userId}`, {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + token
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error("Failed to load diaries");
    }
    return response.json();
})
.then(data => {
    const diaryContainer = document.getElementById("diaryContainer");

    if (data.length === 0) {
        diaryContainer.innerHTML = "<h3>No diary entries found</h3>";
        return;
    }

    data.forEach(diary => {
        const diaryCard = document.createElement("div");
        diaryCard.classList.add("diary-card");

        diaryCard.innerHTML = `
            <div class="title">${diary.title}</div>
            <div class="content">${diary.content}</div>
            <div class="date">Created At: ${diary.createdAt}</div>

            <button onclick="editDiary(${diary.id})">Edit</button>
            <button onclick="deleteDiary(${diary.id})">Delete</button>
        `;

        diaryContainer.appendChild(diaryCard);
    });
})
.catch(error => {
    console.log(error);
    alert("Error loading diaries");
});

function editDiary(id) {
    window.location.href = `edit_diary.html?id=${id}`;
}

function deleteDiary(id) {

    const confirmDelete = confirm("Are you sure you want to delete this diary?");

    if (!confirmDelete) {
        return;
    }

	fetch(`http://18.217.146.144:8080/api/diaries/delete/${id}`, {
	    method: "DELETE",
	    headers: {
	        "Authorization": "Bearer " + token
	    }
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
        window.location.reload();
    })
    .catch(error => {
        alert(error.message);
    });
}

function goHome() {
    window.location.href = "home.html";
}