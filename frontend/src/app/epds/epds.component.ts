import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-epds',
  templateUrl: './epds.component.html',
  styleUrls: ['./epds.component.css']
})
export class EpdsComponent implements OnInit {

  epds: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/epd').subscribe(data => {
      this.epds = data;
    });
  }

}
