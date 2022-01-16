import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class Sweetalert2Service {

  constructor() { }

  success(mesaj:string){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: mesaj,
      showConfirmButton: false,
      timer: 15000
    })
  }

}
