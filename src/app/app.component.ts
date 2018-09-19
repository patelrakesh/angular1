import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  	title = 'ngbootstrap';
  	readonly ROOT_URL = 'http://dev01.cyberradar.net:8080/api/settings/rules';
  	constructor(private http: HttpClient) {}
  	AddRule (AssetType,AssetCategory,CustomerId,CityGroup,Code,Name,Description) {
		const data = {
			"activatedDate": "2018-09-19T06:29:32.576Z",
			"assetType": {
			  "id": "string",
			  "name": "string"
			},
			"customerId": 0,
			"customerName": "string",
			"description": "string",
			"disabledDate": "2018-09-19T06:29:32.576Z",
			"isActive": false,
			"isObsolete": false,
			"isUserDefined": false,
			"obsoleteDate": "2018-09-19T06:29:32.576Z",
			"publishedDate": "2018-09-19T06:29:32.576Z",
			"ruleCode": "string",
			"ruleConditions": [
			  {
				"assetCategory": {
				  "id": "string",
				  "name": "string"
				},
				"attributeId": "string",
				"conditionNumber": 0,
				"constantOperation": "string",
				"createdDate": "2018-09-19T06:29:32.576Z",
				"id": "string",
				"operator": "string",
				"value": "string"
			  }
			],
			"ruleName": "string"
		  }
		const headers = new HttpHeaders().set('Authorization', 'AccessToken:test');
	  	this.newRule = this.http.post(this.ROOT_URL, data, {headers})
	}
}


