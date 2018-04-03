import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-texttonumber-tool',
  templateUrl: './texttonumber-tool.component.html',
  styleUrls: ['./texttonumber-tool.component.css']
})
export class TexttonumberToolComponent implements OnInit {

  text: string;
  number: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.text = 'secret';
    this.convertText();
  }

  convertText() {
    this.http.post('/utility/texttonumber', {text: this.text})
      .subscribe(res => {
          this.number = res['number'];
        }, (err) => {
          console.log(err);
        }
      );
  }

}
