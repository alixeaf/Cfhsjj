var coins = 0;
var points = 0;

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
    document.getElementById("message").textContent = "";

    document.getElementById("loginForm").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    document.getElementById("message").textContent = "اسم المستخدم أو كلمة المرور غير صحيحة";
  }
});

function watchVideos() {
  points++;
  updatePoints();
}

function downloadGames() {
  points += 10;
  updatePoints();
}

function collectCoins() {
  coins++;
  updateCoins();
}

function updatePoints() {
  document.getElementById("points").textContent = points;
}

function updateCoins() {
  document.getElementById("coins").textContent = coins;
}
