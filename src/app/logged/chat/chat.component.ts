import { Component, OnInit } from '@angular/core';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  from: string = '';
  text: string = '';
  stompClient = null;

  constructor() { }

  ngOnInit() {
  }

  connect() {
    let socket = new SockJS('http://localhost:8080/chat');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, function(frame) {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/messages', function(messageOutput) {
        this.showMessageOutput(JSON.parse(messageOutput.body));
      });
    });
  }

  showMessageOutput(messageOutput) {
    var response = document.getElementById('response');
    var p = document.createElement('p');
    p.style.wordWrap = 'break-word';
    p.appendChild(document.createTextNode(messageOutput.from + ": " 
      + messageOutput.text + " (" + messageOutput.time + ")"));
    response.appendChild(p);
  }

  sendMessage() {
    this.stompClient.send("/app/chat", {}, {from: this.from, text: this.text});
  }

}
