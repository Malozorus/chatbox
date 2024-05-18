import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {
  inputMessage = model<string>('');
  sendButtonClicked = output();

  sendClick(){
    this.sendButtonClicked.emit();
  }
}
