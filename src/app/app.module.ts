import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import  {UserService} from './user.service';
import { HttpModule } from '@angular/http';
import {AuthguardGuard} from './authguard.guard';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';


const routes: Routes = [
  { path: '', component: LoginComponent},
  {
  	path: 'success', component: FavoriteComponent,canActivate:[AuthguardGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    LoginComponent
  ],
  imports: [ 
     RouterModule.forRoot(routes),
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
