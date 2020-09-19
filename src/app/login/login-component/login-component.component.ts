import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from './../../services/customvalidation.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm : FormGroup;
  submitted = false; 
 

  constructor(private customValidator: CustomvalidationService, private formBuilder: FormBuilder,) { 

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user : ['',[Validators.required]],
      password : ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
    });
  }

  login(){
    
    this.submitted = true;
    if (this.loginForm.valid) {
      var userval = this.loginForm.value.user;
      var passwordval = this.loginForm.value.password;
      var userItem = {'username': userval, 'password' : passwordval};
    //   this.customValidator.loginCheck(userItem)
    //   .then((response) => {
    //   },(error) => {
    // });
     }


    
  }

}
