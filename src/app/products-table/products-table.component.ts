import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  products: any = [];

  selectedProduct: any;
  constructor(private productService: ProductsService, private router: Router, public dialog:MatDialog) {}


  ngOnInit() {
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    });
  }
  viewProductDetail(product:any){
    this.selectedProduct= product;
    this.productService.selectedProduct = this.selectedProduct;
    this.router.navigate(['/product', this.selectedProduct.id])

  }
  openConfirmationDialog(productId: string):void{

    const dialogRef= this.dialog.open(DialogConfirmationComponent, {data:{productId:productId}})
  }

}
