import { Component, OnInit } from '@angular/core';
import { ChatService } from '../shared/chat.service';
import {Chat} from '../shared/Chat.model';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  content = '';
  interval;
  constructor(private service: ChatService,private http: HttpClient) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.service.refreshList();
      }, 1000);
    
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  
  submit(): void {
    this.http.post('http://localhost:54277/api/chat', {
      chatrrom_id: 1, 
      content: this.content,
      user_id: 2
      
    }).subscribe(() => {this.content = '';});
  }
  
}
