import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-epd-detail',
  templateUrl: './epd-detail.component.html',
  styleUrls: ['./epd-detail.component.css']
})
export class EpdDetailComponent implements OnInit {

  epd = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getEpdDetail(this.route.snapshot.params['id']);
  }

  getEpdDetail(id) {
    this.http.get('/epd/' + id).subscribe(data => {
      this.epd = data;
    });
  }

}
