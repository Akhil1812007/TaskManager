import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http"
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
    return this.httpClient.get<Project[]>(this.baseUrl+"/api/projects",{responseType:"json"});
  }
  insertProject(newProject:Project):Observable<Project>
  {
    return this.httpClient.post<Project>(this.baseUrl+"/api/project",newProject,{responseType:"json"});
  }
  updateProject(editProject:Project):Observable<Project>
  {
    return this.httpClient.put<Project>(this.baseUrl+"/api/project/"+editProject.projectID,editProject,{responseType:"json"});
  }
  DeleteProject(projectID:number):Observable<string>
  {
    return this.httpClient.delete<string>(this.baseUrl+"/api/project/"+projectID,{responseType:"json"});
  }
  searchProject(searchBy: string, searchText: string): Observable<Project[]> {
    const params = new HttpParams()
      .set('searchBy', searchBy)
      .set('searchText', searchText);

    return this.httpClient.get<Project[]>(`${this.baseUrl}/api/project/search`, { params });
  }
  //https://localhost:7002/api/project/search?searchBy=TeamSize&searchText=100'
}
