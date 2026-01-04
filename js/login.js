function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://web-game-backend-18mn.onrender.com/login", {
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
      alert("Wrong username or password");
    }
  })
  .catch(() => {
    alert("Backend waking up, try again in 30 seconds");
  });
}
