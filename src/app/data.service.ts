import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { Post } from "./post";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    console.log('here')
    return this.http.get("/post.ts");
  }
}
