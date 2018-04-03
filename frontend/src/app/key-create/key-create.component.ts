import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-key-create',
  templateUrl: './key-create.component.html',
  styleUrls: ['./key-create.component.css']
})
export class KeyCreateComponent implements OnInit {

  keypair = {};
  generation = {
    size: 3
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.generateKeys();
  }

  generateKeys() {
    this.http.post('/keys', this.generation)
      .subscribe(res => {
          this.keypair = res;
        }, (err) => {
          console.log(err);
        }
      );
  }
}
