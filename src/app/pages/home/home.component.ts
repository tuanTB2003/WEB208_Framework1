import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { CategoriesService } from 'src/app/services/categories/categories.service';
// import { Product } from 'src/app/demo/api/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  products:any=[]

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';

    sourceCities: any[] = [];

    targetCities: any[] = [];

    orderCities: any[] = [];
    categories:any=[]

    constructor(private ProductsService:ProductsService, private Categories:CategoriesService ){}


    ngOnInit() {
      // this.initChart();
      this.ProductsService.getProducts().subscribe(
        (response)=>{
          this.products = response.datas;
          console.log(response)
        }
      )
      this.Categories.getAllCategories().subscribe(
        (response)=>{
          this.categories = response.datas
          // console.log(response)
        }
      )

    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }
    
}
