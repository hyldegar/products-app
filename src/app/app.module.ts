import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ProductsTableComponent } from "./products-table/products-table.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  
  MatSlideToggleModule,
  
  MatTableModule,
  MatToolbarModule,
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { ProductsChartsComponent } from "./products-charts/products-charts.component";
import { DialogConfirmationComponent } from "./dialog-confirmation/dialog-confirmation.component";
import { PricebiggerQueryComponent } from './pricebigger-query/pricebigger-query.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    ProductDetailComponent,
    EditProductComponent,
    NewProductComponent,
    ProductsChartsComponent,
    DialogConfirmationComponent,
    PricebiggerQueryComponent,
    IndexComponent,
  ],
  entryComponents: [DialogConfirmationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    NgxChartsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
//-------------Código Comentado--------------------------
/*import { BrowserModule } from "@angular/platform-browser"; // Importar módulo BrowserModule para la aplicación web
import { NgModule } from "@angular/core"; // Importar módulo NgModule para crear un módulo
import { AppRoutingModule } from "./app-routing.module"; // Importar módulo de enrutamiento de la aplicación
import { AppComponent } from "./app.component"; // Importar componente principal de la aplicación
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // Importar módulo de animaciones de Angular
import { ContactsTableComponent } from "./contacts-table/contacts-table.component"; // Importar componente ContactsTableComponent
import { HttpClientModule } from "@angular/common/http"; // Importar módulo HttpClientModule para realizar solicitudes HTTP
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
} from "@angular/material"; // Importar módulos de Angular Material necesarios
import { ContactDetailComponent } from "./contact-detail/contact-detail.component"; // Importar componente ContactDetailComponent
import { EditContactComponent } from "./edit-contact/edit-contact.component"; // Importar componente EditContactComponent
import { FormsModule } from "@angular/forms"; // Importar módulo FormsModule para trabajar con formularios
import { NewContactComponent } from "./new-contact/new-contact.component"; // Importar componente NewContactComponent
import { DialogConfirmationComponent } from "./dialog-confirmation/dialog-confirmation.component"; // Importar componente DialogConfirmationComponent
import { ContactsChartsComponent } from './contacts-charts/contacts-charts.component'; // Importar componente ContactsChartsComponent
import { NgxChartsModule } from '@swimlane/ngx-charts'; // Importar módulo NgxChartsModule para gráficos

@NgModule({
  declarations: [
    AppComponent,
    ContactsTableComponent,
    ContactDetailComponent,
    EditContactComponent,
    NewContactComponent,
    DialogConfirmationComponent,
    ContactsChartsComponent,
  ],

  // Se agrega el componente DialogConfirmationComponent a la lista de entryComponents
  entryComponents: [DialogConfirmationComponent],

  imports: [
    BrowserModule, // Importar módulo BrowserModule
    AppRoutingModule, // Importar módulo de enrutamiento
    BrowserAnimationsModule, // Importar módulo de animaciones
    MatTableModule, // Importar módulo MatTableModule de Angular Material para la tabla
    MatIconModule, // Importar módulo MatIconModule de Angular Material para iconos
    MatButtonModule, // Importar módulo MatButtonModule de Angular Material para botones
    MatFormFieldModule, // Importar módulo MatFormFieldModule de Angular Material para campos de formulario
    MatInputModule, // Importar módulo MatInputModule de Angular Material para campos de entrada
    MatToolbarModule, // Importar módulo MatToolbarModule de Angular Material para barra de herramientas
    FormsModule, // Importar módulo FormsModule para trabajar con formularios
    MatCardModule, // Importar módulo MatCardModule de Angular Material para tarjetas
    NgxChartsModule, // Importar módulo NgxChartsModule para gráficos
    HttpClientModule, // Importar módulo HttpClientModule para solicitudes HTTP
    MatDialogModule // Importar módulo MatDialogModule de Angular Material para cuadros de diálogo
  ],
  providers: [], // Proveedores de servicios
  bootstrap: [AppComponent], // Componente raíz de la aplicación
})
export class AppModule {} // Exportar clase AppModule
*/
