import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products-charts",
  templateUrl: "./products-charts.component.html",
  styleUrls: ["./products-charts.component.scss"],
})
export class ProductsChartsComponent implements OnInit {
  activosData = [];
  precioMayor5 = [];
  stockSuficiente = [];
  stockProducto = [];
  public dataReady = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((products: any[]) => {
      const productsActive = products.filter((product) => product.active);
      const productsNotActive = products.filter((product) => !product.active);
      const productsUpper5 = products.filter((product) => product.price > 5);
      const productsUnder5 = products.filter((product) => product.price <= 5);
      const productsOver8 = products.filter((product) => product.stock > 8);
      const productsUnder8 = products.filter((product) => product.stock <= 8);

      this.activosData = [
        {
          name: "Activos",
          value: productsActive.length,
        },
        {
          name: "No Avtivos",
          value: productsNotActive.length,
        },
      ];
      this.precioMayor5 = [
        {
          name: "Precio mayor que 5",
          value: productsUpper5.length,
        },
        {
          name: "Precio menor o igual a 5",
          value: productsUnder5.length,
        },
      ];
      this.stockSuficiente = [
        {
          name: "Stock Suficiente",
          value: productsOver8.length,
        },
        {
          name: "Necesario Comprar",
          value: productsUnder8.length,
        },
      ];
      for (let i = 0; i < products.length; i++){
        this.stockProducto.push({
          name: products[i].name,
          value: products[i].stock,
        });
        if (i === products.length - 1) {
          this.dataReady = true;
        }
      }
        console.log('Stock Producto:', this.stockProducto);

    });
  }
}
