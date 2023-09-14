import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  logForm!: FormGroup
  constructor(private fb: FormBuilder,
    private router:Router,
    private loginService:LoginService,private commonService:CommonService) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.logForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', Validators.required),
     
    });
  }

  onSubmit() {
    debugger
  if(this.logForm.invalid) return;
  let payload = {
  email:this.logForm.value.email,
  password:this.logForm.value.password,
  }

  try {
    this.loginService.loginUser(payload).subscribe(
    (res) => {
      // console.log(res,'hshshssh');
      if(res){
        
        if(res.data && res.data.authtoken){
    this.commonService.dashboardActive.next(true);

          localStorage.setItem('Token', JSON.stringify(res.data.authtoken));
          localStorage.setItem('UserData', JSON.stringify(res.data.userData));
          this.router.navigate(['/dashboard'])
        }
      }
    },
    (err) => {
      // console.log(err.error)
      alert(err.error.message)
    })
  } catch (error) {
    console.log(error)
   
  }
  

  }
  // ngOnDestroy(): void {
  //   this.commonService.dashboardActive.next(false);
  // }
  
  forgetPassword(){

  }
  
}
