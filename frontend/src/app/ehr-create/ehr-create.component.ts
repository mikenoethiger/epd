import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ehr-create',
  templateUrl: './ehr-create.component.html',
  styleUrls: ['./ehr-create.component.css']
})
export class EhrCreateComponent implements OnInit {

  ehr = {};
  epdId = '';
  fileToUpload: File = null;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.epdId = this.route.snapshot.params['id'];
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  saveEhr() {
    const formData: FormData = new FormData();
    formData.append('image', this.fileToUpload, this.fileToUpload.name);
    formData.append('name', this.ehr['name']);

    this.http.post('/epd/' + this.epdId + '/ehr', formData)
      .subscribe(res => {
          console.log(res);
          this.router.navigate(['/epd-detail', this.epdId]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
