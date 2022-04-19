import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './shared/services/dataService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  img = '';

  constructor(private service: DataServiceService) {

  }

  ngOnInit(): void {
  }


}
