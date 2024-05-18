import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { FormsModule } from '@angular/forms';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ChatComponent } from './components/chat/chat.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor() {
    
  }
  
 
}
