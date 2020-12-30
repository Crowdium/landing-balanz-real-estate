import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/constants/config';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private headers:any;
  private endpoint:string;

  constructor(private http: HttpClient) {
    this.endpoint = config.ENDPOINT;
    this.headers = {
      headers: {
        "Auth-Token": config.API_KEY
      }
    }
  }

  getProjects(): Observable<any>{
    return this.http.get(`${this.endpoint}/proyectos`, this.headers);
  }
}
