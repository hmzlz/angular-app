import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../model/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  urlcomplaints : string = "http://localhost:3000/complaints"

  constructor(private http : HttpClient) { }

  complaints! : Complaint[];

  getComplaintsJson() : Observable <Complaint[]>{
    return this.http.get<Complaint[]>(this.urlcomplaints);
    
   }

   addComplaint (complaint: Complaint): Observable<Complaint> {
    return this.http.post<Complaint>(this.urlcomplaints, complaint, this.httpOptions);}


    deleteComplaint (c: Complaint | number): Observable<Complaint> {
      const id = typeof c === 'number' ? c : c.id;
      const url=this.urlcomplaints+'/'+id;
      return this.http.delete<Complaint>(url);
      }

      updateComplaint (id:number,Complaint: Complaint): Observable<Complaint> {
        return this.http.put<Complaint>(this.urlcomplaints+'/'+id, Complaint, this.httpOptions);}

        getComplaintById(id:number){
          return this.http.get<Complaint>(this.urlcomplaints+'/'+id);
        }
}


