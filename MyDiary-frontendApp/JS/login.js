document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let loginData = {
        email: email,
        password: password
    };

    fetch("http://3.23.63.72:8080/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Invalid email or password");
        }
        return response.json();
    })
	.then(data => {

	    alert("Login successful!");

		localStorage.setItem("token", data.token);

		localStorage.setItem("userId", data.userId);

		localStorage.setItem("fullName", data.fullName);

	    window.location.href = "home.html";

	})
    .catch(error => {
        alert("Invalid email or password");
    });
});