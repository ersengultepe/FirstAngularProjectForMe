import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../components/product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // path = "http://localhost:3000/products";

  path = "http://localhost:9001/api/v1/product/products";

  constructor(private http:HttpClient) { }

  getProducts(categoryId: number):Observable<Product[]>{

    let newPath = this.path

    if(categoryId){
      newPath +=  "/category?id=" + categoryId
    }

    return this.http.get<Product[]>(newPath)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)      
    )
  }

  handleError(err: HttpErrorResponse){
    let errorMessage = "";
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = "Bir hata oluştu" + err.error.message
    }else{
      errorMessage = "Sistemsel bir hata oluştu"
    }
    return throwError(errorMessage);
  }

}
