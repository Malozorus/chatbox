import { Component, model, effect, ViewChild} from '@angular/core';
import { Message } from '../../types';
import { MessageIdServiceService } from '../../services/message-id-service.service';
import { ChatService } from '../../services/chat.service';
import { MessageInputComponent } from '../message-input/message-input.component';
import { MessageListComponent } from '../message-list/message-list.component';
import { HttpDownloadProgressEvent, HttpEvent, HttpEventType, HttpResponse, } from '@angular/common/http';
import { map, mergeMap } from 'rxjs';

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
  loadingResponse: boolean = false;
 

  constructor( 
    private messageIdService: MessageIdServiceService,
    private chatService: ChatService
  ) {}

  sendInputMessage() {

    const message: Message = {
      "id": this.messageIdService.generateUniqueId(),
      "role": "user",
      "content": this.inputMessage,
    };
    this.pushMessage(message);
    this.loadingResponse = true;
    this.inputMessage = '';

    const responseMessage: Message = {
      "id": "",
      "role": "assistant",
      "content": "",
      "loading": true,
    };

    this.pushMessage(responseMessage);
    this.chatService.postChat(message, true).subscribe({
      next: (event: HttpEvent<string>) => {
        if (event.type === HttpEventType.DownloadProgress) {
          responseMessage.loading = false;
          responseMessage.content += JSON.parse(((
            event as HttpDownloadProgressEvent
          ).partialText + "").split('\n').slice(-2)[0]).message.content;
        } else if (event.type === HttpEventType.Response) {
          this.loadingResponse = false;
        }
      },
      error: () => {
        this.loadingResponse = false;
      },
      complete: () => console.log('Observable emitted the complete notification')
    });
  }

  pushMessage(message: Message) {
    this.messages.update(values => {
      return [...values, message];
   });
  }

}
