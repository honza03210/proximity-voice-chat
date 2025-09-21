function greet(name) {
    return "Hello, ".concat(name, "!");
}
var message = greet("World");
console.log(message);
var socket = new WebSocket("ws://localhost:4242");
socket.addEventListener("message", function (event) {
    console.log("Received:", event.data);
});
