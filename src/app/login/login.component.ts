import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import  {UserService} from '../user.service';
import {Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private router: Router,private user:UserService,private http:Http) { }

  ngOnInit() {
  }

  private url:string="http://localhost:8080/login";


 data2={
	name:'',
	password:''
};

 

fetchdata(){

	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

	 this.http.post(this.url,this.data2,options).subscribe(
		(res:Response)=>{
			var getData=JSON.stringify(res.text());
			console.log(getData);
			if(getData=='"valid user"'){
				this.user.setUserLoggedIn();
                this.router.navigate(['success']);
			}
			else
			{
				window.alert("invalid ho aap");
			}
		}
		)		
	}

/*myclick(){
if(this.data2.name=="viren" && this.data2.password=="admin"){
	this.user.setUserLoggedIn();
this.router.navigate(['success']);
 //this.router.navigate(['/success']);
}

}*/
}
