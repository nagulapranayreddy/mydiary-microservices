document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
    }

    let user = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    };

    fetch("http://3.23.63.72:8080/api/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
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
        window.location.href = "login.html";
    })
    .catch(error => {
        alert(error.message);
    });
});