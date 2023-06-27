import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-pricebigger-query',
  templateUrl: './pricebigger-query.component.html',
  styleUrls: ['./pricebigger-query.component.scss']
})
export class PricebiggerQueryComponent implements OnInit {

  products = [];
  price: any;
  constructor(private productService: ProductsService) { }

  ngOnInit() {

  }

 queryProducts(price:any): void{
  this.productService.getProductsPriceBigger(this.price).subscribe(data =>{
    this.products = data;
  });
  }
}
