function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Temporary login (learning purpose)
    if (username === "admin" && password === "1234") {
        window.location.href = "home.html";
    } else {
        alert("Wrong Username or Password");
    }
}
