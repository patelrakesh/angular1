import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngbootstrap';
  id:string = '';
  city_grp:string = '';
  name:string = '';
  asset_category:string = '';
  asset_type:string = '';
  public now: Date = new Date();
  
  constructor(private httpClient: HttpClient) {}
	  customerid(event:any){
	  	this.id = event.target.value;
	  }
	  citygrp(event:any){
	  	this.city_grp = event.target.value;
		this.foundgrp = false;
	  }
	  name_custo(event:any){
	  	this.name = event.target.value;
		this.foundnm = false;
	  }
	  description_custo(event:any){
	  	this.description = event.target.value;
	  }
	  code_custo(event:any){
	  	this.code = event.target.value;
		this.foundcd = false;
	  }
	  asset_cat(event:any){
	  	this.asset_category = event.target.value;
		this.foundcat = false;
	  }
	  asset_typ(event:any){
	  	this.asset_type = event.target.value;
		this.foundtyp = false;
	  }
	  
        
	  
	  postrulesvale (){
	  	this.httpClient.post(`http://dev01.cyberradar.net:8080/api/settings/rules`,
		{	
			createdDate: this.now,
			customerid: this.id,
			name: this.name,
			city_grp: this.city_grp,
			description: this.description,
			code: this.code,
			asset_category: this.asset_category,
			asset_type: this.asset_type
		})
		.subscribe(
			(data:any) => {
				if (this.name == ''){
					this.foundnm = true;
				}
				if (this.code == ''){
					this.foundcd = true;
				}
				if (this.city_grp == ''){
					this.foundgrp = true;
				}
				if (this.asset_category == ''){
					this.foundcat = true;
				}
				if (this.asset_type == ''){
					this.foundtyp = true;
				}
				
				console.log(data);
			}
		)
	  }
	  
	  getrulesvale (){
	  	this.httpClient.get(`http://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?id=${this.id}`)
		.subscribe(
			(data:any[]) => {
				console.log(data);
			}
		) }


