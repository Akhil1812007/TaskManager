import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export  class DashboardComponent implements OnInit {

  Designation:string="";
  Username:string="";
  NoOfTeamMembers:number=0;
  TotalCostOfAllProjects:number=0;
  PendingTasks:number=0;
  UpComingProjects:number=0;
  ProjectCost:number=0;
  CurrentExpenditure:number=0;
  AvailableFunds:number=0;
  Clients:string[]=[];
  Projects:string[]=[];
  Years:number[]=[];
  TeamMembers:any =[];
  Regions:any =[];





  ngOnInit(){
    this.Designation="Project Manager";
    this.Username="Akhil";
    this.NoOfTeamMembers=23;
    this.TotalCostOfAllProjects=200000;
    this.PendingTasks=12;
    this.UpComingProjects=45;
    this.CurrentExpenditure=1300000;
    this.AvailableFunds=5416;
    this.ProjectCost=200000;
    this.Clients=[
      "WhiteBlue",
      "BNY MELLON",
      "Your Combo"
    ];

    this.Projects=[
      "Project A",
      "Project B",
      "Project C"

    ];
    for(var i=2019;i>=2010;i--){
      this.Years.push(i);
    }
    this.TeamMembers=[
      {Region:"East",TeamMembersCount:20,AvailableMembers:3},
      {Region:"West",TeamMembersCount:20,AvailableMembers:3},
      {Region:"North",TeamMembersCount:20,AvailableMembers:3},
      {Region:"South",TeamMembersCount:20,AvailableMembers:3},
      
    ];
    this.Regions=[
      {Direction:"East",
      Members:[
        {id:1,name:"Akhil",status:"Avaiable"},
        {id:2,name:"Akhil",status:"Avaiable"},
        {id:3,name:"Akhil",status:"Avaiable"},
        {id:4,name:"Akhil",status:"Avaiable"},
        {id:5,name:"Akhil",status:"Avaiable"}
      ]
      },
      {Direction:"South",
      Members:[
        {id:1,name:"Akhil",status:"Avaiable"},
        {id:2,name:"Akhil",status:"Avaiable"},
        {id:3,name:"Akhil",status:"Avaiable"},
        {id:4,name:"Akhil",status:"Avaiable"},
        {id:5,name:"Akhil",status:"Avaiable"}
      ]
      },
      {Direction:"West",
      Members:[
        {id:1,name:"Akhil",status:"Avaiable"},
        {id:2,name:"Akhil",status:"Avaiable"},
        {id:3,name:"Akhil",status:"Avaiable"},
        {id:4,name:"Akhil",status:"Avaiable"},
        {id:5,name:"Akhil",status:"Avaiable"}
      ]
      },
      {Direction:"North",
      Members:[
        {id:1,name:"Akhil",status:"Avaiable"},
        {id:2,name:"Akhil",status:"Avaiable"},
        {id:3,name:"Akhil",status:"Avaiable"},
        {id:4,name:"Akhil",status:"Avaiable"},
        {id:5,name:"Akhil",status:"Avaiable"}
      ]
      }
    ]

  }

}
