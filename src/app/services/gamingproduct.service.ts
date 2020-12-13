import { Injectable } from '@angular/core';
import { Gamingproduct } from '../model/gamingproduct';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamingproductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}

urlgproducts : string = "http://localhost:3000/gproducts";

  constructor(private http : HttpClient) { }

    gproducts! : Gamingproduct[];
      getProducts() : Gamingproduct[]{
        return this.gproducts;
      }

      getProductsJson() : Observable <Gamingproduct[]>{
       return this.http.get<Gamingproduct[]>(this.urlgproducts);
       
      }

      getGproductById(id:number){
        return this.http.get<Gamingproduct>(this.urlgproducts+'/'+id);
      }

      updateGproduct (id:number,Gprod: Gamingproduct): Observable<Gamingproduct> {
        return this.http.put<Gamingproduct>(this.urlgproducts+'/'+id, Gprod, this.httpOptions);}
}

