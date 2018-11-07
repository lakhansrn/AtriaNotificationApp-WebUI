import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../_services';

@Component({
  selector: 'app-register-writers',
  templateUrl: './register-writers.component.html',
  styleUrls: ['./register-writers.component.css']
})
export class RegisterWritersComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
  }

  registerWriter() {
    const form = this.registerForm.value;

    this.userService.getDetails().subscribe(res => {
      form.id = res.id;
      this.userService.registerUser(form)
        .subscribe(result => console.log(result));
    });
  }

}
