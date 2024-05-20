import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
