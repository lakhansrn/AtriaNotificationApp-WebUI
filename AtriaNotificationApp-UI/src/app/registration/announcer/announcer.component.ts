import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, ValidationErrors, EmailValidator } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { AuthenticationService, LoaderService } from '../../_services';

@Component({
  selector: 'app-announcer',
  templateUrl: './announcer.component.html',
  styleUrls: ['./announcer.component.css']
})
export class AnnouncerRegistrationComponent implements OnInit {

  response: any;
  email = null;
  role = null;
  announcerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [
      {value: this.email, disabled: true},
      Validators.required
    ],
    role: [
      {value: this.role, disabled: true},
      Validators.required
    ],
    pwd: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    { validator: this.passwordMatchValidator} ),
    department: ['', Validators.required],
    pno: ['', Validators.required]
  });

  constructor(
    private router: ActivatedRoute,
    private registrationService: RegistrationService,
    private route: Router,
    private authenticationService: AuthenticationService,
    private loaderService: LoaderService,
    private fb: FormBuilder) {
      const id = this.router.snapshot.queryParamMap.get('id');

      if (id.length === 0 || id === null) {
        this.route.navigate(['404']);
      } else {
        this.loaderService.setLoader();
        this.registrationService.getRegisterDetails(id)
        .subscribe(res => {
          this.loaderService.clearLoader();
          Object.assign(this, res);
          this.announcerForm.controls['email'].setValue(this.email);
          this.announcerForm.controls['role'].setValue(this.role);
        });
      }
  }

  ngOnInit() {
  }

  get f() { return this.announcerForm.controls; }
  get pf() { return this.announcerForm.controls['pwd']['controls']; }

  passwordMatchValidator(fg: FormGroup): ValidationErrors | null {
    return fg.controls['password'].value === fg.controls['confirmPassword'].value ? null : {'mismatch': true};
  }

  register() {
    const {pwd, ...announcer} = this.announcerForm.value;
    announcer['email'] = this.f['email'].value;
    announcer['role'] = this.f['role'].value;
    announcer['password'] = this.pf['password'].value;
    this.loaderService.setLoader();
    this.registrationService.register(announcer)
      .subscribe(res => {
        this.loaderService.clearLoader();
        if (res['messages']) {
          this.response = res;
        } else if (res['token']) {
          this.authenticationService.authenticate(res['token']);
          this.route.navigate(['home']);
        }
      });
  }
}
