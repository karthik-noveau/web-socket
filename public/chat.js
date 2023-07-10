var socket = io.connect("http://localhost:9090");

var message = document.querySelector("#message");
var userName = document.querySelector("#userName");
var btn = document.querySelector("#send");
var output = document.querySelector("#output");
var feedback = document.querySelector("#feedback");

btn.addEventListener("click", function () {
  socket.emit("chat", {
    userName: userName.value,
    message: message.value,
  });
});

message.addEventListener("keypress", function () {
  socket.emit("typing", userName.value);
});

socket.on("chat", function (data) {
  output.innerHTML +=
    "<p><strong>" + data.userName + " : </strong>" + data.message + "</p>";
  feedback.innerHTML = "";
});

socket.on("typing", function (data) {
  feedback.innerHTML = "<p>" + data + " is typing a message... </p>";
});
