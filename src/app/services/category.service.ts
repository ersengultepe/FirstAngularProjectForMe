import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from '../components/category/category';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  // path= "http://localhost:3000/categories";
  path = "http://localhost:9001/api/v1/category/categories";

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path)
    .pipe(      
    
      tap(data => { console.log(JSON.stringify(data)) }),
      
      catchError(this.catchError)
    
    )
  }
  catchError(err: HttpErrorResponse) {
    let errorMessage = ""
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu" + err.error.message
    } else {
      errorMessage = "Sistemsel Bir Hata Oluştu" + err.status.toString
    }

    return throwError(errorMessage);

  }
}
