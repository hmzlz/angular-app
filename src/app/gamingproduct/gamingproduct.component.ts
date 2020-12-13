import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';
import  {Gamingproduct} from '../model/gamingproduct';
import { GamingproductService } from '../services/gamingproduct.service';

@Component({
  selector: 'app-gamingproduct',
  templateUrl: './gamingproduct.component.html',
  styleUrls: ['./gamingproduct.component.css']
})
export class GamingproductComponent implements OnInit {
 
  gproducts! : Gamingproduct [];
  prod! : Gamingproduct;
  inputVal! : number;
  title = 'Angular Search Using ng2-search-filter';
  searchText ="";

 
  constructor(private gps : GamingproductService ,private _router:Router , private ac:ActivatedRoute) { 
 }



  addtocart(p : Gamingproduct ){
   
    const a = {...p};
    a.addedtocart = true;
    this.gps.updateGproduct(a.id,a).subscribe();
    window.alert ("product added to cart !");
    this._router.navigateByUrl('/mycart');
    
      
      
}
  ngOnInit(): void {
   
this.gps.getProductsJson().subscribe(next=>this.gproducts=next);

  }

}
