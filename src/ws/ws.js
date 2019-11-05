import SockJS from 'sockjs-client'
import {Stomp} from '@stomp/stompjs'


let stompClient = null;
const handlers = [];

export function connectTo() {
    const socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, frame => {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/users', users => {
            handlers.forEach(handler => handler(JSON.parse(users.body)))
        });
    });
}

export function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

export function sendUsers(users) {
    stompClient.send("/app/changeUsers", {}, JSON.stringify(users));
}