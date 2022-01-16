import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from './category';
import { Product } from '../product/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    public productService: ProductService
  ) { }

  title = "Kategori Listesi"

  categories : Category[] = []
  products: Product[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
    this.productService.getProducts(0).subscribe(data => {
      this.products = data
    })
  }

  productCountByCategoryId(categoryId:number): number {    
      return this.products.filter(p=> p.categoryId === categoryId).length;
  }

}
