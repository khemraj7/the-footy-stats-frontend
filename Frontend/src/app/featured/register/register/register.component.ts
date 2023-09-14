import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup
  submitted : boolean = false
  loader: boolean=false;
  constructor(private fb: FormBuilder,
    private registerService:RegisterService,
    private router:Router,
    private loginservice :LoginService ) { }

  ngOnInit(): void {
    this.createForm();
    // this.loader=true

    // setTimeout(() => {
    //   this.loader = false
    // }, 2000);
  }
  createForm() {
    debugger
    this.form = this.fb.group({
      username: new FormControl('', Validators.compose([
        Validators.required,Validators.minLength(6)
      ])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
    }, { validators: this.passwordMatchValidator.bind(this) });
  }

  passwordMatchValidator(form: FormGroup) {
    const passwordControl = form.get('password');
    const confirmControl = form.get('confirm');
  
    if (passwordControl.value === confirmControl.value) {
      confirmControl.setErrors(null); 
      return null; 
    } else {
      confirmControl.setErrors({ passwordMismatch: true }); 
      return { passwordMismatch: true };
    }
  }

  onSubmit() {
    if(this.form.invalid)return;
    this.loader=true
    let payload = {
      user_name: this.form.value.username,
      last_name: "",
    email:this.form.value.email,
    password:this.form.value.password,
    role:"FREE",
    }

    this.registerService.registerUser(payload).subscribe((res)=>{
   
      try {
        if(res){
         console.log(res,"reguister");
         
          if(res.status=='success'){
        localStorage.setItem('registerResponse', JSON.stringify(res.data.dbResult));
        localStorage.setItem('Token', JSON.stringify(res.data.token));
        setTimeout(() => {
          this.loader = false
          this.router.navigateByUrl('/dashboard');
        }, 2000);
    
          }
        }
        else{
          this.form.controls['username'].setErrors({ invalid: true });
          localStorage.removeItem('registerResponse');
        }
      } catch (error) {
        this.form.controls['username'].setErrors({ invalid: true });
        localStorage.removeItem('registerResponse');
      }
      
    })

}
googleLogin(){
  this.loginservice.googleUser().subscribe((res)=>{
    if(res){
     console.log(res,"hahah");
  // this.router.navigateByUrl('/dashboard');
    }
  })
}
facebookHtml : string | undefined
fbUser(){
this.loginservice.fbUser().subscribe((res)=>{
  console.log('res::::::::::', res)
  // window.location.href = res.authorizationUrl;
  // this.facebookHtml = res;
})  
}
}
