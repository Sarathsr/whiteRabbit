
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Injectable }     from '@angular/core';
//import  *  as  data  from  '../data/data.json';


@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  loginCheck(item){

    let data=[{
      username:"admin",
      password:"root"
    }]
   
    // return true;
    // return this.http.post('book-manager001/authenticate', userItem).toPromise()
    // console.log(item);
  }
 


}