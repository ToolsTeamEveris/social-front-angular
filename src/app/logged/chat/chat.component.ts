import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { PersonaServiceService } from '../shared/Services/persona-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'WebSockets chat';
  private serverUrl = 'http://localhost:8080/socket'
  messages;
  message = {
    text: '',
    user: ''
  };
  private stompClient;

  constructor(private personaService: PersonaServiceService ) { 
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
          this.message.text = message.body;
          this.message.user = this.personaService.user.name;
          this.messages.push(this.message);
        }
      });
    });
  }

  sendMessage() {
    this.stompClient.send("/app/send/message", {}, this.message.text);
    this.message.text = '';
  }

}
