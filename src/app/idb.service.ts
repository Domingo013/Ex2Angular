import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdbService {
  public conexion: any
  constructor(callback: Function) {
    const peticion = indexedDB.open('ng-domingo', 1)
    peticion.onerror = () => { throw 'Error al conectar indexedDB' }
    peticion.onupgradeneeded = (event: any) => {
      this.conexion = event.target.result
      this.conexion.onerror = () => {
        console.log('Error al crear la bd')
      }
      this.crear()
    }
    peticion.onsuccess = (event: any) => {
      this.conexion = event.target.result
      callback()
    }
  }

  crear(): void {
    this.conexion.createObjectStore('buscadas', { keyPath: 'id' })
  }

}
