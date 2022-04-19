import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/shared/services/dataService.service';

@Component({
  selector: 'app-caracteristica-personagem',
  templateUrl: './caracteristica-personagem.component.html',
  styleUrls: ['./caracteristica-personagem.component.scss']
})
export class CaracteristicaPersonagemComponent implements OnInit {
  idPersonagem: string = '';
  detalhePersonagem: any;

  constructor(private route: ActivatedRoute, private service: DataServiceService) {
    this.route.params.subscribe(params => this.idPersonagem = params['id']);
  }

  ngOnInit() {
    this.service.getAllRickMortyID(this.idPersonagem).subscribe(res => {

      this.detalhePersonagem = res;
    })
  }

}
