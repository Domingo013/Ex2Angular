import { Component } from '@angular/core';
import { IdbService } from '../idb.service';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  public observable: any
  public conexion: any
  
  constructor(private wikipediaService: WikipediaService) {
    this.conexion = new IdbService(this.iniciado.bind(this))
  }

  buscar() {
    let input: any = document.getElementById('inpbuscar')
    let url: any = "https://es.wikipedia.org/w/api.php?action=opensearch&search=JavaScript&limit=10&namespace=0&format=json&origin=*" + input.value

    this.wikipediaService.getLista(url).subscribe(
      (buscador: any) => {
        this.observable = buscador
        console.log(buscador)
      }
    )
  }

  iniciado() {
    //console.log('iniciado');
  }
 
}
