import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  firstNameControl = new FormControl('', [Validators.required, Validators.minLength(3), this.notHomeroValidator]);
  lastNameControl = new FormControl('', [Validators.required]);  
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  repeatPasswordControl = new FormControl('', [Validators.required, Validators.minLength(6)])

  registerForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    password: this.passwordControl,
    repeatPassword: this.repeatPasswordControl,
    email: this.emailControl
  },{
    validators:[
      this.passwordsMatchValidator()
    ]
  })

  notHomeroValidator(control: FormControl){
    if(control.value?.toLowerCase() ==='homero'){
      return{
        isHomero:true
      }
    }
    return null
  }

  passwordsMatchValidator() {
    return () => {
      if (this.passwordControl.value !== this.repeatPasswordControl.value) {
        return {
          passwordsMatch: false
        }
      }
      return null
    }
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }

}
