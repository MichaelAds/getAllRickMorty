import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataServiceService } from "src/app/shared/services/dataService.service";

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {
  dadosPersonagens: any;
  msgError = '';

  constructor(private service: DataServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getAllRickMorty('morty').subscribe((res:any) => {
      this.dadosPersonagens = res.results;
      console.log(this.dadosPersonagens);
    })

  }

  pegarInfoPersonagemError(event: any) {

  }

  pegarInfoPersonagem(event: any) {

  }

  eventoCard(event: any) {
    console.log(event.target.offsetParent.id);
    this.router.navigateByUrl(`detalhes-personagem/${event.target.offsetParent.id}`);
  }



}
