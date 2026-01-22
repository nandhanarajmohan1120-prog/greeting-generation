// LOGIN
function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "ksk" && p === "1234") {
    window.location.href = "details.html";
  } else {
    alert("Unauthorized login ❌");
  }
}

// SAVE DETAILS
function generate() {
  localStorage.setItem("event", eventName.value);
  localStorage.setItem("date", date.value);
  localStorage.setItem("venue", venue.value);

  window.location.href = "greeting.html";
}

// LOAD GREETING
if (location.pathname.includes("greeting.html")) {
  document.getElementById("eventText").innerText =
    localStorage.getItem("event");

  document.getElementById("dateText").innerText =
    "📅 " + localStorage.getItem("date");

  document.getElementById("venueText").innerText =
    "📍 " + localStorage.getItem("venue");
}

// DOWNLOAD
function downloadCard() {
  html2canvas(document.getElementById("greetingCard"), { scale: 2 })
    .then(canvas => {
      const a = document.createElement("a");
      a.download = "KSK_Greeting.png";
      a.href = canvas.toDataURL();
      a.click();
    });
}

// SEND
function send() {
  alert("Share via WhatsApp / Mail option can be integrated");
}
