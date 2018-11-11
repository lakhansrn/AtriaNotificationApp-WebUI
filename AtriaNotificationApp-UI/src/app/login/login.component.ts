import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, UserService, LoaderService } from '../_services';
import { NavbarService } from '../navbar/navbar.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    error = '';
    cancelled: any;
    display = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private loadService: LoaderService,
        private authenticationService: AuthenticationService,
        private navbarService: NavbarService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = '/';

        this.navbarService.sigin$.subscribe(display => {
            this.display = display;
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loadService.setLoader();
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.loadService.clearLoader();
                    this.loginForm.reset();
                    this.router.navigate([this.returnUrl]);
                    this.display = !this.display;
                    this.error = null;
                },
                error => {
                    this.error = error;
                    this.loadService.clearLoader();
                });
    }

}
