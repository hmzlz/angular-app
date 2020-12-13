import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  list : Complaint[]=[];
  compalaintform! : FormGroup;
  c : Complaint = new Complaint();
  fbuilder : FormBuilder = new FormBuilder();
  paramId : null | string ;
  constructor(private ac:ActivatedRoute, private cs:ComplaintService, private _router:Router  ) {
    this.paramId="";
   }
 
  ngOnInit(): void {

    this.compalaintform = this.fbuilder.group({
     
      title : ['',Validators.required],
      description :  ['',Validators.required],
     
    })
    this.ac.paramMap.subscribe(res=>{this.paramId=res.get('id');
    console.log(this.paramId);
    this.cs.getComplaintById(Number(res.get('id'))).subscribe(res=>this.c=res)});
  }

 
  
  updateComplaint(){
    
   this.cs.updateComplaint(Number(this.paramId),this.c).subscribe(res=>this._router.navigateByUrl("/mycomplaints"));


  }

  get titleComplaint() { return this.compalaintform.get('title');}
  get desciptionComplaint() { return this.compalaintform.get('description');}


}
