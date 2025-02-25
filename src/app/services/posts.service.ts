import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  //funvion que consume datos de la api externa
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
