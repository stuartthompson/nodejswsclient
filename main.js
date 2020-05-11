const WebSocket = require('ws');

function setup() {
    var websocket = new WebSocket("ws://127.0.0.1:1234", "chat");

    websocket.onopen = function (e) {
        console.log(`Websocket opened.`);
    }

    // Listen for connection errors
    websocket.onerror = function (e) {
        console.log("Error: " + JSON.stringify(e));
    }

    websocket.onmessage = function (e) {
        console.log("Message received.");
        console.log(`Received: ${e.data}`);
    }

    websocket.onclose = function () {
        console.log(`Websocket closed.`);
    }
}

setup();
