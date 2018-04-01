import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-epd-create',
  templateUrl: './epd-create.component.html',
  styleUrls: ['./epd-create.component.css']
})
export class EpdCreateComponent implements OnInit {

  epd = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveEpd() {
    this.http.post('/epd', this.epd)
      .subscribe(res => {
          this.router.navigate(['/epd-detail', res['id']]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
