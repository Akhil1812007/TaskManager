import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Project[]=[];
  newProject:Project=new Project();
  editProject:Project=new Project();
  editIndex:number=0;
  
  constructor(private projectsService:ProjectsService){
      //subscribe method create the observer 
    }

    //exceute at the application startup athat is while exceuting the projects component  
    ngOnInit(){
      this.projectsService.getAllProjects().subscribe(
        //response is what we receive from the server
        (response:Project[])=>{
          this.projects=response;
        }
      )
    }
    onSaveClick()
    {
      this.projectsService.insertProject(this.newProject).subscribe((response) => {
        //Add Project to Grid
        var p: Project = new Project();
       p.projectID=response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects.push(p);
  
        //Clear New Project Dialog - TextBoxes
        this.newProject.projectID = 0;
        this.newProject.projectName = "";
        this.newProject.dateOfStart = new Date();
        this.newProject.teamSize = 0;
      }, (error) => {
        console.log(error);
      });
    }
    onEditClick(event:Event,index:number){
      this.editProject.projectID=this.projects[index].projectID;
      this.editProject.projectName=this.projects[index].projectName;
      

      this.editProject.dateOfStart=this.projects[index].dateOfStart;
    
      

    
    
    
      this.editProject.teamSize=this.projects[index].teamSize;
      this.editIndex=index;

    }
    onUpdateClick(){
      this.projectsService.updateProject(this.editProject).subscribe(
        (response:Project)=>{
          var p:Project=new Project();
          p.projectID=response.projectID;
          p.projectName=response.projectName;
          p.dateOfStart=response.dateOfStart;
          p.teamSize=response.teamSize;
          this.projects[this.editIndex]=p;
          this.editProject.projectID= 0;
          this.editProject.projectName="";
          this.editProject.dateOfStart=new Date("");
          this.editProject.teamSize=0;
          this.editIndex=0;

        },
        ()=>{

        }
      )
    }

 
  
    

  

}
