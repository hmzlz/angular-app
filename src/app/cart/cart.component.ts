import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gamingproduct } from '../model/gamingproduct';
import { GamingproductService } from '../services/gamingproduct.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  gproducts! : Gamingproduct [];

  constructor(private gps : GamingproductService , private _router:Router) { }


  deletefromcart(p : Gamingproduct ){
   
    const a = {...p};
    a.addedtocart = false;
    this.gps.updateGproduct(a.id,a).subscribe();
    window.alert ("product Deleted from your cart !");
    window.location.reload();
    
      
      
}

  ngOnInit(): void {

    this.gps.getProductsJson().subscribe(next=>this.gproducts=next);
  }

}
