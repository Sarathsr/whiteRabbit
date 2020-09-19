import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  declarations: [LoginComponentComponent],
  exports:[LoginComponentComponent]
})
export class LoginModule {

 }
