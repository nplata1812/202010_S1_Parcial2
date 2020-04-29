import { Component, OnInit, Input } from '@angular/core';
import { Practica } from '../Practica';
import { PracticaDetail } from '../PracticaDetail';

@Component({
  selector: 'app-PracticaDetail',
  templateUrl: './practicaDetail.component.html',
  styleUrls: ['./practicaDetail.component.css']
})
export class PracticaDetailComponent implements OnInit {

  @Input() practicaDetail: PracticaDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.practicaDetail.id);
  }

}
