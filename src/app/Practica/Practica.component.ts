import { Component, OnInit } from '@angular/core';
import{Practica} from './Practica';
import{PracticaDetail} from './PracticaDetail';
import {ListarPracticaService} from './listarPractica.service'
@Component({
  selector: 'app-Practica',
  templateUrl: './Practica.component.html',
  styleUrls: ['./Practica.component.css']
})
export class PracticaComponent implements OnInit {

  constructor(private listarPracticaService: ListarPracticaService) { }
  public practicas: Array<PracticaDetail>;
  selectedPractica: PracticaDetail;
  selected = false;
  promedio:number;
  getPracticas()
  {
    this.listarPracticaService.getPracticas().subscribe(cs => {
      this.practicas = cs;


    });

  }
  onSelected(b: PracticaDetail): void {
    this.selected = true;
    this.selectedPractica = b;
  }
  ngOnInit() {
    this.getPracticas();
  }

}
