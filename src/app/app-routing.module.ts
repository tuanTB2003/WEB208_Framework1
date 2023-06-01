import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { ProductsComponent } from './pages/products/products.component';
// import { DetailComponent } from './pages/detail/detail.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { AppLayoutComponent } from './layout/admin/layout/app.layout.component';
import { DasboardComponent } from './pages/admin/dasboard/dasboard.component';
import { ManaProductComponent } from './pages/admin/mana-product/mana-product.component';
import { ManaCategoriesComponent } from './pages/admin/mana-categories/mana-categories.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AppLayoutComponent,
    children:[
      {path: "", redirectTo: "dashboard", pathMatch: "full"},
      {path: "dashboard", component: DasboardComponent},
      {path: "managementProduct", component: ManaProductComponent},
      {path: "managementCategories", component: ManaCategoriesComponent},

    ]
  },
  {
    path: '',
    component: LayoutClientComponent,
    children:[
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component: HomeComponent},
   
      
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
