import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {


  Complaints! : Complaint[];

  constructor(private cs:ComplaintService) { }


  ngOnInit(): void {

    this.cs.getComplaintsJson().subscribe(next=>this.Complaints=next);
  }

  deleteP(c:Complaint){
    this.cs.deleteComplaint(c).subscribe(next=>this.cs.getComplaintsJson().subscribe(next=>this.Complaints=next));
  }

}
