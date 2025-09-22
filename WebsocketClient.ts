
setTimeout(() => {}, 1000);
let urlParams = new URLSearchParams(window.location.search);

document.getElementById("test1").innerHTML = urlParams.get("username") + " is trying to connect to room associated with server " + urlParams.get("server_id");

function connect() {
    let socket = new WebSocket("ws://localhost:4242");

    socket.onopen = () => {
        console.log("Connection opened");
    }

    socket.onmessage = (event: { data: any; }) => {
        console.log("Received:", event.data);
        document.getElementById("test2").innerHTML = event.data;
    }

    socket.onclose = () => {
        console.log("Connection closed");
        setTimeout(connect, 5000);
    }

    socket.onerror = (error: any) => {
        console.error("WebSocket error:", error);
        socket.close(); // ensure it triggers onclose and retries
    };
}


connect();
// socket.addEventListener("message", (event) => {
//     console.log("Received:", event.data);
// });

/// P2PCF?
