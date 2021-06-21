import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries, citiesByCountry } from './constants';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  countries: any;
  cities: any = [];
  errorSuccessMessage: string = '';
  showResponse: boolean = false;
  successResponse: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    readonly registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.countries = countries;
    this.handleValidationsSignUpForm();
  }

  public handleValidationsSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      providence: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [ '', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
      termsAndConditions: [false, Validators.requiredTrue]
    });
  }

  handleInputValidation( inputName: string ) {
    return this.signUpForm.controls[inputName].errors &&
    this.signUpForm.controls[inputName].touched
  }

  public handleFillSignUpData() {
    if (this.signUpForm.value.password === this.signUpForm.value.confirmpassword) {
      const data = {
        name: this.signUpForm.value.name,
        lastName: this.signUpForm.value.lastName,
        country: this.signUpForm.value.country,
        providence: this.signUpForm.value.providence,
        email: this.signUpForm.value.email,
        phone: this.signUpForm.value.phone,
        password: this.signUpForm.value.password
      };
      this.handleSignUpData( data );
    } else {
      this.showResponse = true;
      this.successResponse = false;
      this.errorSuccessMessage = 'Las contraseñas no coinciden';
      this.closeFormMessage();
    }
  }

  handleSignUpData(data: any) {
    this.registerService.signUp( data ).subscribe(
      (res: any) => {
        const { token } = res;
        localStorage.setItem('token', token)
        this.successResponse = true;
        this.showResponse = true;
        this.errorSuccessMessage = 'Registro guardado exitosamente';
        this.closeFormMessage();
      },
      (err: any) => {
        this.showResponse = true;
        this.successResponse = false;
        this.errorSuccessMessage = 'Error del servidor, intenta nuevamente mas tarde';
        this.closeFormMessage();
      }
    )
  }

  public handleCitiesByCountry() {
    if (this.signUpForm.value.country !== '') {
      this.cities = citiesByCountry.find((country) => country.country === this.signUpForm.value.country)
    }
  }

  closeFormMessage() {
    setTimeout(() => {
      this.showResponse = false;
    }, 2000);
  }
}
