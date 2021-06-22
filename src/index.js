import React from 'react';
import ReactDOM from 'react-dom';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:3000');

client.onopen = () => {
  console.log('WebSocket Client Connected');
};
client.onmessage = (message) => {
  console.log(message);
};

ReactDOM.render(<div>Test Client</div>, document.getElementById('root'));
