document.getElementById("diaryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let userId = localStorage.getItem("userId");
	const token = localStorage.getItem("token");

    if (!userId) {
        alert("Please login first");
        window.location.href = "login.html";
        return;
    }

    let diary = {
        title: title,
        content: content,
        userId: userId
    };

    fetch("http://18.217.146.144:8080/api/diaries/add", {
        method: "POST",
		headers: {
		    "Content-Type": "application/json",
		    "Authorization": "Bearer " + token
		},
        body: JSON.stringify(diary)
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
        window.location.href = "home.html";
    })
    .catch(error => {
        alert(error.message);
    });
});