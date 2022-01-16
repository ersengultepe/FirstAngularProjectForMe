import { Component, NgModule, OnInit } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { Product } from './product';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  filterText = "";
  products: Product[] = []

  constructor(
    private alertifyService: AlertifyService,
    private sweetalert2Service: Sweetalert2Service,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    ChartComponent
  }

  addToCart(product: Product) {
    if (product.id > 2) {
      this.alertifyService.success("<strong style='color:black'>" + product.name + "</strong> Sepete Eklendi")
    } else {
      this.alertifyService.error("<strong style='color:black'>" + product.name + "</strong> Sepete Eklendi")
    }
  }

  getToNotice(product: Product) {
    this.sweetalert2Service.success("Sepete Eklendi " + product.name)
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      })
    })

  }

}
