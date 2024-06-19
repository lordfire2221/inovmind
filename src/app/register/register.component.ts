import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service'
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public RegisterForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private userService:AuthService,
    private router:Router,
    public  apiService:ApiService,
    public afAuth: AngularFireAuth
  ){
    this.RegisterForm = this.fb.group({
      name:['',[Validators.required,Validators.email]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(4)]],
      id_user:['',[Validators.required]],
    })
  }

  async onSubmit(){
    const formValue = this.RegisterForm.value;
    try{
      const result = await this.afAuth
      .createUserWithEmailAndPassword(formValue.email, formValue.password)
      if(result){
        const auth = getAuth();
        const user_id = result.user?.uid;
        formValue.id_user = user_id
        this.apiService.createUser(formValue)
        this.router.navigate(['login'])
      }
  }catch(error:any){
    window.alert(error.message);
  }
}

ngOnInit(): void {
  
}

}
