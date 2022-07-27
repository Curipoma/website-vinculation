import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from '@shared/validators/custom-validators';
import { AuthHttpService, AuthService } from '@services/auth';
import { MessageService } from '@services/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit {
  form: UntypedFormGroup;
  progressBar: boolean = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authHttpService: AuthHttpService,
    public messageService: MessageService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.newForm();
  }

  ngOnInit(): void {
    this.form.patchValue({
      // username: this.activatedRoute.snapshot.queryParams['username'],
      token: this.activatedRoute.snapshot.queryParams['token'],
    });
  }

  newForm(): UntypedFormGroup {
    return this.formBuilder.group(
      {
        token: [null, [Validators.required]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        passwordConfirmation: [null, [Validators.required]],
      },
      { validators: CustomValidators.passwordMatchValidator }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.resetPassword();
    } else {
      this.form.markAllAsTouched();
    }
  }

  resetPassword() {
    this.progressBar = true;
    this.authHttpService.resetPassword(this.form.value).subscribe(
      (response) => {
        this.progressBar = false;
        this.redirect();
      },
      (error) => {
        this.messageService.error(error);
        this.progressBar = false;
      }
    );
  }

  redirect() {
    this.router.navigate(['/auth/login']);
  }

  get usernameField() {
    return this.form.controls['username'];
  }

  get passwordField() {
    return this.form.controls['password'];
  }

  get passwordConfirmationField() {
    return this.form.controls['passwordConfirmation'];
  }
}
