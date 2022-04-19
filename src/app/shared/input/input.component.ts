import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataServiceService } from '../services/dataService.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  buscar: FormGroup;

  @Output() infoPersonagem = new EventEmitter;
  @Output() infoPersonagemError = new EventEmitter;

  @ViewChild('form')
    form: NgForm | undefined;

  constructor(private fb: FormBuilder, private service: DataServiceService) {
    this.buscar = this.fb.group({
      nomePersonagem: ['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

  buscarPersonagem() {
    const nomePersonagem = this.buscar.controls.nomePersonagem.value;

    this.service.getAllRickMorty(nomePersonagem).subscribe(
    res => {
      this.infoPersonagem.emit(res);

    }, err => {
      this.infoPersonagemError.emit(err);
    })

    this.form?.onReset();

  }

}
