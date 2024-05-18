import { Component, Input, ElementRef, OnChanges, SimpleChanges, ViewChild, Renderer2} from '@angular/core';
import { Message } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss'
})
export class MessageListComponent implements OnChanges{
  // @ViewChild('scrollableElement') private scrollableElementRef: ElementRef;
  @Input() messages: Message[] = [];

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['messages']) {
      console.log('messages changed');
    }
  }

}
