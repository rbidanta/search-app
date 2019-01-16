import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { RobotStatus } from '../model/robot-status';

@Injectable({
  providedIn: 'root'
})
export class AskDictionaryService {
  service_uri: string = environment.serviceuri;

  constructor(private http: HttpClient) {}

  searchWord(word: string) {
    let url: string = this.service_uri + '/' + word.toUpperCase();
    return this.http.get<RobotStatus>(url);
  }
}
