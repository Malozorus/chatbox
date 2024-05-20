import {
  Component,
  effect,
  model,
  ViewChild,
  ElementRef,
  input,
  Input,
} from '@angular/core';
import { Message } from '../../types';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
})
export class MessageListComponent {
  messages = input.required<Message[]>();

  loader = {
    width: '30px',
    height: '10px',
    color: '#74b9ff'
  };

  constructor(
    private router: Router,
    private markdownService: MarkdownService
  ) {
    effect(() => {
      console.log(`New changes in messages: ${this.messages()}`); 
      this.router.navigate([''], {
        fragment: `message-${this.messages().length - 1}`,
      });
    });
  }

  isUser(message: Message) {
    return message.role === 'user';
  }
}
