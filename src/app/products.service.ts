import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  static getProducts() {
    throw new Error("Method not implemented.");
  }
  public selectedProduct: any;
  constructor(private http: HttpClient) {}


  getProducts(): Observable<any> {
    const url = "http://localhost:30030/products/getAll";
    const headers = new HttpHeaders()
      .set("Authorization", "Basic " + btoa("demo:demo"))
      .set("X-User", "demo")
      .set("X-Password", "demo");
    return this.http.get<any>(url, { headers });
  }

  updateProduct(product: any): void {
    const url = "http://localhost:30030/products/update";
    const body = product;
    const headers = new HttpHeaders()
      .set("Authorization", "Basic " + btoa("demo:demo"))
      .set("X-User", "demo")
      .set("X-Password", "demo");
    this.http.put(url, body, { headers }).subscribe((error) => {
      console.error(error);
    });
  }

  newProduct(product: any): void {
    const url = "http://localhost:30030/products/add";
    const body = product;
    const headers = new HttpHeaders()
      .set("Authorization", "Basic " + btoa("demo:demo"))
      .set("X-User", "demo")
      .set("X-Password", "demo");
    this.http.post(url, body, { headers }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  deleteProduct(id: string): void {
    const url = "http://localhost:30030/products/delete";
    const body = { id: id };
    const headers = new HttpHeaders()
      .set("Authorization", "Basic " + btoa("demo:demo"))
      .set("X-User", "demo")
      .set("X-Password", "demo");
    this.http.post(url, body, { headers }).subscribe((error) => {
      console.error(error);
    });
  }
  getProductsPriceBigger(price:any): Observable<any> {
    const url = "http://localhost:30030/products/getProductsPriceBiggerThanNumber";
    const body = {price:price}
    const headers = new HttpHeaders()
      .set("Authorization", "Basic " + btoa("demo:demo"))
      .set("X-User", "demo")
      .set("X-Password", "demo");
    return this.http.post(url, body, { headers });
  }
}
//-------------------------------------------Comentado------------------------------------------------------//

/*
import { HttpClient, HttpHeaders } from "@angular/common/http"; // Importación de HttpClient y HttpHeaders para realizar solicitudes HTTP
import { Injectable } from "@angular/core"; // Importación de Injectable para marcar la clase como un servicio inyectable
import { Observable } from "rxjs"; // Importación de Observable para manejar las respuestas asíncronas

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  static getProducts() {
    throw new Error("Method not implemented.");
  }
  public selectedProduct: any; // Propiedad para almacenar el producto seleccionado

  constructor(private http: HttpClient) {} // Constructor para inyectar HttpClient

  // Método para obtener todos los productos
  getProducts(): Observable<any> {
    const url = "http://localhost:30030/products/getAll"; // URL para obtener todos los productos
    const headers = new HttpHeaders() // Cabeceras HTTP
      .set("Authorization", "Basic " + btoa("demo:demo")) // Autorización básica
      .set("X-User", "demo") // Encabezado personalizado X-User
      .set("X-Password", "demo"); // Encabezado personalizado X-Password
    return this.http.get<any>(url, { headers }); // Realizar una solicitud GET con las cabeceras y devolver el resultado como Observable
  }

  // Método para actualizar un producto existente
  updateProduct(product: any): void {
    const url = "http://localhost:30030/products/update"; // URL para actualizar un producto
    const body = product; // Cuerpo de la solicitud con el producto a actualizar
    const headers = new HttpHeaders() // Cabeceras HTTP
      .set("Authorization", "Basic " + btoa("demo:demo")) // Autorización básica
      .set("X-User", "demo") // Encabezado personalizado X-User
      .set("X-Password", "demo"); // Encabezado personalizado X-Password
    this.http.put(url, body, { headers }).subscribe((error) => { // Realizar una solicitud PUT con las cabeceras y suscribirse a la respuesta o al error
      console.error(error); // Imprimir el error en la consola
    });
  }

  // Método para agregar un nuevo producto
  newProduct(product: any): void {
    const url = "http://localhost:30030/products/add"; // URL para agregar un nuevo producto
    const body = product; // Cuerpo de la solicitud con el nuevo producto
    const headers = new HttpHeaders() // Cabeceras HTTP
      .set("Authorization", "Basic " + btoa("demo:demo")) // Autorización básica
      .set("X-User", "demo") // Encabezado personalizado X-User
      .set("X-Password", "demo"); // Encabezado personalizado X-Password
    this.http.post(url, body, { headers }).subscribe(
      (response) => {
        console.log(response); // Imprimir la respuesta en la consola
      },
      (error) => {
        console.error(error); // Imprimir el error en la consola
      }
    );
  }

  // Método para eliminar un producto
  deleteProduct(id: string): void {
    const url = "http://localhost:30030/products/delete"; // URL para eliminar un producto
    const body = { id: id }; // Cuerpo de la solicitud con el ID del producto a eliminar
    const headers = new HttpHeaders() // Cabeceras HTTP
      .set("Authorization", "Basic " + btoa("demo:demo")) // Autorización básica
      .set("X-User", "demo") // Encabezado personalizado X-User
      .set("X-Password", "demo"); // Encabezado personalizado X-Password
    this.http.post(url, body, { headers }).subscribe((error) => { // Realizar una solicitud POST con las cabeceras y suscribirse al error
      console.error(error); // Imprimir el error en la consola
    });
  }

  // Método para obtener productos con un precio mayor que el valor dado
  getProductsPriceBigger(price: any): Observable<any> {
    const url = "http://localhost:30030/products/getProductsPriceBiggerThanNumber"; // URL para obtener productos con precio mayor
    const body = { price: price }; // Cuerpo de la solicitud con el valor del precio
    const headers = new HttpHeaders() // Cabeceras HTTP
      .set("Authorization", "Basic " + btoa("demo:demo")) // Autorización básica
      .set("X-User", "demo") // Encabezado personalizado X-User
      .set("X-Password", "demo"); // Encabezado personalizado X-Password
    return this.http.post(url, body, { headers }); // Realizar una solicitud POST con las cabeceras y devolver el resultado como Observable
  }
}
*/