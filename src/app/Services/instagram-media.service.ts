import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InstagramMediaService {

  constructor(private http:HttpClient) { }


  getAllInstagramPosts(): Observable<string[]>{
    return this.http.get<string[]>('xxx')
  }
}
