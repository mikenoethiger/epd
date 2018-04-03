import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-encryption-tool',
  templateUrl: './encryption-tool.component.html',
  styleUrls: ['./encryption-tool.component.css']
})
export class EncryptionToolComponent implements OnInit {

  key: string;
  number: number;
  encrypted: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  encryptText() {
    this.http.post('/encrypt', {key: this.key, number: this.number})
      .subscribe(res => {
          this.encrypted = res['encryptedNumber'];
        }, (err) => {
          console.log(err);
        }
      );
  }
}
