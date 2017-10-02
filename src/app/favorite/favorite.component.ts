import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../user.service';
import {Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private user:UserService,private http:Http) { }

  ngOnInit() {
  	this.displayProfile();
  }

data3={
name:'',
password:'',
image:'https://pbs.twimg.com/profile_images/697506584205750272/WrePL042.png'
}

public displayProfile(){

this.http.get("http://localhost:8080/profile").subscribe(
	(res:Response)=>{
		this.data3.name=res.json().name;
		this.data3.password=res.json().password;
		

		
	})
}

}
