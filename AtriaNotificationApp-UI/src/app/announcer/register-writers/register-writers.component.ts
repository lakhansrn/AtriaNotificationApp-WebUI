import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService, LoaderService, ToastService } from '../../_services';

@Component({
  selector: 'app-register-writers',
  templateUrl: './register-writers.component.html',
  styleUrls: ['./register-writers.component.css']
})
export class RegisterWritersComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private loaderService: LoaderService,
    private toastService: ToastService,
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

    this.loaderService.setLoader();
    this.userService.getDetails().subscribe(res => {
      form.id = res.id;
      this.userService.registerUser(form)
        .subscribe(result => {
          console.log(result);
          if (result === null) {
            this.toastService.setToastMsg({key: 'alert', severity: 'success', summary: 'Success', detail: 'Email sent!'});
          } else {
            this.toastService.setToastMsg({key: 'alert', severity: 'error', summary: 'Error', detail: 'There was some problem'});
          }
          this.loaderService.clearLoader();
          this.registerForm.markAsPristine();
          this.registerForm.reset();
        });
    });
  }

}
