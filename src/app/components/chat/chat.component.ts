import { Component, model, effect, ViewChild} from '@angular/core';
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
  
  inputMessage: string = ''; 
  messages = model<Message[]>([]);
 

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
    this.messages.update(values => {
      return [...values, message1, message2];
   });
  }

  sendInputMessage() {
    const message: Message = {
      "id": this.messageIdService.generateUniqueId(),
      "role": "user",
      "content": this.inputMessage,
    };
    this.pushMessage(message);
    this.inputMessage = '';
    this.chatService.postChat(message).subscribe((data) => {
      data.id = this.messageIdService.generateUniqueId();
      this.pushMessage(data);
    });
  }

  pushMessage(message: Message) {
    this.messages.update(values => {
      return [...values, message];
   });
  }

}
