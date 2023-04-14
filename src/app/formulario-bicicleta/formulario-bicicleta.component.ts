import { Component } from '@angular/core';
import { Bicicleta } from '../_modelo/bicicleta';

@Component({
  selector: 'app-formulario-bicicleta',
  templateUrl: './formulario-bicicleta.component.html',
  styleUrls: ['./formulario-bicicleta.component.css']
})
export class FormularioBicicletaComponent {

  OnInit(){    
  }
bicicleta: Bicicleta = new Bicicleta("","",0,0,0,false)
resultado: string=""
modificarVel: number=0
enviarDatos(){
  this.resultado= this.bicicleta.toString()
}

}
