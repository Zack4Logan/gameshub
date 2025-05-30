import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosDataService } from '../../services/juegos-data.service';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  totalJuegos: number = 0;
  juegosGratis: number = 0;
  juegosPago: number = 0;
  mejorJuego: any = null;
  promedioPrecio: number = 0;

  constructor(private juegosService: JuegosDataService) {}

  ngOnInit(): void {
    this.juegosService.getEstadisticas().subscribe(est => {
      this.totalJuegos = est.totalJuegos;
      this.juegosGratis = est.juegosGratis;
      this.juegosPago = est.juegosPago;
      this.mejorJuego = est.mejorRating;
      this.promedioPrecio = est.promedioPrecio;
    });
  }
}


/*
RESPUESTAS PARTE 4.1:

1. src/app/interfaces/juego.interface.ts

2. src/app/services/juegos-data.service.ts

3. app.config.ts, usado en main.ts con bootstrapApplication()

RESPUESTAS PARTE 4.2:

1. Usa Angular standalone, sin necesidad de módulo raíz

2. Comparte el estado de forma reactiva entre componentes
*/
