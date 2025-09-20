function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message: string = greet("World");
console.log(message);

let socket = new WebSocket("ws://localhost:4242");
socket.addEventListener("message", (event) => {
    console.log("Received:", event.data);
});