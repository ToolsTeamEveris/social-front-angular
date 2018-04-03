import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'WebSockets chat';
  private serverUrl = 'http://localhost:8080/socket'
  messages: string[];
  message: string = '';
  private stompClient;

  constructor() { 
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
    this.messages = [];
  }

  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, frame => {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
          console.log(this.messages);
          this.messages.push(message.body);
        }
      });
    });
  }

  sendMessage() {
    console.log(this.message);
    this.stompClient.send("/app/send/message", {}, this.message);
    this.message = '';
  }

}
