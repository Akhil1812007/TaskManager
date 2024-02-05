export class Project {
    projectID:number;
    projectName:string;
    dateOfStart:Date;
    teamSize:number;

    constructor()
    {
        this.projectID=0;
        this.projectName="";
        this.dateOfStart=new Date();
        this.teamSize=0;
    }

  
}
