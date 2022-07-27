import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from '@shared/validators/custom-validators';
import { AuthHttpService, AuthService } from '@services/auth';
import { CoreService, MessageService } from '@services/core';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss'],
})
export class PasswordChangeComponent implements OnInit {
  form: UntypedFormGroup = this.newForm();
  loaded$ = this.coreService.loaded$;
  progressBar: boolean = false;

  constructor(
    private authHttpService: AuthHttpService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private coreService: CoreService,
    private formBuilder: UntypedFormBuilder,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {}

  newForm(): UntypedFormGroup {
    return this.formBuilder.group(
      {
        confirmationPassword: [null, [Validators.required]],
        newPassword: [null, [Validators.required, Validators.minLength(8)]],
        oldPassword: [null, [Validators.required]],
      },
      { validators: CustomValidators.passwordMatchValidator }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.changePassword();
    } else {
      this.form.markAllAsTouched();
      this.messageService.errorsFields.then();
    }
  }

  changePassword() {
    this.authHttpService
      .changePassword(this.authService.auth.id, this.form.value)
      .subscribe((_) => {});
  }

  get confirmationPasswordField() {
    return this.form.controls['confirmationPassword'];
  }

  get newPasswordField() {
    return this.form.controls['newPassword'];
  }

  get oldPasswordField() {
    return this.form.controls['oldPassword'];
  }
}
