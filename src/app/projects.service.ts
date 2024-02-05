import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  baseUrl:string="https://localhost:7002";

  constructor(private httpClient:HttpClient)
  { 

  }
  getAllProjects():Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.baseUrl+"/api/projects");
  }
  insertProject(newProject:Project):Observable<Project>
  {
    return this.httpClient.post<Project>(this.baseUrl+"/api/project",newProject);
  }
  updateProject(editProject:Project):Observable<Project>
  {
    return this.httpClient.put<Project>(this.baseUrl+"/api/project",editProject);
  }
}
