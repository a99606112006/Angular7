import { Injectable } from '@angular/core';
import {Chat} from './Chat.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  content = '';

  readonly rootURL = 'http://localhost:54277/api';
  list : Chat[];
  
  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL + '/Chat/1')
    .toPromise()
    .then(res => this.list = res as Chat[]);

  }

  submit(): void {
    this.http.post('http://localhost:54277/api/chat', {
        content: this.content
    });
  }

}
