import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ['Cheris', 'Anna'];

  ngOnInit() {
    try {
      this.signupForm = new FormGroup({
        userData: new FormGroup({
          username: new FormControl(null, [
            Validators.required,
            Validators.pattern(/[a-z]/),
            this.forbiddenName.bind(this)
          ]),
          email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
        }),
        gender: new FormControl("male"),
        hobbies: new FormArray([

        ])
      });
    } catch (err) {

    }
  }

  onAddHobby () {
    try {
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.signupForm.get('hobbies')).push(control);
    } catch (err) {

    }
  }

  forbiddenName (control: FormControl) : {[s: string]: boolean} {
    try {
      if (this.forbiddenUsernames.map(name => name.toLowerCase()).includes(control.value)) {
        return {'nameIsForbidden': true};
      } else {
        /** Either return or nothing here, don't return false */
        return null;
      }
    } catch (err) {

    }
  }

  forbiddenEmails (control: FormControl) : Promise<any> | Observable<any> {
    try {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({emailIsForbidden: true})
          } else {
            resolve(null);
          }
        }, 1500);
      });
      return promise;
    } catch (err) {
      
    }
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
