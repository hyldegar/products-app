import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product:any;
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.product= this.productService.selectedProduct;
  }
  updateProduct():void{
    this.productService.updateProduct(this.product);
    this.router.navigateByUrl("/products");
  }

}
