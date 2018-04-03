import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ehr',
  templateUrl: './ehr.component.html',
  styleUrls: ['./ehr.component.css']
})
export class EhrComponent implements OnInit {

  showRequestAccess = true;
  showAccessResponse = false;
  showEhr = false;
  ehrId: string;
  ehr = {};
  accessResponse = {};
  accessRequest = {};
  permittedPublicKeys = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.ehrId = this.route.snapshot.params['id'];
    this.http.get('/ehr/' + this.ehrId).subscribe(data => {
      this.ehr = data;

      for (let i = 0; i < this.ehr['permittedPublicKeys'].length; i++) {
        this.http.get('/get-pk-owner-name/' + this.ehr['permittedPublicKeys'][i]).subscribe(response => {
          this.permittedPublicKeys.push({
            publicKey: this.ehr['permittedPublicKeys'][i],
            ownerName: response['name']
          });
        });
      }
    });

  }

  requestAccess() {
    this.http.post('/ehr-access-request/' + this.ehrId, this.accessRequest)
      .subscribe(res => {
          this.accessResponse = res;
          this.showRequestAccess = false;
          this.showEhr = false;
          this.showAccessResponse = true;
        }, (err) => {
          console.log(err);
        }
      );
  }

  retry() {
    this.accessResponse = {};
    this.accessRequest = {};
    this.showRequestAccess = true;
    this.showEhr = false;
    this.showAccessResponse = false;
  }

  openEhr() {
    this.showRequestAccess = false;
    this.showAccessResponse = false;
    this.showEhr = true;
  }
}
