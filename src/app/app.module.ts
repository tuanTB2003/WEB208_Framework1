import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;

import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AppLayoutModule } from './layout/admin/layout/app.layout.module';
import { DasboardComponent } from './pages/admin/dasboard/dasboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ManaProductComponent } from './pages/admin/mana-product/mana-product.component';
import { InputTextModule } from 'primeng/inputtext';
import { ManaCategoriesComponent } from './pages/admin/mana-categories/mana-categories.component';
import { HomeComponent } from './pages/home/home.component';
import { DialogModule } from 'primeng/dialog';
// import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumber, InputNumberModule } from 'primeng/inputnumber';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    LayoutClientComponent,
    DasboardComponent,
    ManaProductComponent,
    ManaCategoriesComponent,
    HomeComponent,
    // AddProductComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    SelectButtonModule,
    AppLayoutModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
