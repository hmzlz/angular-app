import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-form-complaint',
  templateUrl: './form-complaint.component.html',
  styleUrls: ['./form-complaint.component.css']
})
export class FormComplaintComponent implements OnInit {

  complaint : Complaint = new Complaint();
  constructor(private cs : ComplaintService,) { }


  addComplaint() {
    this.cs.addComplaint(this.complaint).subscribe();
  }

  ngOnInit(): void {
  }

}
