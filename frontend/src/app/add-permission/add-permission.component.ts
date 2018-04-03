import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.css']
})
export class AddPermissionComponent implements OnInit {

  showRequest = true;
  showResponse = false;
  request = {};
  response = {};
  ehrId: string;
  permittedPublicKeys = [];
  ehr = {};
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.ehrId = this.route.snapshot.params['id'];
    this.http.get('/ehr/' + this.ehrId).subscribe(data => {
      this.ehr = data;
    });
  }

  fireRequest() {
    this.http.post('/entitle/' + this.ehrId, this.request)
      .subscribe(res => {
          this.response = res;
          this.showRequest = false;
          this.showResponse = true;
          this.reloadPermissionsOfEhr();
        }, (err) => {
          console.log(err);
        }
      );
  }

  reloadPermissionsOfEhr() {
    this.permittedPublicKeys = [];
    this.http.get('/ehr/' + this.ehrId).subscribe(data => {
      for (let i = 0; i < data['permittedPublicKeys'].length; i++) {
        this.http.get('/get-pk-owner-name/' + data['permittedPublicKeys'][i]).subscribe(response => {
          this.permittedPublicKeys.push({
            publicKey: data['permittedPublicKeys'][i],
            ownerName: response['name']
          });
        });
      }
    });
  }

  retry() {
    this.response = {};
    this.request = {};
    this.showRequest = true;
    this.showResponse = false;
  }
}
