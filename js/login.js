function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  fetch("https://web-game-backend.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem("user", username);
      window.location.href = "home.html";
    } else {
      alert("Login failed");
    }
  });
}
