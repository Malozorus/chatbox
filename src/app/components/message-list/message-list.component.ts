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
  
  constructor(
   private router: Router
  ) {
    effect(() => {
      console.log(`New changes in messages: ${this.messages()}`);
      this.router.navigate(['/chat'], { fragment: 'message' + this.messages().length});
    });
  }
}
