import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export  class DashboardComponent implements OnInit {

  Designation:string="";
  UserName:string="";
  NoOfTeamMemebers:number=0;
  TotalCostOfAllProjects:number=0;
  PendingTasks:number=0;
  UpComingProjects:number=0;
  ProjectCost:number=0;
  CurrentExpenditure:number=0;
  AvailableFunds:number=0;




  ngOnInit(){
    this.Designation="Project Manager";
    this.UserName="Akhil";
    this.NoOfTeamMemebers=23;
    this.TotalCostOfAllProjects=200000;
    this.PendingTasks=12;
    this.UpComingProjects=45;
    this.CurrentExpenditure=1300000;
    this.AvailableFunds=5416;
    this.ProjectCost=200000;
  }

}
