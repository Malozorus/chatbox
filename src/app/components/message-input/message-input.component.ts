import { Component, model, output, input } from '@angular/core';
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
  blockInput = input<boolean>(false);

  ngOnInit() {
    console.log('blockInput', this.blockInput());
  }

  sendClick(){
    this.sendButtonClicked.emit();
  }
}
