import { Component } from '@angular/core';
import { Bicicleta } from '../_modelo/bicicleta';
import { isEmpty } from 'rxjs';

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
  if(this.bicicleta.color === "" || this.bicicleta.marca === "" || 
  this.bicicleta.velocidad === 0|| this.bicicleta.piniones === 0|| 
  this.bicicleta.platos === 0 ){    
    this.resultado= "Rellena los campos faltantes del formulario"
  }else{
    this.resultado= this.bicicleta.toString()
  }
  
}
acelerar(){
  this.bicicleta.acelerar(this.modificarVel)
}
frenar(){
  this.bicicleta.frenar(this.modificarVel)
}

}
