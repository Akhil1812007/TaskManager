import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamemberSummary():any[]
  {
    var TeamMembers=[
      {Region:"East",TeamMembersCount:20,AvailableMembers:3},
      {Region:"West",TeamMembersCount:20,AvailableMembers:3},
      {Region:"North",TeamMembersCount:20,AvailableMembers:3},
      {Region:"South",TeamMembersCount:20,AvailableMembers:3},
      
    ];
    return TeamMembers;
  }
}
