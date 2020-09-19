import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  userArray:any=[];
  searchName:String='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listUsers();
  }
  listUsers(){
    this.http.get<any>('https://randomuser.me/api/0.8/?results=20').subscribe(
      res => {
        localStorage.setItem('userlist', JSON.stringify(res.results));
        this.userArray = JSON.parse(localStorage.getItem('userlist'));
        console.log(this.userArray);
      },
      error => {
        console.log("Error occured");
      });
  }

}
