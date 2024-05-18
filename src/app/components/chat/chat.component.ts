import { Component } from '@angular/core';
import { Message } from '../../types';
import { MessageIdServiceService } from '../../services/message-id-service.service';
import { ChatService } from '../../services/chat.service';
import { MessageInputComponent } from '../message-input/message-input.component';
import { MessageListComponent } from '../message-list/message-list.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageInputComponent, MessageListComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  
  inputMessage: string = ''; // Declare the type of the 'inputMessage' variable as a string // Declare the type of the 'messages' array as an array of strings
  messages: Message[] = [];

  constructor( 
    private messageIdService: MessageIdServiceService,
    private chatService: ChatService
  ) {
    const message1: Message = {
      "id": this.messageIdService.generateUniqueId(),
      "role": "user",
      "content": 'salut',
    };
    const message2: Message = {
      "id": this.messageIdService.generateUniqueId(),
      "role": "assistant",
      "content": 'salut, comment ça va ?',
    };
    this.messages.push(message1);
    this.messages.push(message2);
  }

  sendInputMessage() {
    const message: Message = {
      "id": this.messageIdService.generateUniqueId(),
      "role": "user",
      "content": this.inputMessage,
    };
    this.messages.push(message);
    this.inputMessage = '';
    this.chatService.postChat(message).subscribe((data) => {
      this.messages.push(data);
    });
    
  }

  onChange(event: any) {
    console.log(event);
  }
}
