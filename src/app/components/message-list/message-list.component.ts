import { Component, effect,model, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../types';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss'
})
export class MessageListComponent{

  messages = model<Message[]>([]);
  @ViewChild('messageList') messageList!: ElementRef;
  
  constructor(private router: Router) {
    effect(() => {
      console.log(`New changes in messages: ${this.messages()}`);
      this.messageList.nativeElement.scrollTop  = this.messageList.nativeElement.scrollHeight;
      this.router.navigate(['/chat', {'messageList': this.messages().length }]);
      console.log(this.messageList.nativeElement.scrollTop , this.messageList.nativeElement.scrollHeight)  
    });
  }
}
